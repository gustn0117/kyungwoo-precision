import { supabase } from "./supabase";

export type ProductImage = {
  id: number;
  section: string;
  url: string;
  storage_path: string | null;
  sort: number;
};

/** 제품정보 사진을 섹션별로 묶어서 반환. DB 장애 시 빈 객체 반환(정적 fallback 사용). */
export async function getProductImagesBySection(): Promise<
  Record<string, ProductImage[]>
> {
  try {
    const { data, error } = await supabase
      .from("product_images")
      .select("*")
      .order("section", { ascending: true })
      .order("sort", { ascending: true });
    if (error || !data) return {};
    const map: Record<string, ProductImage[]> = {};
    for (const row of data as ProductImage[]) {
      (map[row.section] ||= []).push(row);
    }
    return map;
  } catch {
    return {};
  }
}
