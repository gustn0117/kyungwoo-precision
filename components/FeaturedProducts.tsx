import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/site";

export default function FeaturedProducts() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="h-eyebrow">Featured Products</span>
            <h2 className="h-title">
              차원이 다른 기술력으로 완성한
              <br />
              <span className="text-brand">경우정밀의 대표 제품</span>
            </h2>
          </div>
          <Link href="/products" className="btn-outline self-start lg:self-auto">
            전체 제품 보러가기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {PRODUCT_CATEGORIES.slice(0, 4).map((p, i) => (
            <Link
              key={p.id}
              href={`/products#${p.id}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-slate-900"
            >
              <Image
                src={p.images[0]}
                alt={p.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[11px] tracking-[0.2em] text-white/70 font-semibold">
                  0{i + 1} / PRODUCT
                </div>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold">{p.title}</h3>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:gap-3 transition-all">
                  자세히 보기
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
