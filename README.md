# Starry Nightrider — 本地完整复刻(中文版)

复刻自 https://starrynightrider.com/ :骑自行车穿行于梵高《星月夜》的小镇,收集光球送到尖塔,赚取分数并上榜。

原站是 Vite 打包的纯静态前端 + 两个服务端接口。本目录保存了原站全部前端资源,并用一个零依赖的 Node 服务器在本地重现了这两个接口,游戏功能与原站一致。

**整个界面已翻译为中文**(画廊、HUD、小地图图例、招式名、提示浮窗、排行榜、地标/咖啡馆/画廊/广场名等),由 `translate.mjs` 对 JS 包与 HTML 做精确替换生成;键盘按键名(Space/W/A/D 等)与作者署名 @ebbyamir 保留原文。`translate.mjs` 只需运行一次,重复运行会因找不到英文原文而报错。

## 部署到阿里云 ESA(边缘)

仓库根目录的 `esa.jsonc` 已配置好 ESA Pages 构建:

- 静态资源:`site/` 目录原样托管
- 边缘函数:`functions/api.js` 接管所有未命中静态文件的请求(即 `/api/*`),重现排行榜与在线接口

部署前置步骤(一次性):

1. ESA 控制台开通「函数和Pages」,从 GitHub 导入本仓库(默认会读取 `esa.jsonc`)
2. 控制台「边缘计算和AI > KV存储」创建名为 **`starrynightrider`** 的存储空间(排行榜持久化;名称不同的话改 `functions/api.js` 顶部的 `KV_NAMESPACE`)

与本地 `node server.mjs` 版的差异:

| | 本地版 | ESA 版 |
|---|---|---|
| 排行榜存储 | `data/leaderboard.json` 文件 | EdgeKV(全球边缘同步,最终一致;偶发提交失败重试即可) |
| token 校验 | HMAC 签名 | KV 存一次性 token,用后即焚 |
| 多人同屏 | 全局共享 | 边缘**实例内存**:同一边缘节点的玩家互见(位置心跳写 KV 会打爆写入配额,故不入 KV) |
| KV 不可用 | — | 自动降级为实例内存,游戏可玩但榜单不持久 |

接口契约与本地版完全一致,游戏代码(`site/`)两边通用。

## 致谢

原作 **Starry Nightrider** 由 [@ebbyamir](https://x.com/ebbyamir) 创作 → https://starrynightrider.com/
本仓库是个人学习用途的本地复刻,游戏本体、美术与创意均归原作者所有;请支持原作。

## 运行

```bash
node server.mjs          # 或 npm start
# 打开 http://localhost:8080
```

需要 Node.js(无任何第三方依赖)。端口可通过 `PORT=3000 node server.mjs` 修改。

## 玩法

- 画廊页点 **Step into the painting** 进入画中
- `W` 踩踏板 · `A`/`D` 转向 · `S` 刹车 · `Space` 跳跃(三连跳起飞)
- 空中 `W`/`S` 翻转 · `A`/`D` 旋转 · `E` 花式动作
- `F` 下车步行 · `T` 剧院模式 · `M` 声音 · `Esc` 回画廊
- 收集光球 → 骑进教堂尖塔交付 → 分数入账

## 目录结构

```
server.mjs              本地服务器:静态文件 + API 重实现(零依赖)
site/
  index.html            原站入口(中文化 + 交流入口)
  assets/               打包后的 JS / CSS / 分享图
  ghosts.mjs            真·同屏多人:星灵骑士渲染模块
  chat/                 交流浮层的微信 / QQ 群二维码
  *.webp, *.png         游戏贴图(绘画、天空、柏树、地面填充、流场)
  _vercel/insights/     原站 Vercel 分析脚本的本地空 stub
data/                   运行时生成:排行榜持久化 + token 签名密钥
```

## 本地实现的 API(与原站契约一致)

| 接口 | 说明 |
|------|------|
| `GET /api/leaderboard` | → `{ top: [{handle, score}], count }` |
| `POST /api/leaderboard` `{action:"start"}` | → `{ ok, token }`(HMAC 签名,10 分钟有效) |
| `POST /api/leaderboard` `{handle, score, token}` | → `{ ok, handle, rank, best, top, count }`,同一 handle 只保留最高分 |
| `POST /api/presence` `{id, haul}` | → `{ count, best }`,45 秒心跳过期 |
| `POST /api/presence` `{id, bye:true}` | 离开时注销(beacon) |

排行榜数据存于 `data/leaderboard.json`,删除该文件即可清空榜单。

## 与原站的差异

- 排行榜/在线人数只覆盖本机(数据存本地文件,不上传)
- 头像仍尝试从 unavatar.io 拉取,离线时自动退化为首字母方块,不影响游戏
- Vercel Analytics 以本地 stub 代替,不收集任何数据

## 真·同屏多人(本地新增,原站没有)

同一服务器的多个玩家(局域网设备访问 `http://主机IP:8080`)可以**互相看到对方骑车**:

- 每个客户端以 300ms 心跳广播自己的位置/朝向/状态(骑行、步行、飞行),服务器转发给其他人
- 其他骑手渲染为半透明加色发光的「星灵骑士」(贴合星空画风的低多边形造型),带轮子自转、踩踏、翅膀扑动动画
- 头顶悬浮标签:发过排行榜的显示 `@handle`,否则显示「骑手 N」
- 位置 300ms 插值平滑,数据过期渐隐、8 秒后移除;在画廊(未进画)时不显示

实现方式:`multiplayer-patch.mjs` 在游戏包上开三个小口子(加快心跳、附带位置、转发响应、暴露场景钩子),全部渲染逻辑在独立的 `site/ghosts.mjs`(约 300 行,零依赖)。**重装/更新游戏文件后需依次重跑 `translate.mjs` 和 `multiplayer-patch.mjs`**(两者都带防重复执行校验)。
