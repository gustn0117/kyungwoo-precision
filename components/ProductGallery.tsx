"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryItem = { url: string; title?: string | null };

export default function ProductGallery({
  items,
  dark = false,
}: {
  items: GalleryItem[];
  /** 어두운 배경(메인 제품 갤러리) 위에서 쓸 때 true */
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: -1 | 1) =>
      setOpen((i) => (i === null ? null : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {items.map((it, i) => (
          <button
            key={`${it.url}-${i}`}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative aspect-square overflow-hidden ${dark ? "bg-white/5" : "bg-slate-100"}`}
            aria-label={it.title || `사진 ${i + 1} 크게 보기`}
          >
            <Image
              src={it.url}
              alt={it.title || `제품 사진 ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
            />
            {/* 호버 오버레이 */}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 p-2.5 sm:p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-left">
              {it.title ? (
                <span className="block text-[12.5px] sm:text-[13px] font-semibold text-white leading-snug line-clamp-2">
                  {it.title}
                </span>
              ) : null}
              <span className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-medium text-white/70">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
                </svg>
                원본 보기
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && items[open] && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white"
            aria-label="닫기"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="이전"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="다음"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <figure className="max-w-[92vw] max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* 원본 이미지 — 비율 그대로 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[open].url}
              alt={items[open].title || "제품 사진"}
              className="max-w-[92vw] max-h-[80vh] object-contain"
            />
            <figcaption className="mt-3 text-center text-[13px] text-white/85">
              {items[open].title ? <span className="font-semibold">{items[open].title}</span> : null}
              <span className="ml-2 text-white/55">{open + 1} / {items.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
