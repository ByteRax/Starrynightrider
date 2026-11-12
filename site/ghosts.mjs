// 真·同屏多人:把其他骑手渲染成半透明的「星灵骑士」。
// 依赖 index-B4H7D6Hj.js 末尾暴露的 window.__snrData(scene/camera/rider/state/G)
// 和 multiplayer-patch.mjs 打开的位置广播(window.__snrNet / window.__snrRiders)。
// mode: 0 骑行 · 1 步行 · 2 飞行 · 3 在画廊(不可见)

const A = 1; // THREE.AdditiveBlending
const DS = 2; // THREE.DoubleSide
const RENDER_DELAY = 300; // 插值缓冲:慢于一个心跳周期
const STALE_FADE_MS = 1400; // 超过这个时间没新数据开始变淡
const REMOVE_MS = 8000; // 彻底移除

// bundle 末尾有 top-level await(贴图加载),模块求值顺序上本文件可能先跑,等钩子就绪
const hooked = await new Promise((res) => {
  if (window.__snrData) return res(window.__snrData);
  addEventListener("snr-ready", () => res(window.__snrData), { once: true });
});
const { scene, camera, rider, state, G } = hooked;

const MY_ID = "g" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const myHandle = () => {
  try {
    return localStorage.getItem("nightrider-handle") || "";
  } catch {
    return "";
  }
};

// —— 心跳附带数据(与游戏自身的 presence 请求合并发出)——
window.__snrNet = () => {
  const inRide = state.state === "ride" || state.state === "dive" || state.state === "done";
  return {
    uid: MY_ID,
    handle: myHandle(),
    p: {
      x: +rider.wx.toFixed(2),
      y: +rider.y.toFixed(2),
      z: +rider.wz.toFixed(2),
      h: +Math.atan2(rider.fx, rider.fz).toFixed(3),
      mode: !inRide ? 3 : rider.walking ? 1 : rider.wings || rider.flying ? 2 : 0,
      s: +Math.abs(rider.speed || 0).toFixed(2),
    },
  };
};

// —— 星灵造型:低多边形盒子 + 加色发光(球/柱体已被打包裁掉,盒子正配剪纸风)——

const mat = (hex, opacity) =>
  new G.Basic({ color: hex, transparent: true, opacity, blending: A, depthWrite: false, side: DS });

const box = (m, w, h, d, x, y, z, parent) => {
  const mesh = new G.Mesh(new G.Box(w, h, d), m);
  mesh.position.set(x, y, z);
  (parent || null) && parent.add(mesh);
  return mesh;
};

function buildGhost() {
  const bodyM = mat(0x9fc4ff, 0.34);
  const limbM = mat(0xbcd8ff, 0.4);
  const headM = mat(0xffe9b8, 0.6);
  const bikeM = mat(0x8fb8ff, 0.42);
  const glowM = mat(0xffdf8a, 0.85);
  const wingM = mat(0xd6e7ff, 0.22);

  const root = new G.Group();

  // 自行车(车头朝本地 +Z)
  const bike = new G.Group();
  root.add(bike);
  const wheelGeo = new G.Box(0.06, 0.62, 0.62);
  const wheelB = new G.Mesh(wheelGeo, bikeM);
  wheelB.position.set(0, 0.34, -0.52);
  bike.add(wheelB);
  const wheelF = new G.Mesh(wheelGeo, bikeM);
  wheelF.position.set(0, 0.34, 0.52);
  bike.add(wheelF);
  box(bikeM, 0.07, 0.07, 0.95, 0, 0.52, 0, bike); // 下管
  const fork = box(bikeM, 0.07, 0.5, 0.07, 0, 0.72, 0.42, bike);
  fork.rotation.x = 0.35;
  const seatPost = box(bikeM, 0.06, 0.42, 0.06, 0, 0.78, -0.28, bike);
  seatPost.rotation.x = 0.25;
  box(bikeM, 0.34, 0.06, 0.1, 0, 0.96, -0.34, bike); // 车座
  box(bikeM, 0.4, 0.06, 0.08, 0, 0.94, 0.5, bike); // 车把
  box(glowM, 0.14, 0.14, 0.1, 0, 0.86, 0.58, bike); // 车灯

  // 骑手
  const riderG = new G.Group();
  root.add(riderG);
  box(bodyM, 0.46, 0.52, 0.3, 0, 1.18, -0.12, riderG); // 身体(蓝外套)
  const head = box(headM, 0.3, 0.3, 0.28, 0, 1.58, -0.1, riderG);
  box(headM, 0.44, 0.05, 0.4, 0, 1.72, -0.06, riderG); // 草帽檐
  box(headM, 0.3, 0.12, 0.34, 0, 1.76, -0.06, riderG); // 帽顶
  const legL = box(limbM, 0.14, 0.5, 0.14, -0.16, 0.78, -0.05, riderG);
  const legR = box(limbM, 0.14, 0.5, 0.14, 0.16, 0.78, -0.05, riderG);
  const armL = box(limbM, 0.11, 0.44, 0.11, -0.26, 1.3, 0.16, riderG);
  const armR = box(limbM, 0.11, 0.44, 0.11, 0.26, 1.3, 0.16, riderG);
  armL.rotation.x = -0.7;
  armR.rotation.x = -0.7;

  // 翅膀(飞行时展开)
  const wingL = new G.Mesh(new G.Plane(0.9, 0.4), wingM);
  wingL.position.set(-0.42, 1.32, -0.2);
  wingL.rotation.y = Math.PI / 2;
  root.add(wingL);
  const wingR = new G.Mesh(new G.Plane(0.9, 0.4), wingM);
  wingR.position.set(0.42, 1.32, -0.2);
  wingR.rotation.y = Math.PI / 2;
  root.add(wingR);

  const allMats = [bodyM, limbM, headM, bikeM, glowM, wingM];
  return {
    root,
    bike,
    head,
    legL,
    legR,
    wingL,
    wingR,
    wheelB,
    wheelF,
    mats: allMats,
    setOpacity(k) {
      for (const m of allMats) m.opacity = m.userData.o * k;
    },
  };
}

