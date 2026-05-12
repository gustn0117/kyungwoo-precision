import { NextResponse } from "next/server";
import { supabase, SUPABASE_URL } from "@/lib/supabase";
import { getProductImagesBySection } from "@/lib/productImages";

export const dynamic = "force-dynamic";

export async function GET() {
  const out: Record<string, unknown> = {};
  out.SUPABASE_URL = SUPABASE_URL;
  out.anonKeyLen = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").length;
  out.srKeyLen = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").length;
  try {
    const { data, error } = await supabase
      .from("product_images")
      .select("id,section,url,title")
      .limit(5);
    out.anonSelect = { error: error ? String(error.message || error) : null, count: data?.length ?? null, sample: data ?? null };
  } catch (e) {
    out.anonSelectThrew = String(e);
  }
  try {
    const m = await getProductImagesBySection();
    out.bySectionKeys = Object.keys(m);
    out.galleryCount = m["gallery"]?.length ?? null;
  } catch (e) {
    out.bySectionThrew = String(e);
  }
  return NextResponse.json(out);
}
