"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/equipment/cnc-lathe-2.jpg", alt: "CNC 정밀 가공 현장" },
  { src: "/equipment/mct-3.jpg", alt: "MCT 머시닝 가공" },
  { src: "/factory/horizontal-mct.jpg", alt: "호리젠탈 머시닝 센터" },
  { src: "/equipment/grinder-flat.jpg", alt: "평면 연마 작업" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] max-h-[920px] w-full overflow-hidden text-white">
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === idx ? "animate-zoom" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/35 to-slate-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.35)_70%)]" />

      <div className="relative z-10 h-full container-x flex items-end pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl animate-fadeUp">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SINCE 1993 · KYUNGWOO PRECISION
          </div>
          <h1 className="mt-5 text-[36px] sm:text-[52px] lg:text-[64px] font-black leading-[1.08] tracking-tight">
            정밀가공 기술의 기준,
            <br />
            <span className="text-brand-200">경우정밀</span>
          </h1>
          <p className="mt-5 text-[15px] sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl font-medium">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">
              견적 문의하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="btn border border-white/30 text-white hover:bg-white hover:text-ink text-base"
            >
              제품 둘러보기
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl">
            <Stat num="30+" label="년의 정밀가공 노하우" />
            <Stat num="27" label="대의 가공·측정 설비" />
            <Stat num="ZEISS" label="3차원 측정 기반 품질관리" />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/70">
        <span className="text-[11px] tracking-[0.28em]">SCROLL</span>
        <span className="block h-8 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">{num}</div>
      <div className="mt-1 text-xs sm:text-sm text-white/70 leading-snug">{label}</div>
    </div>
  );
}