// 记住材质原始透明度,便于整体淡入淡出
const origOpacity = (g) => g.mats.forEach((m) => (m.userData.o = m.opacity));

const makeGhost = () => {
  const g = buildGhost();
  origOpacity(g);
  scene.add(g.root);
  g.root.visible = false;
  const tag = document.createElement("div");
  tag.className = "snr-tag";
  document.body.appendChild(tag);
  return { g, tag, samples: [], lastSeen: 0, fade: 0, wheelRot: 0, slot: 0, handle: "" };
};

const ghosts = new Map(); // uid -> ghost

// —— 服务器广播进来 ——
window.__snrRiders = (o) => {
  const now = performance.now();
  const seen = new Set();
  for (const r of o.riders || []) {
    if (r.id === MY_ID) continue;
    seen.add(r.id);
    let gh = ghosts.get(r.id);
    if (!gh) {
      gh = makeGhost();
      gh.slot = r.slot;
      ghosts.set(r.id, gh);
    }
    gh.lastSeen = now;
    gh.handle = r.handle || "";
    gh.samples.push({ t: now, x: r.x, y: r.y, z: r.z, h: r.h, s: r.s, mode: r.mode });
    if (gh.samples.length > 6) gh.samples.shift();
  }
  // 消失的骑手立即开始淡出
  for (const [id, gh] of ghosts) if (!seen.has(id)) gh.lastSeen = Math.min(gh.lastSeen, now - STALE_FADE_MS - 1);
};

// —— 插值 ——
const lerpAngle = (a, b, t) => {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
};

function sample(gh, tNow) {
  const s = gh.samples;
  if (!s.length) return null;
  if (s.length === 1 || tNow <= s[0].t) return s[0];
  if (tNow >= s[s.length - 1].t) return s[s.length - 1];
  for (let i = 0; i < s.length - 1; i++) {
    if (tNow >= s[i].t && tNow <= s[i + 1].t) {
      const k = (tNow - s[i].t) / (s[i + 1].t - s[i].t);
      return {
        t: tNow,
        x: s[i].x + (s[i + 1].x - s[i].x) * k,
        y: s[i].y + (s[i + 1].y - s[i].y) * k,
        z: s[i].z + (s[i + 1].z - s[i].z) * k,
        h: lerpAngle(s[i].h, s[i + 1].h, k),
        s: s[i].s + (s[i + 1].s - s[i].s) * k,
        mode: s[i + 1].mode,
      };
    }
  }
  return s[s.length - 1];
}

// —— 标签投影(手动做 P×V 变换,不依赖暴露的向量类)——
function projectToScreen(x, y, z) {
  const m = camera.matrixWorldInverse.elements;
  const p = camera.projectionMatrix.elements;
  const vx = m[0] * x + m[4] * y + m[8] * z + m[12];
  const vy = m[1] * x + m[5] * y + m[9] * z + m[13];
  const vz = m[2] * x + m[6] * y + m[10] * z + m[14];
  const cw = p[3] * vx + p[7] * vy + p[11] * vz + p[15];
  if (cw <= 0.001) return null;
  const cx = (p[0] * vx + p[4] * vy + p[8] * vz + p[12]) / cw;
  const cy = (p[1] * vx + p[5] * vy + p[9] * vz + p[13]) / cw;
  return { x: (cx * 0.5 + 0.5) * innerWidth, y: (-cy * 0.5 + 0.5) * innerHeight };
}

