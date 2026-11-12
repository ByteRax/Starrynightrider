// 中国版补丁:去除 X(Twitter)相关逻辑,昵称改为中文名号(1–12 位汉字/字母/数字)。
// 对 site/assets/index-B4H7D6Hj.js 做精确替换,重复运行会因找不到原文而报错(防重复打补丁)。
// 用法: node china-patch.mjs
import fs from "node:fs";

const JS = "site/assets/index-B4H7D6Hj.js";

const pairs = [
  // 昵称校验:X 账号 → 中文名号(1–12 位汉字/字母/数字/下划线)
  [
    "if(!/^[A-Za-z0-9_]{1,15}$/.test(e))p(`X 账号需为 1–15 个字母、数字或下划线。`,!0)",
    "if(!/^[\\u4e00-\\u9fa5A-Za-z0-9_]{1,12}$/.test(e))p(`名号限 12 个以内汉字、字母或数字。`,!0)",
  ],
  // 榜行不再外链 x.com(去掉 href/target/rel,保留名号提示)
  [
    "i.href=`https://x.com/${encodeURIComponent(e.handle)}`,i.target=`_blank`,i.rel=`noopener noreferrer`,i.title=`X 上的 @${e.handle}`;",
    "i.title=`@${e.handle}`;",
  ],
  // 头像:不再请求 unavatar(X 头像代理),用一个必然加载失败的 data URI 走 onerror → 保留首字母方块
  [
    "i.push(`https://unavatar.io/x/${encodeURIComponent(e.handle)}?fallback=false`)",
    "i.push(`data:,broken`)",
  ],
];

let text = fs.readFileSync(JS, "utf8");
const problems = [];
for (const [find, replace] of pairs) {
  const actual = text.split(find).length - 1;
  if (actual !== 1) {
    problems.push(`  ${JSON.stringify(find.slice(0, 60))} 期望 1 次,实际 ${actual} 次`);
    continue;
  }
  text = text.split(find).join(replace);
}
if (problems.length) {
  console.error(`✗ 有 ${problems.length} 条未通过校验,未写入:`);
  console.error(problems.join("\n"));
  process.exit(1);
}
fs.writeFileSync(JS, text);
console.log("✓ 中国版补丁完成:昵称校验中文 + 去除 X 链接与头像外链");
