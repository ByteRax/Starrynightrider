// 把 Starry Nightrider 的界面文案替换为中文。
// 对 JS bundle 与 index.html 做精确字面量替换,每条都校验出现次数,任何一条不匹配即中止且不写盘。
// 用法: node translate.mjs
import fs from "node:fs";

const JS = "site/assets/index-B4H7D6Hj.js";
const HTML = "site/index.html";
const CSS = "site/assets/index-vNlVvQ9O.css";

// [查找, 替换, 期望次数(默认 1)]
const jsPairs = [
  // 招式
  ["cm=[``,`Superman`,`No-hander`,`Tailwhip`]", "cm=[``,`超人`,`空中脱把`,`甩尾`]"],
  ["lm=[``,``,`Double `,`Triple `,`Quad `]", "lm=[``,``,`双重`,`三重`,`四重`]"],
  ["`Backflip`", "`后空翻`", 2],
  ["`Front flip`", "`前空翻`", 2],
  ["`Big air`", "`高空滞空`"],
  // 地图图例标签
  ["steeple:{label:`steeple`", "steeple:{label:`尖塔`"],
  ["cafe:{label:`night café`", "cafe:{label:`夜间咖啡馆`"],
  ["gallery:{label:`gallery`", "gallery:{label:`画廊`"],
  ["square:{label:`market square`", "square:{label:`市集广场`"],
  ["view:{label:`viewpoint`", "view:{label:`观景台`"],
  // 固定地标
  ["`The Steeple`", "`教堂尖塔`"],
  ["`Le Café de Nuit`", "`夜间咖啡馆`"],
  ["`The Painter’s Knoll`", "`画家的小丘`"],
  ["e===`cafe`?`The Night Café`:e===`church`?`The nave`:`The Gallery`", "e===`cafe`?`夜间咖啡馆`:e===`church`?`教堂中殿`:`画廊`"],
  // __:目的地方言(非主尖塔时用「XX教堂的尖塔」)
  ["e.type===`steeple`&&!e.home?`the steeple of ${e.name}`:e.name", "e.type===`steeple`&&!e.home?`${e.name}教堂的尖塔`:e.name"],
  // 送达提示
  [
    "let r=e.home?`the steeple of the Starry Night`:`the steeple of ${e.name}`;Jg(n>0?`${n.toLocaleString()} delivered to ${r}${t?`  +${t}`:``}`:`${r[0].toUpperCase()}${r.slice(1)}${t?`  +${t}`:``}`,5600)",
    "let r=e.home?`星夜教堂的尖塔`:`${e.name}教堂的尖塔`;Jg(n>0?`${r} 收下了 ${n.toLocaleString()} 枚光球${t?`  +${t}`:``}`:`抵达${r}${t?`  +${t}`:``}`,5600)",
  ],
  // 提示浮窗
  ["`Wings!  Hold SPACE to fly`", "`翅膀展开!按住 SPACE 飞行`"],
  ["`Controller — A leap (×3 fly) · RT pedal · LT brake · X tricks · B walk · Y theater`", "`手柄 — A 跳跃(×3 飞行)· RT 踩踏 · LT 刹车 · X 花式 · B 步行 · Y 剧院`"],
  ["`On foot — the same button to ride again`", "`步行中 — 点同一按钮回到车上`"],
  ["`On foot — E runs · leap at a wall and hold W to climb it · F to ride again`", "`步行中 — E 奔跑 · 朝墙起跳按住 W 可攀爬 · F 回到车上`"],
  ["`Theater mode — T to bring the game back`", "`剧院模式 — 按 T 返回游戏`"],
  ["`Theater mode — tap the moon to bring the game back`", "`剧院模式 — 点月亮按钮返回游戏`"],
  ["`To ${__(e)} — follow the orbs`", "`前往${__(e)} — 跟着光球走`"],
  ["`A stray star from the rooftops  +50`", "`屋顶上捡到一颗迷路的小星  +50`"],
  ["`${n.prismAll.name} — all three prisms  +400`", "`${n.prismAll.name} — 三枚棱镜全部收集  +400`"],
  ["`A prism  +${150*$.mult}`", "`一枚棱镜  +${150*$.mult}`"],
  ["`${e.name} — found  +150`", "`${e.name} — 发现新地点  +150`"],
  ["`${e(n.course.entered)} — interior course unlocked`", "`${e(n.course.entered)} — 内部赛道已解锁`"],
  ["`${e(n.course.cleared)} cleared  +300`", "`已清完${e(n.course.cleared)}  +300`"],
  ["`Next: ${__(e)} — carry your orbs there`", "`下一站:${__(e)} — 把光球带过去`"],
  ["`Tonight the rooftops are streets too — leap off them:  W/S flip · A/D spin · E style`", "`今夜屋顶也是街道 — 从屋檐起跳:W/S 翻转 · A/D 旋转 · E 花式`"],
  // 高亮列表 / 小地图 / 导航
  ["a?`destination`:Sm[i.type].label", "a?`目的地`:Sm[i.type].label"],
  ["u=a&&r.arrivedFor>=0?`here`:l<995?`${Math.round(l/5)*5} m`:`${(l/1e3).toFixed(1)} km`", "u=a&&r.arrivedFor>=0?`已到达`:l<995?`${Math.round(l/5)*5} 米`:`${(l/1e3).toFixed(1)} 公里`"],
  ["`${Math.round(Cg.info.dist)} m`", "`${Math.round(Cg.info.dist)} 米`"],
  // 在线人数 / 最高分
  ["`rider in the painting`:`riders in the painting`", "`位骑手在画中`:`位骑手在画中`"],
  ["`top score ${e.toLocaleString()}`", "`最高分 ${e.toLocaleString()}`"],
  // 排行榜
  ["`An X handle is 1–15 letters, digits or underscores.`", "`X 账号需为 1–15 个字母、数字或下划线。`"],
  ["`Posting…`", "`发布中…`"],
  ["n.message||`The score could not be posted. Try again in a moment.`", "n.message||`分数发布失败,请稍后再试。`"],
  ["`Posted. Your best stays ${n.best.toLocaleString()} — number ${n.rank} on the board.`", "`已发布。你的最好成绩仍是 ${n.best.toLocaleString()} — 位居榜单第 ${n.rank} 名。`"],
  ["`Posted — you are number ${n.rank} on the board.`", "`已发布 — 你排在榜单第 ${n.rank} 名。`"],
  ["`The leaderboard could not be reached. Check your connection and try again.`", "`无法连接排行榜,请检查网络后重试。`"],
  ["`Ride complete`", "`骑行结束`"],
  ["`Continue riding`", "`继续骑行`"],
  ["`Leaderboard`", "`排行榜`"],
  ["`Close`", "`关闭`"],
  ["`@${e.handle} on X`", "`X 上的 @${e.handle}`"],
  ["`${t.toLocaleString()} riders on the board`", "`${t.toLocaleString()} 位骑手在榜上`"],
  // 致命错误
  ["`This painting needs WebGL 2 — your browser could not start it.`", "`这幅画需要 WebGL 2 — 你的浏览器无法启动它。`"],
  ["`The canvas could not be loaded. Check your connection and reload.`", "`画作资源加载失败,请检查网络后刷新。`"],
  // 小地图画布字体补中文回退
  ['ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, sans-serif', 'ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, "PingFang SC", "Microsoft YaHei", sans-serif', 2],
];

