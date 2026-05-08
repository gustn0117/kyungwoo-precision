"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-5 bottom-5 z-30 flex flex-col gap-2 items-end">
      <div className="rounded-2xl bg-white shadow-lg border border-slate-200 overflow-hidden w-[72px]">
        <Link
          href="/contact#inquiry"
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-slate-50 border-b border-slate-100"
          aria-label="견적 문의"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span className="text-[11px] font-semibold text-ink">견적문의</span>
        </Link>

        <a
          href={`tel:${SITE.contact.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-slate-50 border-b border-slate-100"
          aria-label="전화 상담"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-emerald-500 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className="text-[11px] font-semibold text-ink">전화상담</span>
        </a>

        <a
          href={SITE.contact.kakaoUrl}
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-slate-50 bg-yellow-300/20"
          aria-label="카톡 상담"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-[#FEE500] text-[#3C1E1E] font-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.582 2 11c0 2.83 1.86 5.31 4.66 6.74-.21.78-.77 2.83-.88 3.27-.14.55.2.55.43.4.18-.13 2.86-1.95 4.02-2.74.58.08 1.17.13 1.77.13 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
            </svg>
          </span>
          <span className="text-[11px] font-bold text-ink">카톡상담</span>
        </a>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="맨 위로"
          className="grid place-items-center w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg hover:bg-black"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
