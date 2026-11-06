// 게임 화면 바꾸기 · 스크롤하면 나타나기 · 올해
(() => {
  document.querySelectorAll(".game__media").forEach((media) => {
    const main = media.querySelector(".game__main");
    const thumbs = media.querySelectorAll(".thumb");
    thumbs.forEach((b) => {
      b.addEventListener("click", () => {
        main.src = b.dataset.src;
        main.alt = (document.documentElement.lang === "en" && b.dataset.altEn) || b.dataset.alt;
        thumbs.forEach((t) => t.classList.toggle("is-on", t === b));
      });
    });
  });

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const nav = document.querySelector(".nav");
  const stick = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
  window.addEventListener("scroll", stick, { passive: true });
  stick();
})();

// 첫 화면 방 조명 — 고른 색이 사진 속 불빛과 페이지 강조색이 됨
(() => {
  const hero = document.querySelector(".hero");
  const btns = document.querySelectorAll(".chroma__b");
  const root = document.documentElement;

  function set(v, save) {
    const solid = v !== "wave" && v !== "off";
    hero.dataset.chroma = solid ? "solid" : v;
    if (solid) root.style.setProperty("--accent", v);
    else root.style.removeProperty("--accent");
    btns.forEach((b) => {
      const on = b.dataset.c === v;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", String(on));
    });
    if (save) try { localStorage.setItem("chroma", v); } catch (e) { /* 저장소를 못 쓰는 창 */ }
  }

  btns.forEach((b) => b.addEventListener("click", () => set(b.dataset.c, true)));
  try {
    const s = localStorage.getItem("chroma");
    if (s && Array.from(btns).some((b) => b.dataset.c === s)) set(s, false);
  } catch (e) { /* 무시 */ }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((list) => hero.classList.toggle("is-away", !list[0].isIntersecting)).observe(hero);
  }
})();

// 방 사진 크게 보기 — 화살표·밀기로 넘기고 Esc나 바깥을 눌러 닫음
(() => {
  const dlg = document.getElementById("lb");
  const items = Array.from(document.querySelectorAll("[data-full]"));
  if (!dlg || !dlg.showModal || !items.length) return;
  const img = dlg.querySelector(".lb__img");
  const title = dlg.querySelector(".lb__title");
  const desc = dlg.querySelector(".lb__desc");
  const count = dlg.querySelector(".lb__count");
  let at = 0;

  function info(b) {
    const cap = b.querySelector(".tile__cap");
    const pic = b.querySelector("img");
    return { title: cap ? cap.textContent : b.dataset.cap, desc: pic ? pic.alt : b.dataset.alt };
  }

  function show(i) {
    at = (i + items.length) % items.length;
    const b = items[at];
    const t = info(b);
    img.src = b.dataset.full;
    img.alt = t.desc;
    title.textContent = t.title;
    desc.textContent = t.desc;
    count.textContent = `${at + 1} / ${items.length}`;
    [at - 1, at + 1].forEach((n) => { new Image().src = items[(n + items.length) % items.length].dataset.full; });
  }

  items.forEach((b, i) => b.addEventListener("click", () => { show(i); dlg.showModal(); }));
  dlg.querySelector(".lb__btn--close").addEventListener("click", () => dlg.close());
  dlg.querySelector(".lb__btn--prev").addEventListener("click", () => show(at - 1));
  dlg.querySelector(".lb__btn--next").addEventListener("click", () => show(at + 1));
  dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.classList.contains("lb__stage")) dlg.close(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(at - 1);
    if (e.key === "ArrowRight") show(at + 1);
  });

  let downX = null;
  dlg.addEventListener("pointerdown", (e) => { downX = e.clientX; });
  dlg.addEventListener("pointerup", (e) => {
    if (downX === null) return;
    const dx = e.clientX - downX;
    downX = null;
    if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1));
  });
})();

