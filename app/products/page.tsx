import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PRODUCT_CATEGORIES } from "@/lib/site";

export const metadata = {
  title: "제품 정보 | 경우정밀",
  description: "자동차 지그 표준품, 샤프트, 다웰핀, MCT 형상 가공품, 제관물 등 경우정밀의 정밀가공 제품을 소개합니다.",
};

const GALLERY = [
  "/products/gallery-1.jpg", "/products/gallery-2.jpg", "/products/gallery-3.jpg",
  "/products/gallery-4.jpg", "/products/gallery-5.jpg", "/products/gallery-6.jpg",
  "/products/gallery-7.jpg", "/products/gallery-8.jpg", "/products/gallery-9.jpg",
  "/products/gallery-10.jpg", "/products/gallery-11.jpg", "/products/gallery-12.jpg",
  "/products/gallery-13.jpg", "/products/gallery-14.jpg", "/products/gallery-17.jpg",
  "/products/gallery-18.jpg",
];

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="제품 정보"
        desc="30년 정밀가공 노하우로 완성한 다양한 산업용 부품과 자동차 지그 표준품을 소개합니다."
        bg="/products/gallery-7.jpg"
        breadcrumbs={[{ label: "제품정보" }]}
      />

      {/* Quick category bar */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-20">
        <div className="container-x">
          <ul className="flex overflow-x-auto -mx-1">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c.id} className="px-1">
                <a
                  href={`#${c.id}`}
                  className="block px-4 sm:px-6 py-4 text-sm sm:text-base font-semibold whitespace-nowrap text-ink-muted hover:text-brand transition"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {PRODUCT_CATEGORIES.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className={`section scroll-mt-[136px] ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <span className="h-eyebrow">CATEGORY 0{idx + 1}</span>
                <h2 className="h-title">{p.title}</h2>
                <p className="h-sub">{p.desc}</p>
                <ul className="mt-7 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      <span className="text-ink">{it}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8 btn-primary">
                  이 제품 견적 문의 →
                </Link>
              </div>

              <div className="md:col-span-7 grid grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={p.images[0]} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={p.images[1]} alt={p.title} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={p.images[2]} alt={p.title} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-slate-100">
        <div className="container-x">
          <span className="h-eyebrow">Gallery</span>
          <h2 className="h-title">제품 갤러리</h2>
          <p className="h-sub">실제 가공·공급된 제품 사진입니다.</p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <div key={src} className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                <Image
                  src={src}
                  alt={`제품 사진 ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
