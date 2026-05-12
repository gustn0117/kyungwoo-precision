"use client";

import { useCallback, useEffect, useState } from "react";
import { PRODUCT_SECTIONS } from "@/lib/productSections";

type Img = { id: number; section: string; url: string; storage_path: string | null; sort: number };

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
        <form
          onSubmit={doLogin}
          className="w-full max-w-sm bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
        >
          <h1 className="text-[20px] font-bold text-ink">경우정밀 관리자</h1>
          <p className="mt-2 text-[13.5px] text-ink-muted">제품 사진 관리 페이지</p>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            placeholder="비밀번호"
            autoFocus
            className="mt-6 w-full border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-brand"
          />
          {loginErr && <p className="mt-2 text-[13px] text-red-600">{loginErr}</p>}
          <button
            type="submit"
            disabled={busy}
            className="mt-4 w-full bg-brand text-white rounded-lg py-3 text-[15px] font-semibold disabled:opacity-60"
          >
            {busy ? "확인 중…" : "로그인"}
          </button>
        </form>
      </main>
    );
  }

  return <AdminDashboard pw={pw} onLogout={logout} />;
}

function AdminDashboard({ pw, onLogout }: { pw: string; onLogout: () => void }) {
  const [images, setImages] = useState<Img[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const flash = (type: "ok" | "err", text: string) => {
    setMsg({ type, text });
    setTimeout(() => setMsg(null), 3500);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/admin/products", { cache: "no-store" });
      const j = await r.json();
      setImages(j.images ?? []);
    } catch {
      flash("err", "목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function upload(section: string, files: FileList) {
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("password", pw);
      fd.append("section", section);
      fd.append("file", file);
      const r = await fetch("/api/admin/products", { method: "POST", body: fd });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        flash("err", `업로드 실패: ${j.error || file.name}`);
        if (r.status === 401) {
          onLogout();
          return;
        }
        continue;
      }
    }
    flash("ok", "업로드 완료");
    load();
  }

  async function remove(id: number) {
    if (!confirm("이 사진을 삭제할까요?")) return;
    const r = await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, id }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      flash("err", `삭제 실패: ${j.error || ""}`);
      if (r.status === 401) onLogout();
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
    // 낙관적 반영
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
      if (r.status === 401) onLogout();
      load();
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div>
            <span className="font-bold text-ink">경우정밀 관리자</span>
            <span className="ml-2 text-[13px] text-ink-muted">제품 사진 관리</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/products" target="_blank" className="text-[13.5px] text-brand font-semibold hover:underline">
              제품정보 페이지 보기 ↗
            </a>
            <button onClick={onLogout} className="text-[13.5px] text-ink-muted hover:text-ink">
              로그아웃
            </button>
          </div>
        </div>
      </header>

      {msg && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4">
          <div
            className={`text-[13.5px] rounded-lg px-4 py-2.5 ${
              msg.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            {msg.text}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {loading && <p className="text-ink-muted text-[14px]">불러오는 중…</p>}
        {!loading &&
          PRODUCT_SECTIONS.map((sec) => {
            const list = images
              .filter((i) => i.section === sec.id)
              .sort((a, b) => a.sort - b.sort);
            return (
              <section key={sec.id} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h2 className="text-[17px] font-bold text-ink">
                    {sec.title} <span className="text-ink-muted font-normal">({list.length}장)</span>
                  </h2>
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

                {list.length === 0 ? (
                  <p className="mt-4 text-[13.5px] text-ink-muted">등록된 사진이 없습니다.</p>
                ) : (
                  <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {list.map((img, idx) => (
                      <li key={img.id} className="relative group border border-slate-200 rounded-lg overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt="" className="w-full aspect-square object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={() => move(sec.id, list, idx, -1)}
                            disabled={idx === 0}
                            title="앞으로"
                            className="w-8 h-8 rounded-full bg-white text-ink text-[14px] font-bold disabled:opacity-30"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() => move(sec.id, list, idx, 1)}
                            disabled={idx === list.length - 1}
                            title="뒤로"
                            className="w-8 h-8 rounded-full bg-white text-ink text-[14px] font-bold disabled:opacity-30"
                          >
                            ›
                          </button>
                          <button
                            onClick={() => remove(img.id)}
                            title="삭제"
                            className="w-8 h-8 rounded-full bg-red-600 text-white text-[14px] font-bold"
                          >
                            ×
                          </button>
                        </div>
                        <span className="absolute top-1.5 left-1.5 text-[11px] bg-black/55 text-white rounded px-1.5 py-0.5 tabular-nums">
                          {idx + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
      </div>
    </main>
  );
}
