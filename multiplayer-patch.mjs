// 真·同屏多人补丁:在压缩包上开三个小口子,主体逻辑在 site/ghosts.mjs。
// 1) presence 心跳 15s → 300ms
// 2) presence 请求体附带玩家位置(由 window.__snrNet() 提供)
// 3) presence 响应转发给 window.__snrRiders()
// 4) 文件末尾暴露 场景/相机/玩家状态/几何类 钩子
// 每条替换校验出现次数,重复运行会因找不到原文而报错(防重复打补丁)。
import fs from "node:fs";

const JS = "site/assets/index-B4H7D6Hj.js";

const pairs = [
  // 心跳间隔 15s → 300ms
  ["var vh=15e3;", "var vh=300;"],
  // 请求体带位置与身份(ghosts.mjs 提供 uid/handle/p)
  [
    "body:JSON.stringify({id:n,haul:r}),cache:`no-store`});if(!a.ok)return;",
    "body:JSON.stringify({id:n,haul:r,...(window.__snrNet?window.__snrNet():{})}),cache:`no-store`});if(!a.ok)return;",
  ],
  // 响应转发给星灵模块(单请求双消费)
  [
    "if(typeof o.count!=`number`)return;",
    "if(typeof o.count!=`number`)return;window.__snrRiders&&window.__snrRiders(o);",
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
if (text.includes("__snrData")) {
  console.error("✗ 看起来已经打过补丁(__snrData 已存在),未写入");
  process.exit(1);
}
// 末尾暴露钩子:rider 状态(Z)、场景、渲染相机、以及存活下来的 three 类
// (Mesh=Vr Group=mn MeshBasicMaterial=kr BoxGeometry=ti PlaneGeometry=ni)
text += `\n;window.__snrData={scene:rg,camera:ig,rider:Z,state:Q,G:{Mesh:Vr,Group:mn,Basic:kr,Box:ti,Plane:ni}};window.dispatchEvent(new Event(\`snr-ready\`));\n`;
fs.writeFileSync(JS, text);
console.log("✓ 补丁完成:心跳 300ms + 位置广播 + __snrData 钩子");
