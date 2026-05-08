"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      {/* 상단 유틸 바 (PC) */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200">
        <div className="container-x flex h-9 items-center justify-end gap-5 text-[12px] text-ink-muted">
          <span>대표 {SITE.contact.phone}</span>
          <span className="h-3 w-px bg-slate-300" />
          <span>FAX {SITE.contact.fax}</span>
          <span className="h-3 w-px bg-slate-300" />
          <a href={`mailto:${SITE.contact.email}`} className="hover:text-brand">
            {SITE.contact.email}
          </a>
        </div>
      </div>

      <div className="container-x flex h-[68px] lg:h-[72px] items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-ink leading-none">
            경우정밀
          </span>
          <span className="hidden sm:inline-block text-[10.5px] tracking-[0.16em] font-semibold text-brand leading-none">
            KYUNGWOO PRECISION
          </span>
        </Link>

        <nav className="hidden lg:flex items-center">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="block px-5 py-6 text-[15px] font-semibold text-ink hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto">
                <div className="min-w-[208px] bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,58,130,0.08)] py-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-5 py-2.5 text-[13px] text-ink-soft hover:bg-slate-50 hover:text-brand transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-[13.5px] py-3 px-5">
            견적 문의
          </Link>
        </div>

        <button
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 -mr-2 text-ink"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container-x py-2 max-h-[calc(100vh-68px)] overflow-auto">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-slate-100 py-3.5">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-bold text-[15px] text-ink"
                >
                  {item.label}
                </Link>
                <div className="mt-2 grid grid-cols-2 gap-y-1.5">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-[13px] text-ink-muted hover:text-brand"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-4 mb-2 grid grid-cols-2 gap-2">
              <a href={`tel:${SITE.contact.phone}`} className="btn-outline w-full">전화 상담</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">견적 문의</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
