"use client";

import { useCallback, useEffect, useState } from "react";
import { PRODUCT_SECTIONS } from "@/lib/productSections";

type Img = {
  id: number;
  section: string;
  url: string;
  title: string | null;
  storage_path: string | null;
  sort: number;
};

type Inquiry = {
  id: number;
  name: string;
  company: string | null;
  phone: string;
  email: string | null;
  category: string | null;
  subject: string | null;
  message: string;
  file_url: string | null;
  file_name: string | null;
  handled: boolean;
  created_at: string;
};

const PW_KEY = "kw_admin_pw";

export default function AdminPage() {
  const [pw, setPw] = useState<string | null>(null);
  const [pwInput, setPwInput] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? sessionStorage.getItem(PW_KEY) : null;
    if (saved) setPw(saved);
  }, []);

  async function doLogin(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setLoginErr("");
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwInput }),
      });
      if (!r.ok) {
        setLoginErr("비밀번호가 올바르지 않습니다.");
        return;
      }
      sessionStorage.setItem(PW_KEY, pwInput);
      setPw(pwInput);
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    sessionStorage.removeItem(PW_KEY);
    setPw(null);
    setPwInput("");
  }

  if (!pw) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <form onSubmit={doLogin} className="w-full max-w-sm bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h1 className="text-[20px] font-bold text-ink">경우정밀 관리자</h1>
          <p className="mt-2 text-[13.5px] text-ink-muted">제품 사진 · 문의 관리</p>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            placeholder="비밀번호"
            autoFocus
            className="mt-6 w-full border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-brand"
          />
          {loginErr && <p className="mt-2 text-[13px] text-red-600">{loginErr}</p>}
          <button type="submit" disabled={busy} className="mt-4 w-full bg-brand text-white rounded-lg py-3 text-[15px] font-semibold disabled:opacity-60">
            {busy ? "확인 중…" : "로그인"}
          </button>
        </form>
      </main>
    );
  }

  return <AdminDashboard pw={pw} onLogout={logout} />;
}

