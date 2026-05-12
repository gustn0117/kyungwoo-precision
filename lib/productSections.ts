import { PRODUCT_CATEGORIES } from "./site";

/** 제품정보 페이지 안에서 사진 관리가 가능한 모든 섹션 */
export const PRODUCT_SECTIONS: { id: string; title: string }[] = [
  ...PRODUCT_CATEGORIES.map((c) => ({ id: c.id as string, title: c.title as string })),
  { id: "gallery", title: "제품 갤러리 (실제 가공·공급 사례)" },
];

export const PRODUCT_SECTION_IDS = PRODUCT_SECTIONS.map((s) => s.id);
