// ESA 边缘函数:重现游戏所需的两个接口(本地 Node 版 server.mjs 的边缘移植)。
// - GET  /api/leaderboard            → { top, count }
// - POST /api/leaderboard            → start 领 token / 提交分数
// - POST /api/presence               → { count, best, riders }(实例内存,同节点同屏)
// 排行榜持久化用 EdgeKV:每片 ≤20 条(单 Value 上限 1.8MB、Key ≤512B,分片留足余量)。
// 前置:控制台「边缘计算和AI > KV存储」创建名为 starrynightrider 的存储空间。

const KV_NAMESPACE = "starrynightrider";
const BOARD_KEY = "board:v1"; // 单 Key 存全榜(Value 上限 1.8MB ≈ 数万条,超出前会按 top 2000 截断)
const MAX_ENTRIES = 2000;
const TOKEN_TTL_MS = 10 * 60 * 1000;
const HANDLE_RE = /^[A-Za-z0-9_]{1,15}$/;

// ---------- 纯逻辑(可本地单测) ----------

export const sortEntries = (entries) =>
  [...entries].sort((a, b) => b.s - a.s || a.t - b.t);

export const topN = (entries, n = 25) =>
  sortEntries(entries).slice(0, n).map(({ h, s }) => ({ handle: h, score: s }));

export const mergeEntry = (entries, handle, score, now) => {
  const prev = entries.find((e) => e.h.toLowerCase() === handle.toLowerCase());
  if (prev) {
    if (score > prev.s) prev.s = score;
    prev.t = now;
    return prev;
  }
  const e = { h: handle, s: score, t: now };
  entries.push(e);
  return e;
};

