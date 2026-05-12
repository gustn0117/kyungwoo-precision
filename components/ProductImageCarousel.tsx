"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [i, setI] = useState(0);
  const n = images.length;

  useEffect(() => {
    if (i > n - 1) setI(0);
  }, [n, i]);

  if (n === 0) return null;
  const go = (dir: -1 | 1) => setI((p) => (p + dir + n) % n);

  return (
    <div className="select-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {images.map((src, idx) => (
          <Image
            key={`${src}-${idx}`}
            src={src}
            alt={`${alt} ${idx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-300 ${idx === i ? "opacity-100" : "opacity-0"}`}
            priority={idx === 0}
          />
        ))}

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
            <div className="absolute right-3 bottom-3 bg-black/55 text-white text-[11px] font-medium tabular-nums px-2 py-0.5 rounded">
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