function AdminDashboard({ pw, onLogout }: { pw: string; onLogout: () => void }) {
  const [tab, setTab] = useState<"images" | "inquiries">("images");
  const [images, setImages] = useState<Img[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [titleInput, setTitleInput] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const flash = (type: "ok" | "err", text: string) => {
    setMsg({ type, text });
    setTimeout(() => setMsg(null), 4000);
  };

  const handle401 = (status: number) => {
    if (status === 401) onLogout();
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [ri, rq] = await Promise.all([
        fetch("/api/admin/products", { cache: "no-store" }),
        fetch(`/api/admin/inquiries?password=${encodeURIComponent(pw)}`, { cache: "no-store" }),
      ]);
      const ji = await ri.json();
      setImages(ji.images ?? []);
      if (rq.ok) {
        const jq = await rq.json();
        setInquiries(jq.inquiries ?? []);
      } else {
        handle401(rq.status);
      }
    } catch {
      flash("err", "데이터를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pw]);

  useEffect(() => {
    load();
  }, [load]);

  /* ---------- 사진 ---------- */
  async function upload(section: string, files: FileList) {
    const title = (titleInput[section] || "").trim();
    let okCount = 0;
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("password", pw);
      fd.append("section", section);
      fd.append("file", file);
      if (title) fd.append("title", title);
      const r = await fetch("/api/admin/products", { method: "POST", body: fd });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        flash("err", `업로드 실패: ${j.error || file.name}`);
        handle401(r.status);
        if (r.status === 401) return;
        continue;
      }
      okCount++;
    }
    if (okCount) flash("ok", `${okCount}장 업로드 완료`);
    setTitleInput((p) => ({ ...p, [section]: "" }));
    load();
  }

  async function editTitle(img: Img) {
    const next = window.prompt("사진 제목 (마우스 호버 시 표시됨)", img.title || "");
    if (next === null) return;
    const r = await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, id: img.id, title: next }),
    });
    if (!r.ok) {
      flash("err", "제목 저장 실패");
      handle401(r.status);
      return;
    }
    flash("ok", "제목이 저장되었습니다");
    load();
  }

  async function removeImg(id: number) {
    if (!confirm("이 사진을 삭제할까요?")) return;
    const r = await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, id }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      flash("err", `삭제 실패: ${j.error || ""}`);
      handle401(r.status);
      return;
    }
    flash("ok", "삭제 완료");
    load();
  }

  async function move(section: string, list: Img[], index: number, dir: -1 | 1) {
    const next = index + dir;
    if (next < 0 || next >= list.length) return;
    const ids = list.map((i) => i.id);
    [ids[index], ids[next]] = [ids[next], ids[index]];
    setImages((prev) => {
      const others = prev.filter((p) => p.section !== section);
      const reordered = ids.map((id, i) => ({ ...list.find((l) => l.id === id)!, sort: i }));
      return [...others, ...reordered];
    });
    const r = await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, section, order: ids }),
    });
    if (!r.ok) {
      flash("err", "순서 변경 실패");
      handle401(r.status);
      load();
    }
  }

  /* ---------- 문의 ---------- */
  async function toggleHandled(q: Inquiry) {
    const r = await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, id: q.id, handled: !q.handled }),
    });
    if (!r.ok) {
      flash("err", "처리 상태 변경 실패");
      handle401(r.status);
      return;
    }
    setInquiries((prev) => prev.map((x) => (x.id === q.id ? { ...x, handled: !x.handled } : x)));
  }

  async function removeInquiry(id: number) {
    if (!confirm("이 문의를 삭제할까요? (첨부파일도 함께 삭제됩니다)")) return;
    const r = await fetch("/api/admin/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, id }),
    });
    if (!r.ok) {
      flash("err", "삭제 실패");
      handle401(r.status);
      return;
    }
    flash("ok", "삭제 완료");
    load();
  }

  const newCount = inquiries.filter((q) => !q.handled).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-ink">경우정밀 관리자</span>
          <div className="flex items-center gap-3">
            <a href="/products" target="_blank" className="text-[13.5px] text-brand font-semibold hover:underline">사이트 보기 ↗</a>
            <button onClick={onLogout} className="text-[13.5px] text-ink-muted hover:text-ink">로그아웃</button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-1">
          <TabBtn active={tab === "images"} onClick={() => setTab("images")}>제품 사진</TabBtn>
          <TabBtn active={tab === "inquiries"} onClick={() => setTab("inquiries")}>
            문의 내역{newCount > 0 && <span className="ml-1.5 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[11px] font-bold rounded-full bg-red-600 text-white px-1">{newCount}</span>}
          </TabBtn>
        </div>
      </header>

      {msg && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4">
          <div className={`text-[13.5px] rounded-lg px-4 py-2.5 ${msg.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {msg.text}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {loading && <p className="text-ink-muted text-[14px]">불러오는 중…</p>}

        {/* ====== 제품 사진 ====== */}
        {!loading && tab === "images" &&
          PRODUCT_SECTIONS.map((sec) => {
            const list = images.filter((i) => i.section === sec.id).sort((a, b) => a.sort - b.sort);
            const isGallery = sec.id === "gallery";
            return (
              <section key={sec.id} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
                <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
                  <h2 className="text-[17px] font-bold text-ink">
                    {sec.title} <span className="text-ink-muted font-normal">({list.length}장)</span>
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    <input
                      type="text"
                      value={titleInput[sec.id] || ""}
                      onChange={(e) => setTitleInput((p) => ({ ...p, [sec.id]: e.target.value }))}
                      placeholder={isGallery ? "사진 제목 (호버 시 표시)" : "사진 제목 (선택)"}
                      className="w-44 sm:w-52 border border-slate-300 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-brand"
                    />
                    <label className="inline-flex items-center gap-2 cursor-pointer bg-brand text-white text-[13.5px] font-semibold rounded-lg px-3.5 py-2 hover:opacity-90">
                      + 사진 추가
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.length) upload(sec.id, e.target.files);
                          e.target.value = "";
                        }}
                      />
                    </label>
                  </div>
                </div>
                <p className="mt-1.5 text-[12px] text-ink-muted">
                  {isGallery
                    ? "제품 갤러리 사진입니다. 제품정보 페이지에는 12장까지 보이고, ‘전체 보기’에서 모두 노출됩니다. 제목은 마우스 호버 시 표시됩니다."
                    : "제품 상세에 들어가는 사진입니다. 등록된 순서대로 화살표로 넘기며 보입니다."}
                </p>

                {list.length === 0 ? (
                  <p className="mt-4 text-[13.5px] text-ink-muted">등록된 사진이 없습니다.</p>
                ) : (
                  <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {list.map((img, idx) => (
                      <li key={img.id} className="relative group border border-slate-200 rounded-lg overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt="" className="w-full aspect-square object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100">
                          <button onClick={() => move(sec.id, list, idx, -1)} disabled={idx === 0} title="앞으로" className="w-8 h-8 rounded-full bg-white text-ink text-[14px] font-bold disabled:opacity-30">‹</button>
                          <button onClick={() => move(sec.id, list, idx, 1)} disabled={idx === list.length - 1} title="뒤로" className="w-8 h-8 rounded-full bg-white text-ink text-[14px] font-bold disabled:opacity-30">›</button>
                          <button onClick={() => editTitle(img)} title="제목 수정" className="w-8 h-8 rounded-full bg-white text-ink text-[13px] font-bold">T</button>
                          <button onClick={() => removeImg(img.id)} title="삭제" className="w-8 h-8 rounded-full bg-red-600 text-white text-[14px] font-bold">×</button>
                        </div>
                        <span className="absolute top-1.5 left-1.5 text-[11px] bg-black/55 text-white rounded px-1.5 py-0.5 tabular-nums">{idx + 1}</span>
                        {img.title && (
                          <span className="absolute inset-x-0 bottom-0 px-2 py-1.5 text-[11.5px] font-medium text-white bg-gradient-to-t from-black/75 to-transparent line-clamp-2 leading-snug">
                            {img.title}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

        {/* ====== 문의 내역 ====== */}
        {!loading && tab === "inquiries" && (
          <section className="space-y-3">
            {inquiries.length === 0 && <p className="text-[14px] text-ink-muted">접수된 문의가 없습니다.</p>}
            {inquiries.map((q) => (
              <article key={q.id} className={`bg-white border rounded-xl p-5 ${q.handled ? "border-slate-200 opacity-70" : "border-brand/40 ring-1 ring-brand/10"}`}>
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-ink text-[15px]">{q.name}</span>
                      {q.company && <span className="text-[13px] text-ink-muted">· {q.company}</span>}
                      {q.category && <span className="text-[11px] font-semibold text-brand bg-brand/10 rounded px-1.5 py-0.5">{q.category}</span>}
                      {!q.handled && <span className="text-[11px] font-bold text-white bg-red-600 rounded px-1.5 py-0.5">미처리</span>}
                    </div>
                    <div className="mt-1 text-[13px] text-ink-soft">
                      <a href={`tel:${q.phone}`} className="font-semibold text-ink hover:underline">{q.phone}</a>
                      {q.email && <> · <a href={`mailto:${q.email}`} className="hover:underline">{q.email}</a></>}
                      <span className="ml-2 text-ink-muted">{new Date(q.created_at).toLocaleString("ko-KR")}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleHandled(q)} className={`text-[12.5px] font-semibold rounded-lg px-3 py-1.5 ${q.handled ? "bg-slate-100 text-ink-soft hover:bg-slate-200" : "bg-brand text-white hover:opacity-90"}`}>
                      {q.handled ? "미처리로" : "처리 완료"}
                    </button>
                    <button onClick={() => removeInquiry(q.id)} className="text-[12.5px] text-red-600 hover:underline">삭제</button>
                  </div>
                </div>
                {q.subject && <div className="mt-3 text-[14px] font-semibold text-ink">{q.subject}</div>}
                <p className="mt-1.5 text-[14px] text-ink-soft whitespace-pre-wrap leading-relaxed">{q.message}</p>
                {q.file_url && (
                  <a href={q.file_url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-brand bg-brand/10 rounded-lg px-3 py-2 hover:bg-brand/20">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                    첨부파일: {q.file_name || "다운로드"}
                  </a>
                )}
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-[14px] font-semibold border-b-2 -mb-px transition-colors ${active ? "border-brand text-brand" : "border-transparent text-ink-muted hover:text-ink"}`}
    >
      {children}
    </button>
  );
}
