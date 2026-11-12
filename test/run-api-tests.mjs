// functions/api.js 纯逻辑本地单测(node test/run-api-tests.mjs)
import assert from "node:assert/strict";
import * as api from "../functions/api.js";

const { sortEntries, topN, mergeEntry, presence } = api;

// 排序:分数降序、同分先到先得
assert.deepEqual(
  sortEntries([{ h: "a", s: 5, t: 2 }, { h: "b", s: 9, t: 1 }, { h: "c", s: 5, t: 1 }]),
  [{ h: "b", s: 9, t: 1 }, { h: "c", s: 5, t: 1 }, { h: "a", s: 5, t: 2 }],
);

// topN:输出 {handle, score}、上限 25
assert.deepEqual(topN([{ h: "x", s: 1, t: 1 }]), [{ handle: "x", score: 1 }]);
assert.equal(topN(Array.from({ length: 40 }, (_, i) => ({ h: "u" + i, s: i, t: i }))).length, 25);

// 合并:同名保留最高分、更新时间
{
  const e = [{ h: "a", s: 10, t: 1 }];
  const me = mergeEntry(e, "A", 5, 9);
  assert.equal(me.s, 10);
  assert.equal(e.length, 1);
  const me2 = mergeEntry(e, "A", 99, 12);
  assert.equal(me2.s, 99);
  assert.equal(e.length, 1);
  mergeEntry(e, "B", 1, 13);
  assert.equal(e.length, 2);
}

// Value 大小:top 2000 截断后最坏情况(handle 15 字符 + score 7 位)远小于 1.8MB 上限
{
  const worst = Array.from({ length: 2000 }, (_, i) => ({ h: "A".repeat(15), s: 9999999, t: Date.now() }));
  const size = JSON.stringify(worst).length;
  assert.ok(size < 1.8 * 1024 * 1024, `board too big: ${size}`);
  console.log("  2000 条最坏榜大小:", (size / 1024).toFixed(0), "KB < 1.8MB ✓");
}

// 中文昵称:提交走通(KV 缺失降级内存,token 不校验)
{
  const res = await api.default.fetch(
    new Request("http://x/api/leaderboard", { method: "POST", body: JSON.stringify({ handle: "孙悟空", score: 888, token: "" }) }),
  );
  const data = await res.json();
  assert.equal(data.ok, true);
  assert.equal(data.handle, "孙悟空");
  assert.equal(data.top[0].handle, "孙悟空");
  // 非法名号(超长/特殊字符)
  const bad = await api.default.fetch(
    new Request("http://x/api/leaderboard", { method: "POST", body: JSON.stringify({ handle: "a".repeat(13), score: 1, token: "" }) }),
  );
  assert.equal((await bad.json()).ok, false);
}

// presence:计数/活跃广播/bye/过期/slot 复用
{
  const a = presence({ id: "x", uid: "riderA", haul: 50, p: { x: 1, y: 1, z: 1, h: 0, mode: 0, s: 3 } });
  assert.equal(a.count, 1);
  assert.equal(a.riders.length, 1);
  const slotA = a.riders[0].slot;

  const b = presence({ id: "y", uid: "riderB", haul: 0, p: { x: 2, y: 1, z: 2, h: 1, mode: 2, s: 9 } });
  assert.equal(b.count, 2);
  assert.equal(b.riders.length, 2);
  const slotB = b.riders.find((r) => r.id === "riderB").slot;

  // bye 后人数回落,riderC 复用 riderB 释放的编号
  presence({ id: "z", uid: "riderB", bye: true });
  const c = presence({ id: "w", uid: "riderC", haul: 0, p: { x: 3, y: 1, z: 3, h: 0, mode: 0, s: 0 } });
  assert.equal(c.count, 2);
  assert.equal(c.riders.find((r) => r.id === "riderC").slot, slotB);
}

console.log("✓ 全部通过");