// 맨 아래 키보드 백라이트 — 무지개 물결이 흐르고, 가끔 누른 자리에서 빛이 퍼짐
(() => {
  const cv = document.getElementById("keys");
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // [글자, 폭(칸)]
  const ROWS = [
    [["Esc", 1], ["1", 1], ["2", 1], ["3", 1], ["4", 1], ["5", 1], ["6", 1], ["7", 1], ["8", 1], ["9", 1], ["0", 1], ["-", 1], ["=", 1], ["Back", 2]],
    [["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[", 1], ["]", 1], ["\\", 1.5]],
    [["Caps", 1.75], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], [";", 1], ["'", 1], ["Enter", 2.25]],
    [["Shift", 2.25], ["Z", 1], ["X", 1], ["C", 1], ["V", 1], ["B", 1], ["N", 1], ["M", 1], [",", 1], [".", 1], ["/", 1], ["Shift", 2.75]],
    [["Ctrl", 1.25], ["Win", 1.25], ["Alt", 1.25], ["", 6.25], ["Alt", 1.25], ["Fn", 1.25], ["Menu", 1.25], ["Ctrl", 1.25]],
  ];
  const PAD = 0.3; // 판 가장자리(칸)
  const keys = [];
  ROWS.forEach((row, r) => {
    let x = PAD;
    row.forEach(([label, w]) => {
      keys.push({ label, x, y: PAD + r, w, cx: x + w / 2, cy: PAD + r + 0.5 });
      x += w;
    });
  });
  const UW = 15 + PAD * 2, UH = 5 + PAD * 2;

  // 번지는 빛은 작은 판에 그려 크게 늘려 붙임(흐림 효과를 싸게)
  const glow = document.createElement("canvas");
  const gctx = glow.getContext("2d");
  let W = 0, H = 0, u = 1, dpr = 1;
  const ripples = [];
  let nextRipple = 0;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(cv.clientWidth * dpr));
    H = Math.max(1, Math.round(cv.clientHeight * dpr));
    cv.width = W; cv.height = H;
    u = W / UW;
    glow.width = Math.max(1, Math.round(W / 8));
    glow.height = Math.max(1, Math.round(H / 8));
  }

  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function draw(t) {
    const s = t / 1000;
    if (!still && s > nextRipple) {
      const k = keys[(Math.random() * keys.length) | 0];
      ripples.push({ x: k.cx, y: k.cy, t: s });
      nextRipple = s + 0.7 + Math.random() * 1.1;
    }
    while (ripples.length && s - ripples[0].t > 1.8) ripples.shift();

    // 키마다 색과 밝기
    for (const k of keys) {
      k.h = (150 + k.cx * 16 - k.cy * 6 - s * 40) % 360;
      let lit = 0.55 + 0.12 * Math.sin(s * 1.3 + k.cx * 0.5);
      let flash = 0;
      for (const r of ripples) {
        const age = s - r.t;
        const d = Math.hypot(k.cx - r.x, (k.cy - r.y) * 1.15);
        const ring = age * 8;
        const v = Math.max(0, 1 - Math.abs(d - ring) / 1.2) * Math.max(0, 1 - age / 1.8);
        if (d < 0.6) flash = Math.max(flash, Math.max(0, 1 - age * 2.2));
        lit += v * 0.9;
      }
      k.lit = Math.min(1.8, lit + flash);
      k.flash = flash;
    }

    // 1) 번지는 빛
    const gs = glow.width / UW;
    gctx.clearRect(0, 0, glow.width, glow.height);
    for (const k of keys) {
      gctx.fillStyle = `hsla(${k.h},100%,${55 + k.flash * 30}%,${0.32 * k.lit})`;
      gctx.fillRect((k.x - 0.15) * gs, (k.y - 0.15) * gs, (k.w + 0.3) * gs, 1.3 * gs);
    }
    ctx.clearRect(0, 0, W, H);
    // 판
    rr(ctx, 0, 0, W, H, u * 0.35);
    ctx.fillStyle = "rgba(10,12,18,.9)";
    ctx.fill();
    ctx.globalCompositeOperation = "lighter";
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(glow, -u * 0.3, -u * 0.3, W + u * 0.6, H + u * 0.6);
    ctx.globalCompositeOperation = "source-over";

    // 2) 키캡
    const gap = u * 0.09;
    for (const k of keys) {
      const x = k.x * u + gap, yy = k.y * u + gap, w = k.w * u - gap * 2, h = u - gap * 2;
      rr(ctx, x, yy, w, h, u * 0.12);
      ctx.fillStyle = "#0b0d14";
      ctx.fill();
      ctx.lineWidth = Math.max(1, dpr);
      ctx.strokeStyle = `hsla(${k.h},100%,62%,${Math.min(1, 0.22 + 0.4 * k.lit)})`;
      ctx.stroke();
      // 윗면
      rr(ctx, x + u * 0.08, yy + u * 0.06, w - u * 0.16, h - u * 0.2, u * 0.08);
      ctx.fillStyle = "rgba(255,255,255,.025)";
      ctx.fill();
      // 글자
      if (k.label) {
        const big = k.label.length === 1;
        ctx.font = `700 ${Math.round(u * (big ? 0.3 : 0.2))}px "JetBrains Mono", Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `hsla(${k.h},100%,${68 + k.flash * 25}%,${Math.min(1, 0.45 + 0.45 * k.lit)})`;
        ctx.fillText(k.label, x + w / 2, yy + h * 0.46);
      }
    }
  }

  let raf = 0, visible = true;
  function loop(t) { draw(t); raf = requestAnimationFrame(loop); }
  function start() { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop); }
  function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; }

  size();
  if (still) { draw(4000); }
  else {
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((list) => { visible = list[0].isIntersecting; visible ? start() : stop(); }).observe(cv);
    }
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    start();
  }
  if ("ResizeObserver" in window) {
    new ResizeObserver(() => { size(); if (still) draw(4000); }).observe(cv);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (still) draw(4000); });
})();
