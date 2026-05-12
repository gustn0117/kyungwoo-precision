import { createClient } from "@supabase/supabase-js";

/** 자체 호스팅 Supabase (hsweb.pics) */
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://api.hsweb.pics";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const SUPABASE_SCHEMA = "kyungwoo_precision";

/** 제품 사진 저장용 스토리지 버킷 */
export const PRODUCT_BUCKET = "kyungwoo-precision";

/** 읽기 전용(anon) 클라이언트 — 서버/클라이언트 공통 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  db: { schema: SUPABASE_SCHEMA },
  auth: { persistSession: false },
});

/** 관리자(service_role) 클라이언트 — 서버 전용 (API 라우트에서만 사용) */
export function supabaseAdmin() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return createClient(SUPABASE_URL, key, {
    db: { schema: SUPABASE_SCHEMA },
    auth: { persistSession: false },
  });
}
