import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1234";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  if (body?.password === ADMIN_PASSWORD) return NextResponse.json({ ok: true });
  return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
}
