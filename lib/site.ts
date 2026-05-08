export const SITE = {
  name: "경우정밀",
  nameEn: "KYUNGWOO PRECISION",
  tagline: "정밀가공 기술의 기준",
  description:
    "CNC · MCT 가공은 물론 열처리, 연마, 도금, 3차원 측정까지 모든 공정을 One-Stop으로 제공합니다.",
  founded: "1993.03.05",
  ceo: "최양수",
  employees: 30,
  equipmentCount: 27,
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
      { label: "정밀가공품", href: "/products#precision" },
      { label: "제관물 / 브라켓트", href: "/products#bracket" },
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
    desc: "다양한 사양과 요구조건에 대응 가능한 유연한 생산 시스템을 구축하여 소량 제품도 높은 정밀도와 일관된 품질로 제공합니다.",
    accent: "from-slate-900/70 to-slate-900/40",
    bg: "/equipment/cnc-lathe-3.jpg",
  },
  {
    title: "3차원 측정기반 품질 관리",
    desc: "스위스 ZEISS사 CALYPSO 측정기를 활용한 정밀 검사를 통해 제품의 치수와 공차를 체계적으로 관리하며, 품질 안정성과 데이터 기반 신뢰성을 확보합니다.",
    accent: "from-red-900/75 to-red-700/45",
    bg: "/equipment/mct-2.jpg",
  },
  {
    title: "자동차 지그 표준품 상시 재고 보유",
    desc: "현대기아·GM·르노 등 자동차 지그 표준품을 체계적으로 관리·보유하여 납기 단축과 생산 효율 향상을 동시에 실현합니다.",
    accent: "from-brand-900/70 to-brand-700/40",
    bg: "/products/gallery-15.jpg",
  },
] as const;

export const PROCESS_STEPS = [
  { key: "order", label: "수주", desc: "고객 요청 접수 및 사양 협의" },
  { key: "cut", label: "소재절단·발주", desc: "S45C 외 다양한 소재 재고 보유" },
  { key: "machining", label: "CNC·MCT 가공", desc: "총 24대의 가공 설비로 대응" },
  { key: "heat", label: "열처리", desc: "진공·질화·TD·고주파 (협력사 20년)" },
  { key: "grinding", label: "연마·도금", desc: "원통/평면 연마 직접 보유" },
  { key: "qc", label: "검사·측정·포장", desc: "ZEISS 3차원 측정 + 정밀 검사" },
  { key: "ship", label: "출고", desc: "납기 절대 준수" },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    id: "auto-jig",
    title: "자동차 지그 표준품",
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
    desc: "최대 Ø500, 길이 2000mm까지 가공 가능한 CNC 선반 보유. 정밀 외경·동심도가 요구되는 산업용 샤프트를 양산합니다.",
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
    id: "precision",
    title: "MCT 형상 가공품",
    desc: "복잡한 3D 형상을 머시닝 센터(MCT) 8대(수직7+호리젠탈1)로 정밀 가공합니다. 인덱스 타입 MCT로 다축 가공 대응.",
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
] as const;

export const EQUIPMENT_LIST = [
  { name: "CNC 선반", count: 13, usage: "컴퓨터 수치 제어를 통한 원형 공작물 가공", note: "8/10/21인치 보유, 최대 Ø500 × L2000" },
  { name: "호리젠탈 머시닝센터", count: 1, usage: "평면·깊은 홈 가공에 뛰어난 성능, 대형/중량물 제작 적합", note: "" },
  { name: "머시닝 센터 (MCT)", count: 7, usage: "복잡한 3D 형상 가공", note: "인덱스 타입 보유 (DOOSAN 외)" },
  { name: "수동 선반", count: 4, usage: "수량이 적은 원형 공작물 가공", note: "다품종 소량 대응" },
  { name: "범용 밀링", count: 4, usage: "복잡한 형상의 수동 가공", note: "" },
  { name: "연마기", count: 6, usage: "가공/열처리 후 제품 수치 및 거칠기 정밀 가공", note: "원통연마 3대 + 평면연마 3대" },
  { name: "톱기계", count: 1, usage: "제품 길이에 맞게 소재 절단", note: "" },
  { name: "용접기", count: 1, usage: "제관물 / 브라켓트 용접", note: "" },
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
