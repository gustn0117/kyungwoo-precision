import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PRODUCT_CATEGORIES } from "@/lib/site";
import { getProductImagesBySection } from "@/lib/productImages";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "제품 정보 | 경우정밀",
  description: "자동차 용접 지그 표준품, 샤프트, 다웰핀, MCT 형상 가공품, 제관물, 정밀 기계 부품 등 경우정밀의 정밀가공 제품을 소개합니다.",
};

/* DB 미연결 시 사용할 정적 fallback */
const GALLERY_FALLBACK = [
  "/products/gallery-1.jpg", "/products/gallery-2.jpg", "/products/gallery-3.jpg",
  "/products/gallery-4.jpg", "/products/gallery-5.jpg", "/products/gallery-6.jpg",
  "/products/gallery-13.jpg", "/products/gallery-14.jpg", "/products/gallery-17.jpg",
  "/products/gallery-18.jpg", "/products/gallery-26.jpg", "/products/product-1.jpg",
];

export default async function Products() {
  const bySection = await getProductImagesBySection();

  const imagesFor = (id: string, fallback: readonly string[]) => {
    const rows = bySection[id];
    return rows && rows.length ? rows.map((r) => r.url) : [...fallback];
  };
  const gallery = imagesFor("gallery", GALLERY_FALLBACK);

  return (
    <>
      <PageHeader
        eyebrow="제품정보"
        title="제품 정보"
        desc="33년 정밀가공 노하우로 완성한 산업용 부품과 자동차 용접 지그 표준품을 소개합니다."
        bg="/products/gallery-7.jpg"
        breadcrumbs={[{ label: "제품정보" }]}
      />

      {/* Quick category bar */}
      <section className="bg-white border-b border-slate-200 sticky top-[68px] lg:top-[108px] z-20">
        <div className="container-x">
          <ul className="flex overflow-x-auto -mx-1">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c.id} className="px-1">
                <a
                  href={`#${c.id}`}
                  className="block px-4 sm:px-5 py-4 text-[13.5px] sm:text-[14.5px] font-semibold whitespace-nowrap text-ink-muted hover:text-brand transition-colors"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {PRODUCT_CATEGORIES.map((p, idx) => {
        const imgs = imagesFor(p.id, p.images);
        return (
          <section
            key={p.id}
            id={p.id}
            className={`section scroll-mt-[120px] lg:scroll-mt-[164px] ${idx % 2 === 0 ? "bg-white" : "bg-slate-50 border-y border-slate-200"}`}
          >
            <div className="container-x">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  <div className="text-[12px] font-bold tabular-nums text-brand tracking-[0.02em]">
                    {String(idx + 1).padStart(2, "0")} / {String(PRODUCT_CATEGORIES.length).padStart(2, "0")}
                  </div>
                  <h2 className="mt-3 text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-ink leading-[1.3]">
                    {p.title}
                  </h2>
                  <p className="mt-5 text-[15px] text-ink-soft leading-[1.8]">{p.desc}</p>
                  <ul className="mt-7 border-t border-slate-200">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 py-3 text-[14.5px] border-b border-slate-200">
                        <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
                        <span className="text-ink">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-8 btn-primary">
                    이 제품 견적 문의
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  {imgs.length === 0 ? null : imgs.length === 1 ? (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={imgs[0]} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {imgs.map((src, i) => (
                        <div
                          key={`${src}-${i}`}
                          className={`relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
                        >
                          <Image
                            src={src}
                            alt={`${p.title} ${i + 1}`}
                            fill
                            sizes={i === 0 ? "(max-width: 1024px) 66vw, 34vw" : "(max-width: 1024px) 33vw, 17vw"}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section bg-[#0b1322] text-white">
        <div className="container-x">
          <span className="section-label !text-brand-300 before:!bg-brand-300">제품 갤러리</span>
          <h2 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-0.02em] text-white">실제 가공·공급 사례</h2>
          <p className="mt-5 text-[15px] text-white/75 leading-[1.75] max-w-2xl">
            경우정밀에서 실제로 가공·공급한 제품 사진입니다.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {gallery.map((src, i) => (
              <div key={`${src}-${i}`} className="relative aspect-square overflow-hidden bg-white/5 group">
                <Image
                  src={src}
                  alt={`제품 사진 ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
