"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/equipment/cnc-lathe-2.jpg", alt: "CNC 정밀 가공" },
  { src: "/equipment/mct-3.jpg", alt: "MCT 머시닝 가공" },
  { src: "/factory/horizontal-mct.jpg", alt: "호리젠탈 머시닝 센터" },
  { src: "/equipment/grinder-flat.jpg", alt: "평면 연마" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-[calc(100svh-68px)] lg:h-[calc(100svh-108px)] min-h-[560px] max-h-[820px] overflow-hidden text-white">
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
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

      {/* 어두운 그라디언트 — 좌측 카피의 가독성을 위해 좌하단 강한 톤 */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/55" />

      <div className="relative z-10 h-full container-x flex flex-col justify-end pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl animate-fadeUp">
          <div className="flex items-center gap-3 text-white/70 text-[12px] tracking-[0.18em] font-semibold">
            <span className="h-px w-10 bg-white/60" />
            SINCE 1993
          </div>
          <h1 className="mt-6 text-[34px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em]">
            정밀가공 기술의 기준,
            <br className="hidden sm:block" />
            <span className="font-extrabold">경우정밀</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-[17px] text-white/85 leading-[1.8] max-w-xl font-medium">
            CNC·머시닝부터 열처리·연마·3차원 측정까지,
            <br className="hidden sm:block" />
            모든 정밀가공 공정을 한 곳에서 책임집니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              견적 문의하기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/products" className="btn border border-white/40 text-white hover:bg-white hover:text-ink">
              제품 살펴보기
            </Link>
          </div>
        </div>
      </div>

      {/* 하단 우측 미니 인디케이터 */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex items-center gap-3 text-white/80">
        <span className="text-[12px] font-semibold tabular-nums tracking-wider">
          {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`슬라이드 ${i + 1}`}
              className={`h-[2px] transition-all ${
                i === idx ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