// —— 每帧驱动 ——
let last = performance.now();
function tick() {
  requestAnimationFrame(tick);
  try {
    tickInner();
  } catch (e) {
    window.__snrErr = (window.__snrErr || "") + String(e && e.stack || e) + "\n";
  }
}
function tickInner() {
  {
    const now = performance.now();
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  const showAll = state.state === "ride" || state.state === "dive" || state.state === "done";

  for (const [id, gh] of ghosts) {
    const age = now - gh.lastSeen;
    if (age > REMOVE_MS) {
      scene.remove(gh.g.root);
      gh.tag.remove();
      ghosts.delete(id);
      continue;
    }
    const s = sample(gh, now - RENDER_DELAY);
    if (!s || !showAll || s.mode === 3) {
      gh.g.root.visible = false;
      gh.tag.style.opacity = 0;
      continue;
    }

    // 淡入淡出
    const target = age > STALE_FADE_MS ? Math.max(0, 1 - (age - STALE_FADE_MS) / 2000) : Math.min(1, gh.fade + dt * 3);
    gh.fade = target;
    if (target <= 0.01) {
      gh.g.root.visible = false;
      gh.tag.style.opacity = 0;
      continue;
    }
    gh.g.setOpacity(target);
    gh.g.root.visible = true;

    // 位置与朝向
    const t = now / 1000;
    gh.g.root.position.set(s.x, s.y + (s.mode !== 1 ? Math.sin(t * 7 + gh.slot) * 0.02 : 0), s.z);
    gh.g.root.rotation.y = s.h;

    // 骑行动画
    const riding = s.mode === 0 || s.mode === 2;
    gh.g.bike.visible = riding;
    gh.g.wheelRot += s.s * dt / 0.31;
    gh.g.wheelB.rotation.x = gh.g.wheelRot;
    gh.g.wheelF.rotation.x = gh.g.wheelRot;
    const crank = gh.g.wheelRot * 0.55;
    gh.g.legL.rotation.x = riding ? Math.sin(crank) * 0.5 : Math.sin(t * 6 + gh.slot) * 0.4;
    gh.g.legR.rotation.x = riding ? Math.sin(crank + Math.PI) * 0.5 : -Math.sin(t * 6 + gh.slot) * 0.4;

    // 翅膀
    const flying = s.mode === 2;
    gh.g.wingL.visible = gh.g.wingR.visible = flying;
    if (flying) {
      const flap = Math.sin(t * 9 + gh.slot) * 0.55;
      gh.g.wingL.rotation.x = flap;
      gh.g.wingR.rotation.x = -flap;
      gh.g.root.position.y += Math.sin(t * 3 + gh.slot) * 0.15 + 0.4;
    }

    // 标签
    const pos = projectToScreen(s.x, s.y + (flying ? 2.5 : 2.1), s.z);
    if (pos) {
      gh.tag.style.opacity = 0.85 * target;
      gh.tag.style.transform = `translate(-50%,-100%) translate(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px)`;
      const name = gh.handle || "骑手 " + gh.slot;
      if (gh.tag.textContent !== name) gh.tag.textContent = name;
    } else {
      gh.tag.style.opacity = 0;
    }
  }
  }
}
requestAnimationFrame(tick);
// 浏览器面板在后台时 rAF 会整体暂停;setInterval 兜底保持逻辑心跳(前台时两者叠加无碍)
setInterval(tick, 300);
window.__snrDebug = () =>
  [...ghosts.entries()].map(([id, gh]) => ({
    id,
    slot: gh.slot,
    nSamples: gh.samples.length,
    lastSeenAgo: Math.round(performance.now() - gh.lastSeen),
    fade: +gh.fade.toFixed(2),
    visible: gh.g.root.visible,
    pos: gh.g.root.position.x.toFixed(1) + "," + gh.g.root.position.y.toFixed(1) + "," + gh.g.root.position.z.toFixed(1),
    tag: gh.tag.textContent + " / " + gh.tag.style.opacity,
  }));

// 样式
const style = document.createElement("style");
style.textContent = `.snr-tag{position:fixed;left:0;top:0;pointer-events:none;z-index:5;
  font:600 11px ui-rounded,"SF Pro Rounded",-apple-system,"PingFang SC",system-ui,sans-serif;
  color:#ffe9a8;text-shadow:0 1px 4px rgba(6,9,36,.9);letter-spacing:.4px;
  padding:2px 7px;border:1px solid rgba(255,233,168,.35);border-radius:99px;
  background:rgba(8,10,40,.45);opacity:0;transition:opacity .2s;white-space:nowrap}`;
document.head.appendChild(style);
