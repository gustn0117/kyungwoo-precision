import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, PRODUCT_BUCKET } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1234";
const ok = (pw: string | null | undefined) => typeof pw === "string" && pw === ADMIN_PASSWORD;

/** 문의 목록 (GET ?password=) */
export async function GET(req: NextRequest) {
  if (!ok(req.nextUrl.searchParams.get("password")))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  const sb = supabaseAdmin();
  const { data, error } = await sb
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ inquiries: data ?? [] });
}

/** 처리 완료 토글 (PATCH json: password, id, handled) */
export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  if (!ok(body.password))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  const id = Number(body.id);
  if (!id) return NextResponse.json({ error: "id가 없습니다." }, { status: 400 });
  const sb = supabaseAdmin();
  const { error } = await sb.from("inquiries").update({ handled: !!body.handled }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

/** 문의 삭제 (DELETE json: password, id) */
export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  if (!ok(body.password))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  const id = Number(body.id);
  if (!id) return NextResponse.json({ error: "id가 없습니다." }, { status: 400 });
  const sb = supabaseAdmin();
  const { data: row } = await sb.from("inquiries").select("file_path").eq("id", id).maybeSingle();
  if (row?.file_path) await sb.storage.from(PRODUCT_BUCKET).remove([row.file_path]);
  const { error } = await sb.from("inquiries").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
