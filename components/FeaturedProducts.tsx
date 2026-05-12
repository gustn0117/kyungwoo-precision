import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/site";

export default function FeaturedProducts({ images }: { images?: Record<string, string[]> }) {
  return (
    <section className="section bg-slate-50 border-y border-slate-200">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="section-label">주요 제품</span>
            <h2 className="section-title">
              30년의 정밀가공 노하우로 완성한<br />
              <span className="text-brand">경우정밀의 대표 제품</span>
            </h2>
          </div>
          <Link href="/products" className="btn-ghost self-start lg:self-auto -mx-3 lg:mx-0 group">
            전체 제품 보러가기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {PRODUCT_CATEGORIES.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/products#${p.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-slate-900"
            >
              <Image
                src={images?.[p.id]?.[0] ?? p.images[0]}
                alt={p.title}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <h3 className="text-[16px] sm:text-[18px] font-bold leading-snug tracking-[-0.01em]">
                  {p.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/75 group-hover:text-white group-hover:gap-2.5 transition-all">
                  자세히 보기
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
