// 한국어(페이지에 적힌 글) ↔ 영어 전환. 영어는 아래 표에서 data-i18n 열쇠로 찾는다.
(() => {
  const EN = {
    "brand": "Hyungchul",
    "nav.games": "Games",
    "nav.apps": "Apps",
    "nav.col": "Collection",
    "nav.about": "About",
    "nav.links": "Links",

    "hero.title": "If I need it,<br><span class=\"grad\">I build it.</span>",
    "hero.lead": "I made and shipped the martial-arts action game <strong>Murim Duel</strong>, the Roblox mech action game <strong class=\"t-orbit\">ORBIT FRONT</strong> and the English vocabulary game <strong class=\"t-wq\">Word Quest</strong> on my own. When my devices are missing a feature, I write the app myself — and I own the largest Razer collection in Korea.",
    "hero.cta1": "See the collection",
    "hero.cta2": "Apps I built",
    "hero.cta3": "Games I made",
    "hero.view": "View this photo",
    "chroma.label": "Change the room lighting",
    "chroma.wave": "Spectrum",
    "chroma.green": "Green",
    "chroma.red": "Red",
    "chroma.blue": "Blue",
    "chroma.violet": "Violet",
    "chroma.off": "Photo as taken",
    "stat.games": "Games shipped",
    "stat.apps": "Open-source apps",
    "stat.col": "Razer collection in Korea",
    "hero.now": "Building a martial-arts MMORPG and Synapse 2 Revive",

    "games.title": "Games",
    "games.sub": "Design, code, art, video and server operations — all done solo.",
    "murim.alt": "Murim Duel ultimate move",
    "murim.badge": "Released",
    "murim.name": "Murim Duel",
    "murim.desc": "A 3D martial-arts fighting game where every sect has its own techniques, specials and ultimates. Online 1v1 and party battles, a story for every hero, and a different spirit-beast raid each day of the week.",
    "murim.t1": "Godot Engine",
    "murim.t2": "Online PvP",
    "murim.t3": "Own server in Seoul",
    "murim.btn": "Get it on Google Play",
    "orbit.alt": "ORBIT FRONT in-game battle",
    "orbit.badge": "Live on Roblox",
    "orbit.desc": "High-speed 3D mech action on Roblox. Choose from 23 mechs, each with its own weapons and finisher, fight 3v3 team battles, and team up for giant boss raids and endless defense.",
    "orbit.t1": "23 mechs",
    "orbit.t2": "3v3 team battle",
    "orbit.t3": "Raids · endless defense",
    "orbit.t4": "Phone · gamepad",
    "orbit.btn": "Play on Roblox",
    "mmo.alt": "Martial-arts MMORPG town in development",
    "mmo.badge": "In development",
    "mmo.name": "Martial-arts MMORPG",
    "mmo.tag": "working title",
    "mmo.desc": "A Lineage-style martial-arts MMORPG set in the Murim Duel universe. Built around hunting-ground rivalry, trading, guilds and castle sieges — starting with the first town, Ganghoseong.",
    "mmo.t1": "Quarter view",
    "mmo.t2": "Murim Duel universe",
    "wq.alt1": "Word Quest battle and study screen",
    "wq.alt2": "Word Quest word meaning quiz",
    "wq.alt3": "Word Quest hero class select",
    "wq.badge": "Live on the web",
    "wq.name": "Word Quest",
    "wq.desc": "A vocabulary game where your hero grows stronger the more English words you learn. Study 5,300 Oxford words (A1–C1) through lessons and reviews to push the expedition forward — and the words you miss come back as monsters.",
    "wq.t1": "5,300 Oxford words",
    "wq.t2": "4 classes · male / female",
    "wq.t3": "Rankings · shared word lists",
    "wq.t4": "No install, plays on the web",
    "wq.btn": "Play now",
    "m2d.name": "Moorim Battle: Legend of the Sword",
    "m2d.desc": "The 2D fighting edition of Murim Duel. Ten sects plus the Heavenly Demon and his guardians, with story, arcade, versus, online and training modes — all playable right in your browser.",
    "m2d.btn": "Play on itch.io",

    "apps.title": "Apps &amp; Tools",
    "apps.sub": "Tools I built to get more out of my own devices. All source code is on GitHub.",
    "apps.note": "All of these are unofficial personal projects and are not affiliated with Razer.",
    "app.github": "View on GitHub",
    "edge.alt": "EdgeTuner game library screen",
    "edge.badge": "Android app",
    "edge.src1": "img/edge_library_en.webp",
    "edge.src2": "img/edge_tools_en.webp",
    "edge.desc": "A game tuner for the Razer Edge gaming tablet. Set up each game once — it applies your settings when the game starts and restores everything when you quit. Available in English and Korean.",
    "edge.f1": "Per-game refresh rate, aspect ratio and resolution",
    "edge.f2": "Quiet fan mode, heat guard and battery drain analysis",
    "edge.f3": "In-game FPS, temperature and ping overlay, controller check",
    "chg.alt1": "Charger lighting color editor",
    "chg.alt2": "Charger lighting effect picker",
    "chg.badge": "Windows app",
    "chg.name": "Wireless Charger Chroma",
    "chg.desc": "Controls the lighting of the Razer Chroma wireless charger from a Windows PC. It mirrors the phone-only setup app and talks to the charger directly over USB or Bluetooth.",
    "chg.f1": "Color wheel, brightness and 4 effects (static, breathing, spectrum, wave)",
    "chg.f2": "Idle effect, status light and lighting timers",
    "chg.f3": "USB (HID) and Bluetooth LE protocols documented and implemented",
    "rev.alt": "Synapse 2 Revive per-key keyboard lighting screen",
    "rev.badge": "Windows app · 0.4.0 alpha",
    "rev.desc": "Brings older Razer devices that only worked with Synapse 2 back to life with a modern, Synapse-style interface. It covers every Synapse 2 device and recognizes them as soon as they're plugged in.",
    "rev.f1": "143 officially supported Synapse 2 devices + 32 more from its data files",
    "rev.f2": "Lighting, DPI, button and key remapping, macro recording",
    "rev.f3": "Headset equalizer, Chroma sync and usage stats",
    "rev.btn": "Coming soon",

    "col.title": "Korea's largest <span class=\"grad\">Razer</span> collection",
    "col.sub": "Mice, keyboards, controllers, headsets and limited-edition goods — this is the room they fill.",
    "cat.mouse": "Mice",
    "cat.kb": "Keyboards",
    "cat.ctrl": "Controllers",
    "cat.head": "Headsets",
    "cat.pad": "Mouse pads",
    "cat.audio": "Speakers",
    "cat.display": "Monitors",
    "cat.chair": "Chairs",
    "cat.bag": "Bags",
    "cat.ltd": "Limited goods",
    "rc.night": "Lights out",
    "rc.night.d": "The whole room at night, lit only by the lamp and the monitor",
    "rc.desk": "The desk at night",
    "rc.desk.d": "My work desk at night with every monitor and light on",
    "rc.room_day": "Surrounded by the collection",
    "rc.room_day.d": "The whole room, with Razer boxes and gear stacked along every wall",
    "rc.mice_floor": "Every mouse on the floor",
    "rc.mice_floor.d": "Naga, Mamba, DeathAdder, Imperator and more, laid out in their boxes",
    "rc.keyboards": "Keyboards",
    "rc.keyboards.d": "BlackWidow, Huntsman, Tarantula, Lycosa and more, still in their boxes",
    "rc.controllers": "Controllers",
    "rc.controllers.d": "The Atrox arcade stick with Raiju, Raion, Wolverine, Sabertooth, Wildcat and Onza controllers",
    "rc.mice_shelf": "The mouse shelves",
    "rc.mice_shelf.d": "Shelves packed with DeathAdder, Kraken and Raptor monitor boxes",
    "rc.team_bag": "Team Razer",
    "rc.team_bag.d": "A Team Razer backpack, VIP pass and cap",
    "rc.bottles": "Bottles and goods",
    "rc.bottles.d": "Razer bottles, tumblers and a cleaning kit",
    "rc.boomslang": "Boomslang",
    "rc.boomslang.d": "1000 dpi and 2000 dpi Boomslang boxes alongside other early mice",
    "rc.razerpay": "Razer Pay set",
    "rc.razerpay.d": "A Razer Pay box with a gold coin and a leather wallet",
    "rc.shelf_sax": "Shelves and a saxophone",
    "rc.shelf_sax.d": "Shelves of Onza, Hammerhead and Electra V2 boxes, with a saxophone in front",
    "lb.close": "Close",
    "lb.prev": "Previous photo",
    "lb.next": "Next photo",
    "col.link": "I don't just collect — when something's missing, I build it",

    "about.title": "About",
    "about.name": "Hyungchul",
    "about.role": "Indie developer · Razer collector",
    "skill.server": "Node.js · servers",
    "about.job": "Submarine cable manufacturing technician for 15 years",
    "about.lead": "I'm a solo developer with a day job. Evenings and weekends go into games and apps, and I handle everything from design and code to art, video and running the servers.",
    "about.lead2": "I collect the gear I love — and when it's missing something, I build it myself.",
    "tl.w": "Launched the English vocabulary game Word Quest on the web, with rankings and shared word lists",
    "tl.0": "Started a martial-arts MMORPG in the Murim Duel universe",
    "tl.r": "Finished Synapse 2 Revive 0.4.0 alpha",
    "tl.1": "Released Razer Edge Tuner (GitHub) · 0.2.0 adds English",
    "tl.2": "Released Wireless Charger Chroma for PC (GitHub)",
    "tl.3": "Launched ORBIT FRONT on Roblox",
    "tl.4": "Launched Murim Duel on Google Play",
    "tl.5": "Moved the Murim Duel online server to Seoul and run it myself",
    "tl.6": "Started the Murim Duel closed beta",

    "links.title": "Links",
    "links.gh": "App source code",
    "links.wq": "English vocabulary game",
    "links.yt": "Murim Duel channel",
    "links.th": "Dev updates",
    "links.ig": "Razer collection",
    "links.mail": "Email",
    "links.mailv": "Contact",

    "foot.line": "Hyungchul · Murim Duel · ORBIT FRONT · Word Quest",
    "foot.tm": "Razer is a trademark of Razer Inc. This site and the apps shown here are personal projects and are not affiliated with Razer."
  };

  const META = {
    ko: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').content
    },
    en: {
      title: "Hyungchul · Indie developer · Razer collector",
      desc: "Maker of the martial-arts action game Murim Duel, the Roblox mech action game ORBIT FRONT and the vocabulary game Word Quest, builder of apps for his own devices, and owner of Korea's largest Razer collection."
    }
  };

  const texts = Array.from(document.querySelectorAll("[data-i18n]"));
  texts.forEach((n) => { n.dataset.ko = n.innerHTML; });
  const attrs = Array.from(document.querySelectorAll("[data-i18n-attr]"));
  attrs.forEach((n) => {
    n.dataset.i18nAttr.split(";").forEach((pair) => {
      const [name] = pair.split(":");
      n.dataset["ko_" + name.replace(/-/g, "_")] = n.getAttribute(name) || "";
    });
  });

  function apply(lang) {
    const en = lang === "en";
    document.documentElement.lang = en ? "en" : "ko";
    texts.forEach((n) => {
      const v = EN[n.dataset.i18n];
      n.innerHTML = en && v != null ? v : n.dataset.ko;
    });
    attrs.forEach((n) => {
      n.dataset.i18nAttr.split(";").forEach((pair) => {
        const [name, key] = pair.split(":");
        const v = EN[key];
        n.setAttribute(name, en && v != null ? v : n.dataset["ko_" + name.replace(/-/g, "_")]);
      });
    });
    document.querySelectorAll(".thumb.is-on").forEach((b) => {
      const main = b.closest(".game__media").querySelector(".game__main");
      main.alt = en && b.dataset.altEn ? b.dataset.altEn : b.dataset.alt;
    });
    document.title = META[en ? "en" : "ko"].title;
    document.querySelector('meta[name="description"]').content = META[en ? "en" : "ko"].desc;
    document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === (en ? "en" : "ko"))));
  }

  function pick() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "ko") return q;
    try {
      const s = localStorage.getItem("lang");
      if (s === "en" || s === "ko") return s;
    } catch (e) { /* 저장소를 못 쓰는 창 */ }
    return (navigator.language || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
  }

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.addEventListener("click", () => {
      apply(b.dataset.lang);
      try { localStorage.setItem("lang", b.dataset.lang); } catch (e) { /* 무시 */ }
    });
  });

  window.siteLang = () => document.documentElement.lang;
  apply(pick());
})();
