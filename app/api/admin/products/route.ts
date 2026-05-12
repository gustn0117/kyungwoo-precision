import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, PRODUCT_BUCKET, SUPABASE_URL } from "@/lib/supabase";
import { PRODUCT_SECTION_IDS } from "@/lib/productSections";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1234";

function checkAuth(pw: string | null | undefined) {
  return typeof pw === "string" && pw === ADMIN_PASSWORD;
}

function publicUrl(path: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${PRODUCT_BUCKET}/${path}`;
}

/** 전체 또는 특정 섹션의 사진 목록 */
export async function GET(req: NextRequest) {
  const section = req.nextUrl.searchParams.get("section");
  const sb = supabaseAdmin();
  let q = sb.from("product_images").select("*").order("section").order("sort");
  if (section) q = sb.from("product_images").select("*").eq("section", section).order("sort");
  const { data, error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ images: data ?? [] });
}

/** 사진 업로드 (multipart/form-data: password, section, file) */
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = form.get("password") as string | null;
  if (!checkAuth(password))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });

  const section = form.get("section") as string | null;
  if (!section || !PRODUCT_SECTION_IDS.includes(section))
    return NextResponse.json({ error: "알 수 없는 섹션입니다." }, { status: 400 });

  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });

  const title = ((form.get("title") as string | null) || "").trim().slice(0, 120) || null;

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const path = `${section}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const sb = supabaseAdmin();
  const buf = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await sb.storage.from(PRODUCT_BUCKET).upload(path, buf, {
    contentType: file.type || "image/jpeg",
    upsert: false,
  });
  if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

  // 섹션 내 가장 마지막 순서로 추가
  const { data: maxRow } = await sb
    .from("product_images")
    .select("sort")
    .eq("section", section)
    .order("sort", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextSort = (maxRow?.sort ?? -1) + 1;

  const { data: inserted, error: insErr } = await sb
    .from("product_images")
    .insert({ section, url: publicUrl(path), storage_path: path, sort: nextSort, title })
    .select()
    .single();
  if (insErr) {
    await sb.storage.from(PRODUCT_BUCKET).remove([path]);
    return NextResponse.json({ error: insErr.message }, { status: 500 });
  }
  return NextResponse.json({ image: inserted });
}

/** 사진 삭제 (json: password, id) */
export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  if (!checkAuth(body.password))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  const id = Number(body.id);
  if (!id) return NextResponse.json({ error: "id가 없습니다." }, { status: 400 });

  const sb = supabaseAdmin();
  const { data: row } = await sb.from("product_images").select("*").eq("id", id).maybeSingle();
  if (!row) return NextResponse.json({ error: "사진을 찾을 수 없습니다." }, { status: 404 });

  if (row.storage_path) {
    await sb.storage.from(PRODUCT_BUCKET).remove([row.storage_path]);
  }
  const { error } = await sb.from("product_images").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

/**
 * PATCH:
 *  - 순서 변경: { password, section, order: number[] }
 *  - 제목 수정: { password, id, title }
 */
export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  if (!checkAuth(body.password))
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });

  const sb = supabaseAdmin();

  // 제목 수정
  if (body.id !== undefined && body.title !== undefined) {
    const id = Number(body.id);
    const title = String(body.title).trim().slice(0, 120) || null;
    const { error } = await sb.from("product_images").update({ title }).eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  // 순서 변경
  const order: number[] = Array.isArray(body.order) ? body.order.map(Number) : [];
  const section: string = body.section;
  if (!section || order.length === 0)
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  for (let i = 0; i < order.length; i++) {
    const { error } = await sb
      .from("product_images")
      .update({ sort: i })
      .eq("id", order[i])
      .eq("section", section);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
