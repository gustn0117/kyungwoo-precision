"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CarouselImage = { url: string; title?: string | null };

export default function ProductImageCarousel({
  images,
  alt,
}: {
  images: CarouselImage[];
  alt: string;
}) {
  const [i, setI] = useState(0);
  const n = images.length;

  useEffect(() => {
    if (i > n - 1) setI(0);
  }, [n, i]);

  if (n === 0) return null;
  const go = (dir: -1 | 1) => setI((p) => (p + dir + n) % n);
  const current = images[Math.min(i, n - 1)];

  return (
    <div className="select-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {images.map((img, idx) => (
          <Image
            key={`${img.url}-${idx}`}
            src={img.url}
            alt={img.title || `${alt} ${idx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-300 ${idx === i ? "opacity-100" : "opacity-0"}`}
            priority={idx === 0}
          />
        ))}

        {/* 현재 사진 제목 */}
        {current?.title && (
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none">
            <span className="text-white text-[14px] sm:text-[15px] font-semibold leading-snug drop-shadow">
              {current.title}
            </span>
          </div>
        )}

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 사진"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/85 hover:bg-white text-ink shadow-sm transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 사진"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/85 hover:bg-white text-ink shadow-sm transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div className="absolute right-3 top-3 bg-black/55 text-white text-[11px] font-medium tabular-nums px-2 py-0.5 rounded">
              {i + 1} / {n}
            </div>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`${idx + 1}번 사진 보기`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
