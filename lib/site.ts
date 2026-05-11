export const SITE = {
  name: "경우정밀",
  nameEn: "KYUNGWOO PRECISION",
  tagline: "정밀가공 기술의 기준",
  description:
    "CNC·머시닝 가공부터 열처리·연마·도금까지, 모든 정밀가공 공정을 한 곳에서 책임집니다.",
  founded: "1993.03.05",
  ceo: "최양수",
  employees: 33,
  equipmentCount: 38,
  equipmentBreakdown: "CNC 13 · MCT 8 · 연마 6 · 기타 11",
  yearsLabel: "33년",
  business: "CNC/MCT/선반 기계가공 (차체 용접치구, 검사구, 산업용 기계부품)",
  address: {
    full: "경기 시흥시 군자천로31번길 56 (시화공단 2바 213호)",
    road: "경기 시흥시 군자천로31번길 56",
    detail: "시화공단 2바 213호",
  },
  contact: {
    manager: "최승현 매니저",
    phone: "031-319-1983",
    mobile: "010-3116-2504",
    fax: "031-319-1984",
    email: "dragonbus1@naver.com",
    kakaoUrl: "#",
  },
} as const;

export const NAV = [
  {
    label: "회사소개",
    href: "/about",
    children: [
      { label: "인사말", href: "/about/greeting" },
      { label: "연혁", href: "/about/history" },
      { label: "회사개요", href: "/about/overview" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "제품정보",
    href: "/products",
    children: [
      { label: "자동차 지그", href: "/products#auto-jig" },
      { label: "샤프트", href: "/products#shaft" },
      { label: "다웰핀/로케이션핀", href: "/products#dowel-pin" },
      { label: "MCT 형상 가공품", href: "/products#mct-form" },
      { label: "제관물 / 브라켓트", href: "/products#bracket" },
      { label: "정밀 기계 부품", href: "/products#precision-parts" },
    ],
  },
  {
    label: "보유설비",
    href: "/equipment",
    children: [
      { label: "설비 보유 현황", href: "/equipment#machines" },
      { label: "측정기 보유 현황", href: "/equipment#measuring" },
      { label: "후처리 - 열처리", href: "/equipment#heat" },
      { label: "후처리 - 연마", href: "/equipment#grinding" },
    ],
  },
  {
    label: "고객센터",
    href: "/contact",
    children: [
      { label: "문의하기", href: "/contact#inquiry" },
      { label: "자료실", href: "/contact#library" },
    ],
  },
] as const;

export const STRENGTHS = [
  {
    title: "다품종 소량 생산",
    desc: "CNC 13대, MCT 8대, 범용 선반·밀링 등 총 38대의 공정 설비를 바탕으로 고정밀 부품 가공과 다품종 소량 생산에 최적화된 맞춤형 생산 시스템을 제공합니다.",
    bg: "/equipment/cnc-lathe-3.jpg",
  },
  {
    title: "ONE-STOP 생산 시스템",
    desc: "소재 절단부터 가공·열처리·연마·도금·검사 및 출고까지 전 공정을 체계적으로 운영하여 안정적인 품질과 납기를 제공합니다.",
    bg: "/equipment/horizontal-lathe-1.jpg",
  },
  {
    title: "자동차 용접 지그 표준품 상시 재고",
    desc: "현대기아·GM·르노 등 자동차 용접 지그 표준품을 체계적으로 관리·보유하여 납기 단축과 생산 효율 향상을 동시에 실현합니다.",
    bg: "/products/gallery-15.jpg",
  },
] as const;

export const PROCESS_STEPS = [
  { key: "order", label: "수주", desc: "고객 요청 접수 및 사양 협의" },
  { key: "cut", label: "소재절단·발주", desc: "S45C 외 다양한 소재 재고 보유" },
  { key: "machining", label: "CNC·MCT 가공", desc: "CNC 13 · MCT 8 등 가공 설비 대응" },
  { key: "heat", label: "열처리", desc: "진공·질화·TD·고주파 (협력사 20년)" },
  { key: "grinding", label: "연마·도금", desc: "원통/평면 연마 직접 보유" },
  { key: "qc", label: "검사·측정·포장", desc: "ZEISS 3차원 측정 + 정밀 검사" },
  { key: "ship", label: "출고", desc: "납기 절대 준수" },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    id: "auto-jig",
    title: "자동차 용접 지그 표준품",
    desc: "현대기아·GM·르노 차체 지그용 표준품을 상시 재고 보유. 다웰핀, 힌지핀, 스토퍼, L/서브 브라켓트, 검사구 표준품을 신속 공급합니다.",
    images: [
      "/products/gallery-15.jpg",
      "/products/gallery-16.jpg",
      "/products/gallery-22.jpg",
    ],
    items: ["다웰핀 / 로케이션핀", "힌지핀", "스토퍼", "L/서브 브라켓트", "검사구 표준품"],
  },
  {
    id: "shaft",
    title: "샤프트 / 환봉 가공품",
    desc: "최대 Ø650, 길이 3500mm까지 가공 가능한 CNC 선반을 보유합니다. 정밀 외경·동심도가 요구되는 산업용 샤프트를 양산합니다.",
    images: [
      "/products/gallery-1.jpg",
      "/products/gallery-2.jpg",
      "/products/gallery-3.jpg",
    ],
    items: ["산업용 샤프트", "원형 정밀 가공품", "환봉 가공품"],
  },
  {
    id: "dowel-pin",
    title: "다웰핀 / 로케이션핀",
    desc: "고경도 열처리 후 정밀 연마까지 일관 공정으로 처리해 위치 결정용 핀의 치수 정밀도와 표면 품질을 동시에 만족합니다.",
    images: [
      "/products/gallery-19.jpg",
      "/products/gallery-20.jpg",
      "/products/gallery-21.jpg",
    ],
    items: ["로케이션핀", "다웰핀", "정밀 부쉬"],
  },
  {
    id: "mct-form",
    title: "MCT 형상 가공품",
    desc: "복잡한 3D 형상을 머시닝 센터(MCT) 8대(수직 7 + 호리젠탈 1)로 정밀 가공합니다. 인덱스 타입 MCT로 다축 가공에 대응합니다.",
    images: [
      "/products/gallery-7.jpg",
      "/products/gallery-8.jpg",
      "/products/gallery-12.jpg",
    ],
    items: ["MCT 형상 가공품", "정밀 플레이트", "복합 가공 부품"],
  },
  {
    id: "bracket",
    title: "제관물 / 브라켓트",
    desc: "서브/브라켓트 및 제관물의 절단·용접·가공·후처리까지 사내 일괄 처리. 차체 부품에 요구되는 강건성과 정밀도를 확보합니다.",
    images: [
      "/products/gallery-23.jpg",
      "/products/gallery-24.jpg",
      "/products/gallery-25.jpg",
    ],
    items: ["로켓타", "브라켓트 / 서브 브라켓트", "레벨볼트", "대차바퀴 / 휠"],
  },
  {
    id: "precision-parts",
    title: "정밀 기계 부품",
    desc: "산업용 기계에 들어가는 고정밀 부품을 CNC·MCT·연마 일관 공정으로 가공합니다. 치수 정밀도와 표면 품질이 까다로운 부품에 강점이 있습니다.",
    images: [
      "/products/gallery-9.jpg",
      "/products/gallery-10.jpg",
      "/products/gallery-11.jpg",
    ],
    items: ["정밀 플레이트류", "정밀 부쉬 / 슬리브", "기계 가공 부품", "산업용 기계 부품"],
  },
] as const;

export const EQUIPMENT_LIST = [
  { name: "CNC 선반", count: 13, usage: "컴퓨터 수치 제어를 통한 원형 공작물 가공", note: "8/10/21인치 보유, 최대 Ø650 × L3500" },
  { name: "호리젠탈 머시닝센터", count: 1, usage: "평면·깊은 홈 가공에 뛰어난 성능, 대형·중량물 제작에 적합", note: "800 × 800 (대형 가공)" },
  { name: "머시닝 센터 (MCT)", count: 7, usage: "복잡한 3D 형상 가공", note: "인덱스 타입 보유 (DOOSAN 외)" },
  { name: "범용 선반", count: 4, usage: "수량이 적은 원형 공작물 가공", note: "다품종 소량 대응" },
  { name: "범용 밀링", count: 4, usage: "복잡한 형상의 수동 가공", note: "CNC·MCT 보조 작업" },
  { name: "연마기", count: 6, usage: "가공·열처리 후 제품 수치 및 거칠기 정밀 가공", note: "원통연마 3대 + 평면연마 3대" },
  { name: "톱기계", count: 1, usage: "제품 길이에 맞게 소재 절단", note: "소재 절단" },
  { name: "용접기", count: 1, usage: "제관물 / 브라켓트 용접", note: "" },
  { name: "유압프레스", count: 1, usage: "금속판재의 압착·성형·교정 및 부품의 압입 작업", note: "" },
];

export const MEASURING_LIST = [
  { name: "3차원 측정장비", maker: "ZEISS CONTURA G2 + CALYPSO", note: "스위스 ZEISS / 자동 측정", featured: true },
  { name: "수동 3차원 측정기", maker: "STARRETT", note: "" },
  { name: "조도 측정기", maker: "MITUTOYO", note: "" },
  { name: "현미경 (EGVM-35B)", maker: "VIDEO MICRO SCOPE SYSTEM", note: "" },
  { name: "형상측정기 (CV-3200)", maker: "MITUTOYO", note: "" },
  { name: "마이크로미터 / 캘리퍼스", maker: "MITUTOYO", note: "8~100mm 다양 보유" },
  { name: "실린더 게이지", maker: "MITUTOYO", note: "0~25mm" },
  { name: "외경 마이크로", maker: "MITUTOYO", note: "0~100mm" },
];

export const HEAT_TREATMENTS = [
  { type: "진공 열처리", desc: "균일한 경도와 변형 최소화", img: "/process/heat-vacuum.jpg" },
  { type: "질화", desc: "표면 경도 향상 및 내마모성 강화", img: "/process/heat-nitriding.jpg" },
  { type: "TD 코팅", desc: "고경도 탄화물 표면 처리", img: "/process/heat-td.jpg" },
  { type: "고주파", desc: "필요 부위만 선택적 표면 경화", img: "/process/heat-induction.jpg" },
  { type: "침탄", desc: "저탄소강 표면 침탄 경화", img: "/process/heat-carburizing.png" },
];

export const PARTNERS = [
  "현대기아", "GM", "르노", "산업용 기계부품 OEM", "공작기계 업체",
];

/* 조직도 */
export const ORG_CHART = [
  { dept: "총무부", count: 3, tasks: ["기획 및 관리 업무", "예산 / 견적 업무"] },
  { dept: "CNC부", count: 11, tasks: ["CNC 가공 담당", "야간 CNC / MCT 품질관리"] },
  { dept: "MCT부", count: 7, tasks: ["MCT 가공 담당"] },
  { dept: "제관부", count: 3, tasks: ["서브 / 브라켓트 및 제관물 용접", "공작물 절단"] },
  { dept: "수동선반부", count: 5, tasks: ["수동선반 및 밀링 가공 담당"] },
  { dept: "연마부", count: 4, tasks: ["열처리 및 연마 담당", "최종 품질 확인", "제품 포장 및 출고"] },
] as const;

/* 핵심 사업 영역 */
export const CORE_BUSINESS = [
  "CNC / MCT 정밀 가공",
  "수동 선반 / 밀링 가공",
  "차체 용접치구·검사구 제작",
  "산업용 기계부품 가공",
  "원통·평면 연마 (사내)",
  "열처리·도금 (협력사 일괄 관리)",
  "ZEISS 3차원 측정·검사",
] as const;

/* 연혁 */
export const COMPANY_HISTORY = [
  {
    decade: "2020s",
    items: [
      { y: "2025", t: "호리젠탈 머시닝 센터 도입 — 대형·중량물 가공 대응", featured: true },
      { y: "2024", t: "ZEISS CALYPSO 3차원 측정 시스템 운영 고도화" },
      { y: "2023", t: "다품종 소량 생산 라인 확장 / 자동차 지그 표준품 재고 시스템 정비" },
      { y: "2022", t: "범용 밀링·연마 설비 추가 도입으로 사내 일관 공정 강화" },
      { y: "2021", t: "사내 가공·후처리 일관 체제 정비" },
    ],
  },
  {
    decade: "2010s",
    items: [
      { y: "2019", t: "ZEISS CONTURA G2 자동 3차원 측정기 도입" },
      { y: "2015", t: "현대기아·GM·르노 차체 지그 표준품 정규 공급사 등록" },
      { y: "2012", t: "MCT 7대 · CNC 선반 13대 라인업 구축" },
    ],
  },
  {
    decade: "2000s",
    items: [
      { y: "2008", t: "원통연마·평면연마 사내 라인 구축 (총 6대)" },
      { y: "2005", t: "자가 공장 매입 — 현 시화공단 사옥 입주" },
      { y: "2005", t: "시화공단 내 협력 열처리·도금사와 장기 파트너십 체결" },
      { y: "2002", t: "CNC 선반 양산 라인 확장" },
    ],
  },
  {
    decade: "1990s",
    items: [
      { y: "1998", t: "차체 용접치구·검사구 정규 부품 공급" },
      { y: "1995", t: "산업용 기계부품 가공 사업 본격 진출" },
      { y: "1993.03", t: "경우정밀 설립 (대표 최양수)" },
    ],
  },
] as const;

/* 설비 카탈로그 사진 (CNC / MCT) */
export const CNC_CATALOG = [
  { src: "/equipment/catalog/cnc-puma280.jpg", name: "DOOSAN PUMA 280" },
  { src: "/equipment/catalog/cnc-puma240.png", name: "DOOSAN PUMA 240" },
  { src: "/equipment/catalog/cnc-lynx2100.png", name: "DOOSAN LYNX 2100" },
  { src: "/equipment/catalog/cnc-lynx210a.png", name: "DOOSAN LYNX 210A" },
  { src: "/equipment/catalog/cnc-lynx220a.png", name: "DOOSAN LYNX 220A" },
  { src: "/equipment/catalog/cnc-lynx220c.png", name: "DOOSAN LYNX 220C" },
] as const;

export const MCT_CATALOG = [
  { src: "/equipment/catalog/mct-mynx6500.png", name: "DOOSAN MYNX 6500 / 50" },
  { src: "/equipment/catalog/mct-mynx5400ii.png", name: "DOOSAN MYNX 5400 II" },
  { src: "/equipment/catalog/mct-lcv6700.png", name: "DOOSAN LCV 6700" },
  { src: "/equipment/catalog/mct-nhm8000-horizontal.png", name: "DOOSAN NHM 8000 — 호리젠탈 MCT" },
] as const;