// 名称表(逐条替换,各自唯一)
const names = [
  // 广场
  ["`Place du Forum`", "`论坛广场`"],
  ["`Place Lamartine`", "`拉马丁广场`"],
  ["`Place de la République`", "`共和国广场`"],
  ["`Place des Lices`", "`竞技场广场`"],
  ["`Place du Marché`", "`集市广场`"],
  ["`Place aux Herbes`", "`香草广场`"],
  ["`Place de la Fontaine`", "`喷泉广场`"],
  ["`Place Voltaire`", "`伏尔泰广场`"],
  ["`Place des Platanes`", "`梧桐广场`"],
  ["`Place du Midi`", "`正午广场`"],
  ["`Place des Étoiles`", "`星辰广场`"],
  ["`Place du Puits`", "`水井广场`"],
  // 咖啡馆
  ["`Café de la Gare`", "`车站咖啡馆`"],
  ["`Café de l’Alcazar`", "`阿尔卡萨咖啡馆`"],
  ["`Café du Forum`", "`广场咖啡馆`"],
  ["`Café des Étoiles`", "`星辰咖啡馆`"],
  ["`Café de Minuit`", "`午夜咖啡馆`"],
  ["`Café du Midi`", "`正午咖啡馆`"],
  ["`Café Lamartine`", "`拉马丁咖啡馆`"],
  ["`Café des Amis`", "`朋友咖啡馆`"],
  ["`Café de la Lune`", "`月亮咖啡馆`"],
  ["`Café du Rhône`", "`罗讷咖啡馆`"],
  ["`Café des Lanternes`", "`灯笼咖啡馆`"],
  ["`Café du Billard`", "`台球咖啡馆`"],
  // 画廊
  ["`Galerie des Iris`", "`鸢尾画廊`"],
  ["`Galerie des Tournesols`", "`向日葵画廊`"],
  ["`Galerie des Amandiers`", "`杏花画廊`"],
  ["`Galerie des Oliviers`", "`橄榄画廊`"],
  ["`Galerie des Cyprès`", "`柏树画廊`"],
  ["`Galerie du Semeur`", "`播种者画廊`"],
  ["`Galerie des Blés`", "`麦田画廊`"],
  ["`Galerie des Vergers`", "`果园画廊`"],
  ["`Galerie de l’Arlésienne`", "`阿尔勒女子画廊`"],
  ["`Galerie du Zouave`", "`朱阿夫画廊`"],
  ["`Galerie des Moissons`", "`收获画廊`"],
  ["`Galerie du Pont`", "`小桥画廊`"],
  // 教堂守护圣徒
  ["`Saint-Martin`", "`圣马丁`"],
  ["`Saint-Paul`", "`圣保罗`"],
  ["`Sainte-Anne`", "`圣安妮`"],
  ["`Saint-Rémy`", "`圣雷米`"],
  ["`Notre-Dame`", "`圣母`"],
  ["`Saint-Trophime`", "`圣特罗菲姆`"],
  ["`Sainte-Marthe`", "`圣玛尔大`"],
  ["`Saint-Julien`", "`圣于连`"],
  ["`Saint-Césaire`", "`圣塞泽尔`"],
  ["`Sainte-Claire`", "`圣克莱尔`"],
  ["`Saint-Roch`", "`圣罗克`"],
  ["`Saint-Honorat`", "`圣奥诺拉`"],
  ["`Saint-Vincent`", "`圣文森`"],
  ["`Sainte-Lucie`", "`圣露西`"],
];

