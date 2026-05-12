import { createClient } from "@supabase/supabase-js";

/** 자체 호스팅 Supabase (hsweb.pics) */
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://api.hsweb.pics";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const SUPABASE_SCHEMA = "kyungwoo_precision";

/** 제품 사진 저장용 스토리지 버킷 */
export const PRODUCT_BUCKET = "kyungwoo-precision";

/**
 * Next.js의 fetch Data Cache가 Supabase 응답을 캐싱해서 최신 데이터가 안 보이는 문제 방지용.
 * 모든 Supabase 요청을 항상 no-store 로 강제한다.
 */
const noStoreFetch: typeof fetch = (input, init) =>
  fetch(input, { ...init, cache: "no-store" });

function makeClient(key: string) {
  return createClient(SUPABASE_URL, key, {
    db: { schema: SUPABASE_SCHEMA },
    auth: { persistSession: false, autoRefreshToken: false },
    global: { fetch: noStoreFetch },
  });
}

/** 읽기 전용(anon) 클라이언트 — 호출 시마다 새로 생성 (캐시/상태 누적 방지) */
export function supabasePublic() {
  return makeClient(SUPABASE_ANON_KEY);
}

/** 관리자(service_role) 클라이언트 — 서버 전용 (API 라우트에서만 사용) */
export function supabaseAdmin() {
  return makeClient(process.env.SUPABASE_SERVICE_ROLE_KEY || "");
}
