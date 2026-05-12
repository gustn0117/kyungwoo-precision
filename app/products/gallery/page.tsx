import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductGallery, { GalleryItem } from "@/components/ProductGallery";
import { getProductImagesBySection } from "@/lib/productImages";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "가공·공급 사례 | 경우정밀",
  description: "경우정밀에서 실제로 가공·공급한 제품 사례 전체를 확인하실 수 있습니다.",
};

const GALLERY_FALLBACK = [
  "/products/gallery-1.jpg", "/products/gallery-2.jpg", "/products/gallery-3.jpg",
  "/products/gallery-4.jpg", "/products/gallery-5.jpg", "/products/gallery-6.jpg",
  "/products/gallery-7.jpg", "/products/gallery-8.jpg", "/products/gallery-9.jpg",
  "/products/gallery-10.jpg", "/products/gallery-11.jpg", "/products/gallery-12.jpg",
  "/products/gallery-13.jpg", "/products/gallery-14.jpg", "/products/gallery-17.jpg",
  "/products/gallery-18.jpg", "/products/gallery-26.jpg", "/products/product-1.jpg",
];

export default async function GalleryPage() {
  const bySection = await getProductImagesBySection();
  const rows = bySection["gallery"];
  const items: GalleryItem[] =
    rows && rows.length
      ? rows.map((r) => ({ url: r.url, title: r.title }))
      : GALLERY_FALLBACK.map((url) => ({ url, title: null }));

  return (
    <>
      <PageHeader
        eyebrow="제품정보"
        title="가공·공급 사례"
        desc="경우정밀에서 실제로 가공·공급한 제품 사례 전체입니다. 사진을 클릭하면 원본을 크게 볼 수 있습니다."
        bg="/products/gallery-7.jpg"
        breadcrumbs={[{ label: "제품정보", href: "/products" }, { label: "가공·공급 사례" }]}
      />

      <section className="section bg-[#0b1322] text-white">
        <div className="container-x">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[13.5px] text-white/70">총 {items.length}건</span>
            <Link href="/products" className="text-[13.5px] font-semibold text-brand-300 hover:text-white transition-colors">
              ← 제품정보로 돌아가기
            </Link>
          </div>
          <div className="mt-8">
            <ProductGallery items={items} dark />
          </div>
        </div>
      </section>
    </>
  );
}
