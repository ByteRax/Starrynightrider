// Starry Nightrider — local replica server.
// Serves the static site and reimplements the two endpoints the game talks to
// (/api/leaderboard and /api/presence), persisting scores to ./data/leaderboard.json.
// Zero dependencies: node server.mjs, then open http://localhost:8080

import http from "node:http";
import { createHmac, randomBytes } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "site");
const DATA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "data");
const BOARD_FILE = path.join(DATA_DIR, "leaderboard.json");
const SECRET_FILE = path.join(DATA_DIR, "secret");
const PORT = Number(process.env.PORT || 8080);
const TOKEN_TTL_MS = 10 * 60 * 1000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

// ---------- persistence ----------

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(SECRET_FILE)) fs.writeFileSync(SECRET_FILE, randomBytes(32).toString("hex"));
const SECRET = fs.readFileSync(SECRET_FILE, "utf8").trim();

let board = { entries: [] };
try {
  board = JSON.parse(fs.readFileSync(BOARD_FILE, "utf8"));
  if (!Array.isArray(board.entries)) board = { entries: [] };
} catch {
  // first run — start empty
}
const saveBoard = () => fs.writeFileSync(BOARD_FILE, JSON.stringify(board, null, 2));

// ---------- leaderboard ----------

// token = base64url(handle|score|expiry) + "." + hmac — survives server restarts
const sign = (payload) => createHmac("sha256", SECRET).update(payload).digest("base64url");
const mintToken = () => {
  const payload = Buffer.from(`${Date.now() + TOKEN_TTL_MS}`).toString("base64url");
  return `${payload}.${sign(payload)}`;
};
const checkToken = (token) => {
  if (typeof token !== "string") return false;
  const dot = token.lastIndexOf(".");
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  if (sign(payload) !== token.slice(dot + 1)) return false;
  const expiry = Number(Buffer.from(payload, "base64url").toString("utf8"));
  return Number.isFinite(expiry) && Date.now() < expiry;
};

const HANDLE_RE = /^[\u4e00-\u9fa5A-Za-z0-9_]{1,12}$/; // 中文名号(四大名著人物)或字母数字
const top = () =>
  [...board.entries]
    .sort((a, b) => b.score - a.score || a.postedAt - b.postedAt)
    .slice(0, 25)
    .map(({ handle, score, avatar }) => (avatar ? { handle, score, avatar } : { handle, score }));

// ---------- presence / 同屏多人 ----------

// id -> { lastSeen, best, slot, handle, p:{x,y,z,h,mode,s} }
const riders = new Map();
const RIDER_TTL_MS = 45 * 1000; // 计入「在画中」人数的窗口
const RIDER_ACTIVE_MS = 4 * 1000; // 广播给其他骑手的窗口(位置新鲜度)

const pruneRiders = () => {
  const cutoff = Date.now() - RIDER_TTL_MS;
  for (const [id, r] of riders) if (r.lastSeen < cutoff) riders.delete(id);
};

// 分配一个当前空闲的小编号(用于「骑手 3」这类标签)
const slotFor = () => {
  const used = new Set();
  for (const r of riders.values()) if (Date.now() - r.lastSeen < RIDER_TTL_MS) used.add(r.slot);
  let s = 1;
  while (used.has(s)) s++;
  return s;
};

const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

// ---------- http helpers ----------

const send = (res, status, body, type = "application/json; charset=utf-8") => {
  const data = typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body);
  res.writeHead(status, { "content-type": type, "cache-control": "no-store" });
  res.end(data);
};

const readJson = (req) =>
  new Promise((resolve) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > 64 * 1024) {
        resolve(null);
        req.destroy();
      } else chunks.push(c);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        resolve(null);
      }
    });
    req.on("error", () => resolve(null));
  });

// ---------- api ----------

async function apiLeaderboard(req, res) {
  if (req.method === "GET") {
    return send(res, 200, { top: top(), count: board.entries.length });
  }

  if (req.method !== "POST") return send(res, 405, { ok: false, message: "Method not allowed" });

  const body = await readJson(req);
  if (!body || typeof body !== "object") return send(res, 400, { ok: false, message: "Bad request" });

  // step 1 — client asks for a one-shot token before showing the post form
  if (body.action === "start") return send(res, 200, { ok: true, token: mintToken() });

  // step 2 — post a score
  const handle = String(body.handle || "").trim().replace(/^@+/, "");
  const score = Number(body.score);
  if (!HANDLE_RE.test(handle)) return send(res, 200, { ok: false, message: "Invalid handle." });
  if (!Number.isFinite(score) || score < 0 || score > 10_000_000)
    return send(res, 200, { ok: false, message: "Invalid score." });
  if (!checkToken(body.token))
    return send(res, 200, { ok: false, message: "The score could not be posted. Try again in a moment." });

  const now = Date.now();
  const prev = board.entries.find((e) => e.handle.toLowerCase() === handle.toLowerCase());
  let rank;
  if (prev) {
    prev.score = Math.max(prev.score, Math.floor(score));
    prev.postedAt = now;
  } else {
    board.entries.push({ handle, score: Math.floor(score), postedAt: now });
  }
  saveBoard();
  const me = board.entries.find((e) => e.handle.toLowerCase() === handle.toLowerCase());
  rank = top().findIndex((e) => e.handle.toLowerCase() === handle.toLowerCase()) + 1;

  return send(res, 200, {
    ok: true,
    handle: me.handle,
    rank,
    best: me.score,
    top: top(),
    count: board.entries.length,
  });
}

async function apiPresence(req, res) {
  if (req.method !== "POST") return send(res, 405, { count: 0 });
  const body = await readJson(req);
  if (!body || typeof body.id !== "string" || !body.id) return send(res, 400, { count: 0 });

  // 多人模块会附带稳定的 uid;没有就用游戏自带的随机 id
  const key = typeof body.uid === "string" && body.uid ? body.uid.slice(0, 24) : body.id;

  if (body.bye) {
    riders.delete(key);
    return send(res, 204, "");
  }

  pruneRiders();
  const now = Date.now();
  const r = riders.get(key) || { lastSeen: 0, best: 0, slot: slotFor(), p: null };
  r.lastSeen = now;
  const haul = Number(body.haul);
  if (Number.isFinite(haul)) r.best = Math.max(r.best, Math.floor(haul));
  if (typeof body.handle === "string" && body.handle && body.handle.length <= 16) r.handle = body.handle;
  if (body.p && num(body.p.x) !== null && num(body.p.z) !== null && num(body.p.y) !== null) {
    r.p = {
      x: num(body.p.x),
      y: num(body.p.y),
      z: num(body.p.z),
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

  return send(res, 200, { count: live.length, best: r.best, riders: active });
}

// ---------- static ----------

function serveStatic(req, res, urlPath) {
  let pathname = decodeURIComponent(urlPath.split("?")[0]);
  if (pathname.endsWith("/")) pathname += "index.html";
  const filePath = path.normalize(path.join(ROOT, pathname));
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT)
    return send(res, 403, "forbidden", "text/plain");

  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, "not found", "text/plain");
    res.writeHead(200, {
      "content-type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "content-length": st.size,
      "cache-control": "no-cache",
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const urlPath = req.url || "/";
  if (urlPath === "/api/leaderboard") return void apiLeaderboard(req, res).catch(() => send(res, 500, { ok: false, message: "Server error" }));
  if (urlPath === "/api/presence") return void apiPresence(req, res).catch(() => send(res, 500, { count: 0 }));
  return void serveStatic(req, res, urlPath);
});

server.listen(PORT, () => {
  console.log(`Starry Nightrider → http://localhost:${PORT}`);
});
