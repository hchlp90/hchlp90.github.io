// 페이지 본문은 영어. 한국어는 아래 표에서 data-i18n 열쇠로 찾아 바꾼다.
(() => {
  const KO = {
    "about.initial": "형",
    "about.job": "해저케이블 제조 기능직 <span class=\"nb\">15년째 근무 중</span>",
    "about.lead": "본업이 따로 있는 1인 개발자입니다. 퇴근 후와 주말을 모아 게임과 앱을 만들고, 기획부터 개발·그림·영상·서버 운영까지 직접 합니다.",
    "about.lead2": "좋아하는 기기는 끝까지 모으고, 부족한 기능이 보이면 직접 만들어 씁니다.",
    "about.name": "형철",
    "about.role": "인디 개발자 · Razer 컬렉터",
    "about.title": "소개",
    "app.github": "GitHub에서 보기",
    "apps.note": "모두 Razer와 관계없는 비공식 개인 프로젝트입니다.",
    "apps.sub": "가진 기기를 더 잘 쓰려고 만든 도구들입니다. 소스는 모두 GitHub에 공개했습니다.",
    "apps.title": "만든 앱 · 프로그램",
    "brand": "형철",
    "cat.audio": "스피커",
    "cat.bag": "가방",
    "cat.chair": "의자",
    "cat.ctrl": "컨트롤러",
    "cat.display": "모니터",
    "cat.head": "헤드셋",
    "cat.kb": "키보드",
    "cat.ltd": "한정 소품",
    "cat.mouse": "마우스",
    "cat.pad": "마우스 패드",
    "chg.alt1": "충전기 조명 색 편집 화면",
    "chg.alt2": "충전기 조명 효과 고르기 화면",
    "chg.badge": "Windows 프로그램",
    "chg.desc": "Razer Chroma 무선 충전기의 조명을 PC에서 바꾸는 프로그램입니다. 휴대폰 전용이던 설정 앱과 같은 화면으로, USB나 블루투스로 충전기와 직접 통신합니다.",
    "chg.f1": "색상환 · 밝기 · 효과 4종(정적 · 브리딩 · 스펙트럼 · 웨이브)",
    "chg.f2": "대기 효과 · 상태 표시기 · 조명 타이머",
    "chg.f3": "USB(HID) · 블루투스 LE 통신 방식을 정리해 구현",
    "chg.name": "무선 충전기 크로마",
    "chroma.blue": "파랑",
    "chroma.green": "초록",
    "chroma.label": "방 조명 색 바꾸기",
    "chroma.off": "사진 그대로",
    "chroma.red": "빨강",
    "chroma.violet": "보라",
    "chroma.wave": "스펙트럼",
    "col.link": "모으는 데서 그치지 않고, 필요한 도구는 직접 만듭니다",
    "col.sub": "지금까지 모은 Razer 제품만 500점이 넘습니다. 키보드와 마우스, 컨트롤러, 헤드셋부터 한정 소품까지 — 그 제품들로 채운 제 방입니다.",
    "col.title": "국내 최다 <span class=\"grad\">Razer</span> 컬렉션",
    "edge.alt": "엣지튜너 게임 라이브러리 화면",
    "edge.badge": "Android 앱",
    "edge.desc": "Razer Edge 게임 태블릿을 위한 튜너(엣지튜너)입니다. 게임마다 정해 둔 설정을 켤 때 자동으로 적용하고, 끄면 원래대로 돌려놓습니다. 한국어와 영어를 지원합니다.",
    "edge.f1": "게임별 주사율 · 화면비 · 해상도 자동 적용",
    "edge.f2": "팬 저소음 · 발열 보호 · 배터리 소모 분석",
    "edge.f3": "게임 위 FPS · 온도 · 핑 표시, 컨트롤러 점검",
    "edge.src1": "img/edge_library.webp",
    "edge.src2": "img/edge_tools.webp",
    "foot.line": "형철 · 무림대전 · ORBIT FRONT · 단어 원정대",
    "foot.tm": "Razer는 Razer Inc.의 상표입니다. 이 페이지와 여기 소개한 앱은 Razer와 관련이 없는 개인 프로젝트입니다.",
    "games.sub": "기획부터 개발, 그림, 영상, 서버 운영까지 혼자 맡았습니다.",
    "games.title": "만든 게임",
    "hero.cta1": "컬렉션 보기",
    "hero.cta2": "만든 앱",
    "hero.cta3": "만든 게임",
    "hero.lead": "무협 액션 <strong>무림대전</strong>, 로블록스 메카 액션 <strong class=\"t-orbit\">ORBIT FRONT</strong>, 영어 단어 게임 <strong class=\"t-wq\">단어 원정대</strong>를 혼자 만들어 출시했습니다. 쓰는 기기에 없는 기능은 앱으로 직접 만들고, 500점이 넘는 Razer 제품을 모은 국내 최다 컬렉터이기도 합니다.",
    "hero.now": "무협 MMORPG · Synapse 2 Revive 제작 중",
    "hero.title": "필요한 건<br><span class=\"grad\">직접 만듭니다.</span>",
    "hero.view": "이 사진 크게 보기",
    "lb.close": "닫기",
    "lb.next": "다음 사진",
    "lb.prev": "이전 사진",
    "links.gh": "앱 · 프로그램 소스",
    "links.mail": "이메일",
    "links.title": "찾아오는 길",
    "links.wq": "영어 단어 게임",
    "m2d.btn": "itch.io에서 플레이",
    "m2d.desc": "무림대전의 2D 격투판입니다. 10대 문파와 천마·좌우호법, 스토리·아케이드·자유 대결·온라인·수련장까지 브라우저에서 바로 플레이할 수 있습니다.",
    "m2d.name": "무림대전: 검의 전설",
    "mmo.alt": "무협 MMORPG 개발 중인 마을 화면",
    "mmo.badge": "제작 중",
    "mmo.desc": "무림대전의 세계관을 잇는 리니지풍 무협 MMORPG입니다. 사냥터 경쟁과 거래, 방파와 성 쟁탈을 목표로 첫 마을 강호성부터 만들고 있습니다.",
    "mmo.name": "무협 MMORPG",
    "mmo.t1": "쿼터뷰",
    "mmo.t2": "무림대전 세계관",
    "mmo.tag": "가제",
    "murim.alt": "무림대전 초필살기 연출",
    "murim.badge": "출시",
    "murim.btn": "Google Play에서 받기",
    "murim.desc": "문파마다 다른 무공과 필살기, 초필살기로 겨루는 3D 무협 액션 대전 게임입니다. 온라인 1 : 1과 다인전, 인물마다 다른 이야기, 요일마다 깨어나는 영물 토벌까지 담았습니다.",
    "murim.name": "무림대전",
    "murim.t1": "Godot 엔진",
    "murim.t2": "온라인 대전",
    "murim.t3": "자체 서울 서버",
    "nav.about": "소개",
    "nav.apps": "앱",
    "nav.col": "컬렉션",
    "nav.games": "게임",
    "nav.links": "링크",
    "orbit.alt": "ORBIT FRONT 실제 전투 화면",
    "orbit.badge": "로블록스 공개",
    "orbit.btn": "Roblox에서 플레이",
    "orbit.desc": "로블록스에서 즐기는 3D 고속 메카 액션입니다. 저마다 다른 무장과 필살기를 가진 기체 23종으로 3 : 3 팀 배틀을 벌이고, 동료와 함께 거대 보스 레이드와 무한 방어에 나섭니다.",
    "orbit.t1": "기체 23종",
    "orbit.t2": "팀 배틀 3 : 3",
    "orbit.t3": "레이드 · 무한 방어",
    "orbit.t4": "휴대폰 · 패드",
    "rc.boomslang": "Boomslang",
    "rc.boomslang.d": "1000dpi·2000dpi Boomslang과 초기 마우스 상자들",
    "rc.bottles": "보틀과 소품",
    "rc.bottles.d": "Razer 보틀과 텀블러, 세척 도구 세트",
    "rc.controllers": "컨트롤러",
    "rc.controllers.d": "Atrox 아케이드 스틱과 Raiju, Raion, Wolverine, Sabertooth, Wildcat, Onza 컨트롤러",
    "rc.desk": "밤의 책상",
    "rc.desk.d": "모니터와 조명을 모두 켠 밤의 작업 책상",
    "rc.keyboards": "키보드",
    "rc.keyboards.d": "BlackWidow, Huntsman, Tarantula, Lycosa 등 상자째 모은 키보드",
    "rc.mice_floor": "마우스를 펼친 날",
    "rc.mice_floor.d": "Naga, Mamba, DeathAdder, Imperator 등 상자째 바닥에 펼쳐 놓은 마우스",
    "rc.mice_shelf": "마우스 장",
    "rc.mice_shelf.d": "DeathAdder와 Kraken, Raptor 모니터 상자가 들어찬 장",
    "rc.night": "불을 끈 방",
    "rc.night.d": "스탠드와 모니터 불빛만 남은 밤의 방 전체 모습",
    "rc.razerpay": "Razer Pay 세트",
    "rc.razerpay.d": "Razer Pay 상자와 금빛 코인, 가죽 지갑",
    "rc.room_day": "컬렉션이 둘러싼 방",
    "rc.room_day.d": "벽마다 Razer 상자와 장비를 쌓아 둔 방 전체 모습",
    "rc.shelf_sax": "장 속 장비와 색소폰",
    "rc.shelf_sax.d": "Onza, Hammerhead, Electra V2 상자가 쌓인 장과 그 앞의 색소폰",
    "rc.team_bag": "Team Razer",
    "rc.team_bag.d": "Team Razer 백팩과 VIP 패스, 모자",
    "rev.alt": "Synapse 2 Revive 키보드 키마다 색 설정 화면",
    "rev.badge": "Windows 프로그램 · 0.4.0 알파",
    "rev.btn": "공개 준비 중",
    "rev.desc": "시냅스 2에서만 설정되던 오래된 Razer 기기를 요즘 시냅스 같은 화면으로 다시 설정하는 Windows 프로그램입니다. 시냅스 2 지원 기기를 모두 담았고, 꽂으면 자동으로 알아봅니다.",
    "rev.f1": "시냅스 2 지원 기기 143종 + 자료에만 있던 32종",
    "rev.f2": "조명 · 감도(DPI) · 버튼·키 할당 · 매크로 녹화",
    "rev.f3": "헤드셋 이퀄라이저 · 크로마 동기화 · 사용 통계",
    "skill.server": "Node.js · 서버 운영",
    "stat.apps": "공개한 앱",
    "stat.col": "국내 Razer 컬렉션",
    "stat.games": "출시한 게임",
    "stat.items": "모은 Razer 제품",
    "tl.0": "무림대전 세계관의 무협 MMORPG 제작 시작",
    "tl.1": "Razer Edge Tuner 공개 (GitHub) · 0.2.0 영어 지원",
    "tl.2": "Razer 무선 충전기 크로마 PC 프로그램 공개 (GitHub)",
    "tl.3": "ORBIT FRONT 로블록스 공개 출시",
    "tl.4": "무림대전 Google Play 정식 출시",
    "tl.5": "무림대전 온라인 서버를 서울로 이전 · 직접 운영",
    "tl.6": "무림대전 비공개 테스트 시작",
    "tl.r": "Synapse 2 Revive 0.4.0 알파 완성",
    "tl.w": "영어 단어 게임 단어 원정대 웹 공개 · 랭킹과 단어 묶음 공유",
    "wq.alt1": "단어 원정대 전투와 학습 화면",
    "wq.alt2": "단어 원정대 단어 뜻 고르기 문제",
    "wq.alt3": "단어 원정대 영웅 직업 고르기",
    "wq.badge": "웹 공개",
    "wq.btn": "바로 플레이",
    "wq.desc": "영어 단어를 외울수록 위에서 싸우는 영웅이 강해지는 학습 게임입니다. 옥스퍼드 5,300단어(A1~C1)를 레슨과 복습으로 익히면 그 힘으로 원정이 이어지고, 틀린 단어는 몬스터가 되어 다시 나타납니다.",
    "wq.name": "단어 원정대",
    "wq.t1": "옥스퍼드 5,300단어",
    "wq.t2": "직업 4종 · 남녀",
    "wq.t3": "랭킹 · 단어 묶음 공유",
    "wq.t4": "설치 없이 웹에서"
  };

  const META = {
    en: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').content
    },
    ko: {
      title: "형철 · 인디 개발자 · Razer 컬렉터",
      desc: "무협 액션 무림대전, 로블록스 메카 액션 ORBIT FRONT, 영어 단어 게임 단어 원정대를 만들고, 쓰는 기기에 필요한 앱을 직접 만드는 국내 최다 Razer 컬렉터 형철의 홈페이지."
    }
  };

  const texts = Array.from(document.querySelectorAll("[data-i18n]"));
  texts.forEach((n) => { n.dataset.en = n.innerHTML; });
  const attrs = Array.from(document.querySelectorAll("[data-i18n-attr]"));
  attrs.forEach((n) => {
    n.dataset.i18nAttr.split(";").forEach((pair) => {
      const [name] = pair.split(":");
      n.dataset["en_" + name.replace(/-/g, "_")] = n.getAttribute(name) || "";
    });
  });

  function apply(lang) {
    const ko = lang === "ko";
    document.documentElement.lang = ko ? "ko" : "en";
    texts.forEach((n) => {
      const v = KO[n.dataset.i18n];
      n.innerHTML = ko && v != null ? v : n.dataset.en;
    });
    attrs.forEach((n) => {
      n.dataset.i18nAttr.split(";").forEach((pair) => {
        const [name, key] = pair.split(":");
        const v = KO[key];
        n.setAttribute(name, ko && v != null ? v : n.dataset["en_" + name.replace(/-/g, "_")]);
      });
    });
    document.querySelectorAll(".thumb.is-on").forEach((b) => {
      const main = b.closest(".game__media").querySelector(".game__main");
      main.alt = !ko && b.dataset.altEn ? b.dataset.altEn : b.dataset.alt;
    });
    document.title = META[ko ? "ko" : "en"].title;
    document.querySelector('meta[name="description"]').content = META[ko ? "ko" : "en"].desc;
    document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === (ko ? "ko" : "en"))));
  }

  function pick() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "ko") return q;
    try {
      const s = localStorage.getItem("site-lang");
      if (s === "en" || s === "ko") return s;
    } catch (e) { /* 저장소를 못 쓰는 창 */ }
    return "en";
  }

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.addEventListener("click", () => {
      apply(b.dataset.lang);
      try { localStorage.setItem("site-lang", b.dataset.lang); } catch (e) { /* 무시 */ }
    });
  });

  window.siteLang = () => document.documentElement.lang;
  const first = pick();
  if (first === "ko") apply(first);
})();