const htmlPairs = [
  ['<html lang="en">', '<html lang="zh-CN">'],
  ["<title>Starry Nightrider</title>", "<title>星夜骑士</title>"],
  ["Ride a bicycle through Van Gogh’s The Starry Night: collect the orbs, carry them to the steeple, and post your score.", "骑自行车穿行梵高的《星月夜》:收集光球,送进尖塔,晒出你的分数。", 3],
  ['<meta property="og:site_name" content="Starry Nightrider" />', '<meta property="og:site_name" content="星夜骑士" />'],
  ['<meta property="og:title" content="Starry Nightrider" />', '<meta property="og:title" content="星夜骑士" />'],
  ['<meta name="twitter:title" content="Starry Nightrider" />', '<meta name="twitter:title" content="星夜骑士" />'],
  ['content="The swirling sky, cypress and village of The Starry Night, brought to life as a town you can ride through."', 'content="漩涡状的星空、柏树与村庄——《星月夜》化作一座可以骑行穿行的小镇。"'],
  ["<h1>Starry Nightrider</h1>", "<h1>星夜骑士</h1>"],
  ['<p class="sub">after Vincent van Gogh &middot; <em>The Starry Night</em>, 1889</p>', '<p class="sub">据 文森特·梵高 &middot; <em>《星月夜》</em>,1889</p>'],
  [">Step into the painting<", ">走进画中<"],
  ['<button id="open-board" type="button">Leaderboard</button>', '<button id="open-board" type="button">排行榜</button>'],
  ['<span id="riders-label">rider in the painting</span>', '<span id="riders-label">位骑手在画中</span>'],
  ["Collect as many orbs as you can<br />and carry them into the steeple.", "尽可能多地收集光球,<br />再把它们送进尖塔。"],
  ["<kbd>Space</kbd> leap &nbsp;·&nbsp; in the air <kbd>W</kbd><kbd>S</kbd> flip &nbsp;<kbd>A</kbd><kbd>D</kbd> spin &nbsp;<kbd>E</kbd> style", "<kbd>Space</kbd> 跳跃 &nbsp;·&nbsp; 空中 <kbd>W</kbd><kbd>S</kbd> 翻转 &nbsp;<kbd>A</kbd><kbd>D</kbd> 旋转 &nbsp;<kbd>E</kbd> 花式"],
  ["<p><strong id=\"finish-score\">0</strong> delivered. Finished for the night?</p>", "<p>已送达 <strong id=\"finish-score\">0</strong> 枚。今晚就到这里?</p>"],
  ['<button id="finish-yes" type="button">Finish Game</button>', '<button id="finish-yes" type="button">结束游戏</button>'],
  ['<button id="finish-no" type="button">Continue riding</button>', '<button id="finish-no" type="button">继续骑行</button>'],
  ["<kbd>Enter</kbd> to finish", "按 <kbd>Enter</kbd> 结束"],
  ['<span id="guide-label">The Steeple</span>', '<span id="guide-label">教堂尖塔</span>'],
  ["<span><kbd>A</kbd><kbd>D</kbd> steer</span>", "<span><kbd>A</kbd><kbd>D</kbd> 转向</span>"],
  ["<span><kbd>W</kbd> pedal</span>", "<span><kbd>W</kbd> 踩踏板</span>"],
  ["<span><kbd>S</kbd> brake</span>", "<span><kbd>S</kbd> 刹车</span>"],
  ["<span><kbd>Space</kbd> leap</span>", "<span><kbd>Space</kbd> 跳跃</span>"],
  ["<span><kbd>Space ×3</kbd> fly</span>", "<span><kbd>Space ×3</kbd> 飞行</span>"],
  ["<span><kbd>E</kbd> tricks in the air</span>", "<span><kbd>E</kbd> 空中花式</span>"],
  ["<span><kbd>F</kbd> walk</span>", "<span><kbd>F</kbd> 步行</span>"],
  ["<span><kbd>T</kbd> theater</span>", "<span><kbd>T</kbd> 剧院</span>"],
  ['<button id="pad-jump" type="button">Leap</button>', '<button id="pad-jump" type="button">跳</button>'],
  ['title="Theater mode: hide the game and just ride (T)"', 'title="剧院模式:隐藏游戏,单纯骑行(T)"'],
  ['title="Get off and walk, or back on the bicycle (F)"', 'title="下车步行,或回到自行车上(F)"'],
  ['title="Sound (M)"', 'title="声音(M)"'],
  ['title="Back to the gallery (Esc)"', 'title="回到画廊(Esc)"'],
  ["<h2 id=\"board-title\">Leaderboard</h2>", "<h2 id=\"board-title\">排行榜</h2>"],
  ['<p class="score">Your score <strong id="board-score">0</strong></p>', '<p class="score">你的分数 <strong id="board-score">0</strong></p>'],
  ['placeholder="your X handle"', 'placeholder="你的 X 账号"'],
  ['<button id="board-post" type="submit">Post score</button>', '<button id="board-post" type="submit">发布分数</button>'],
  ['<div id="bank"><span id="bank-count">0</span> delivered</div>', '<div id="bank"><span id="bank-count">0</span> 枚已送达</div>'],
  ['<button id="board-again" type="button">Ride again</button>', '<button id="board-again" type="button">再骑一次</button>'],
  ['<button id="board-back" type="button">Close</button>', '<button id="board-back" type="button">关闭</button>'],
  ["Nobody has posted a score yet. Be the first.", "还没有人上榜,来做第一个吧。"],
  ["mixing the paint…", "正在调颜料…"],
];

const cssPairs = [
  ['--serif:"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif', '--serif:"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, "Songti SC", "Noto Serif SC", "SimSun", serif'],
  ['--sans:ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, sans-serif', '--sans:ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'],
];

function apply(file, pairs) {
  let text = fs.readFileSync(file, "utf8");
  const problems = [];
  for (const [find, replace, count = 1] of pairs) {
    const actual = text.split(find).length - 1;
    if (actual !== count) {
      problems.push(`  ${JSON.stringify(find.slice(0, 60))} 期望 ${count} 次,实际 ${actual} 次`);
      continue;
    }
    text = text.split(find).join(replace);
  }
  if (problems.length) {
    console.error(`✗ ${file} 有 ${problems.length} 条未通过校验,未写入:`);
    console.error(problems.join("\n"));
    process.exit(1);
  }
  fs.writeFileSync(file, text);
  console.log(`✓ ${file}:替换 ${pairs.length} 条`);
}

apply(JS, [...jsPairs, ...names]);
apply(HTML, htmlPairs);
apply(CSS, cssPairs);
console.log("全部完成");
