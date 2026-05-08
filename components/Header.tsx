"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,.06)]">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-9 w-9 grid place-items-center rounded-md bg-brand transition">
            <span className="text-white font-black text-[15px] tracking-tight">KW</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-[17px] text-ink">
              경우정밀
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold text-brand">
              KYUNGWOO PRECISION
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="px-4 py-2.5 text-[15px] font-semibold rounded-md transition text-ink hover:text-brand"
              >
                {item.label}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="min-w-[200px] bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-slate-50 hover:text-brand"
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
          <a
            href={`tel:${SITE.contact.phone}`}
            className="text-sm font-bold tracking-tight text-ink"
          >
            {SITE.contact.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            견적 문의
          </Link>
        </div>

        <button
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-md text-ink"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="container-x py-4 max-h-[calc(100vh-72px)] overflow-auto">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-slate-100 py-3">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-bold text-ink"
                >
                  {item.label}
                </Link>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-sm text-ink-soft"
                    >
                      └ {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-5 flex gap-2">
              <a href={`tel:${SITE.contact.phone}`} className="btn-outline flex-1">전화 상담</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary flex-1">견적 문의</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
