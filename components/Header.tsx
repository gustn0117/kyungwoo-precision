"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,.06)]"
          : "bg-white/0 text-white"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className={`relative h-9 w-9 grid place-items-center rounded-md ${solid ? "bg-brand" : "bg-white/15 backdrop-blur"} transition`}>
            <span className="text-white font-black text-[15px] tracking-tight">KW</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`font-bold text-base sm:text-[17px] ${solid ? "text-ink" : "text-white"}`}>
              경우정밀
            </span>
            <span className={`text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold ${solid ? "text-brand" : "text-white/80"}`}>
              KYUNGWOO PRECISION
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`px-4 py-2.5 text-[15px] font-semibold rounded-md transition ${
                  solid ? "text-ink hover:text-brand" : "text-white hover:text-white"
                }`}
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
            className={`text-sm font-bold tracking-tight ${solid ? "text-ink" : "text-white"}`}
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
          className={`lg:hidden grid place-items-center w-10 h-10 rounded-md ${
            solid ? "text-ink" : "text-white"
          }`}
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