const randToken = () => {
  const b = new Uint8Array(16);
  (globalThis.crypto && crypto.getRandomValues) ? crypto.getRandomValues(b) : b.forEach((_, i) => (b[i] = Math.floor(Math.random() * 256)));
  return [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

// ---------- EdgeKV(带内存兜底) ----------

let memBoard = []; // KV 不可用时的实例内存兜底
let kvBroken = false;

const kv = () => new EdgeKV({ namespace: KV_NAMESPACE });

const readBoard = async () => {
  if (kvBroken) return memBoard;
  try {
    const raw = await kv().get(BOARD_KEY, { type: "json" });
    return Array.isArray(raw) ? raw : [];
  } catch {
    kvBroken = true; // namespace 不存在等场景:降级为实例内存,游戏仍可玩(重启丢榜)
    return memBoard;
  }
};

const writeBoard = async (entries) => {
  if (kvBroken) {
    memBoard = entries;
    return false;
  }
  try {
    await kv().put(BOARD_KEY, JSON.stringify(entries));
    return true;
  } catch {
    kvBroken = true;
    memBoard = entries;
    return false;
  }
};

const putToken = async (token, expiry) => {
  if (kvBroken) return;
  try {
    await kv().put("t:" + token, String(expiry));
  } catch {}
};
const takeToken = async (token) => {
  if (kvBroken) return true; // 降级模式下不校验 token
  try {
    const k = kv();
    const raw = await k.get("t:" + token, { type: "text" });
    if (raw === undefined) return false;
    await k.delete("t:" + token);
    return Date.now() < Number(raw);
  } catch {
    return false;
  }
};

// ---------- presence(实例内存:低频写 KV 会打爆配额,同节点玩家互见) ----------

const riders = new Map(); // id -> { lastSeen, best, slot, handle, p }
const RIDER_TTL_MS = 45 * 1000;
const RIDER_ACTIVE_MS = 4 * 1000;

const slotFor = () => {
  const now = Date.now();
  const used = new Set([...riders.values()].filter((r) => now - r.lastSeen < RIDER_TTL_MS).map((r) => r.slot));
  let s = 1;
  while (used.has(s)) s++;
  return s;
};

const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

export function presence(body) {
  const key = typeof body.uid === "string" && body.uid ? body.uid.slice(0, 24) : body.id;
  if (!key) return { count: 0, best: 0, riders: [] };
  if (body.bye) {
    riders.delete(key);
    return { count: 0, best: 0, riders: [] };
  }
  const now = Date.now();
  for (const [id, r] of riders) if (now - r.lastSeen > RIDER_TTL_MS) riders.delete(id);

  const r = riders.get(key) || { lastSeen: 0, best: 0, slot: slotFor(), p: null };
  r.lastSeen = now;
  const haul = Number(body.haul);
  if (Number.isFinite(haul)) r.best = Math.max(r.best, Math.floor(haul));
  if (typeof body.handle === "string" && body.handle && body.handle.length <= 16) r.handle = body.handle;
  if (body.p && num(body.p.x) !== null && num(body.p.z) !== null && num(body.p.y) !== null) {
    r.p = {
      x: num(body.p.x), y: num(body.p.y), z: num(body.p.z),
      h: num(body.p.h) ?? 0,
      mode: [0, 1, 2, 3].includes(body.p.mode) ? body.p.mode : 0,
      s: Math.min(60, num(body.p.s) ?? 0),
    };
  }
  riders.set(key, r);

  const live = [...riders.values()].filter((x) => now - x.lastSeen < RIDER_TTL_MS);
  const active = [...riders.entries()]
    .filter(([, x]) => now - x.lastSeen < RIDER_ACTIVE_MS && x.p)
    .map(([id, x]) => ({ id, slot: x.slot, handle: x.handle || "", ...x.p }));
  return { count: live.length, best: r.best, riders: active };
}

// ---------- HTTP ----------

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const readJson = async (request) => {
  try {
    return await request.json();
  } catch {
    return null;
  }
};

async function handleLeaderboard(request) {
  if (request.method === "GET") {
    const entries = await readBoard();
    return json({ top: topN(entries), count: entries.length });
  }
  if (request.method !== "POST") return json({ ok: false, message: "Method not allowed" }, 405);

  const body = await readJson(request);
  if (!body || typeof body !== "object") return json({ ok: false, message: "Bad request" }, 400);

  if (body.action === "start") {
    const token = randToken();
    await putToken(token, Date.now() + TOKEN_TTL_MS);
    return json({ ok: true, token });
  }

  const handle = String(body.handle || "").trim().replace(/^@+/, "");
  const score = Number(body.score);
  if (!HANDLE_RE.test(handle)) return json({ ok: false, message: "Invalid handle." });
  if (!Number.isFinite(score) || score < 0 || score > 10_000_000)
    return json({ ok: false, message: "Invalid score." });
  if (!(await takeToken(body.token)))
    return json({ ok: false, message: "The score could not be posted. Try again in a moment." });

  const now = Date.now();
  const entries = await readBoard();
  const me = mergeEntry(entries, handle, Math.floor(score), now);
  // 只保留 top 2000,避免 Value 无限增长(Value 上限 1.8MB)
  const kept = sortEntries(entries).slice(0, MAX_ENTRIES);
  await writeBoard(kept);

  const sorted = sortEntries(kept);
  return json({
    ok: true,
    handle: me.h,
    rank: sorted.findIndex((e) => e.h.toLowerCase() === handle.toLowerCase()) + 1,
    best: me.s,
    top: topN(kept),
    count: kept.length,
  });
}

export default {
  async fetch(request) {
    try {
      const { pathname } = new URL(request.url);
      if (pathname === "/api/leaderboard") return await handleLeaderboard(request);
      if (pathname === "/api/presence") {
        if (request.method !== "POST") return json({ count: 0, best: 0, riders: [] }, 405);
        return json(presence((await readJson(request)) || {}));
      }
      return json({ error: "not found" }, 404);
    } catch (e) {
      return json({ error: String(e && e.message || e) }, 500);
    }
  },
};
