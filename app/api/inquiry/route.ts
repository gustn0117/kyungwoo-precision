import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, PRODUCT_BUCKET, SUPABASE_URL } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const MAX_FILE = 20 * 1024 * 1024; // 20MB

function publicUrl(path: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${PRODUCT_BUCKET}/${path}`;
}

/** 홈페이지 문의 접수 (multipart/form-data) */
export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const str = (k: string) => ((form.get(k) as string | null) || "").trim();
  const name = str("name").slice(0, 60);
  const phone = str("phone").slice(0, 40);
  const message = str("message").slice(0, 5000);
  // 허니팟 (봇 차단)
  if (str("website")) return NextResponse.json({ ok: true });

  if (!name || !phone || !message)
    return NextResponse.json({ error: "성함, 연락처, 문의 내용은 필수입니다." }, { status: 400 });

  const company = str("company").slice(0, 80) || null;
  const email = str("email").slice(0, 120) || null;
  const category = str("category").slice(0, 60) || null;
  const subject = str("subject").slice(0, 120) || null;

  const sb = supabaseAdmin();

  let file_url: string | null = null;
  let file_name: string | null = null;
  let file_path: string | null = null;

  const file = form.get("file") as File | null;
  if (file && file.size > 0) {
    if (file.size > MAX_FILE)
      return NextResponse.json({ error: "첨부파일은 20MB 이하만 가능합니다." }, { status: 400 });
    const safeName = file.name.replace(/[^\w.\-가-힣]/g, "_").slice(-80) || "attachment";
    const ext = (safeName.split(".").pop() || "").toLowerCase();
    const path = `inquiries/${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext ? "." + ext : ""}`;
    const buf = Buffer.from(await file.arrayBuffer());
    const { error: upErr } = await sb.storage.from(PRODUCT_BUCKET).upload(path, buf, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });
    if (upErr) return NextResponse.json({ error: "파일 업로드 실패: " + upErr.message }, { status: 500 });
    file_url = publicUrl(path);
    file_name = safeName;
    file_path = path;
  }

  const { error } = await sb.from("inquiries").insert({
    name, company, phone, email, category, subject, message, file_url, file_name, file_path,
  });
  if (error) {
    if (file_path) await sb.storage.from(PRODUCT_BUCKET).remove([file_path]);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
