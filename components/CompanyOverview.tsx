import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CompanyOverview() {
  return (
    <section className="section bg-white">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/factory/exterior.jpg"
              alt="경우정밀 시화공장 전경"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 sm:-right-10 w-48 sm:w-60 aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-2xl hidden sm:block">
            <Image
              src="/factory/material-stock.jpg"
              alt="소재 재고"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>

          <div className="absolute -top-6 -left-4 sm:-left-10 bg-brand text-white p-6 rounded-2xl shadow-xl hidden sm:block">
            <div className="text-4xl sm:text-5xl font-black leading-none">30+</div>
            <div className="mt-1 text-xs tracking-[0.18em] font-semibold opacity-90">
              YEARS OF<br />PRECISION
            </div>
          </div>
        </div>

        <div>
          <span className="h-eyebrow">About KYUNGWOO PRECISION</span>
          <h2 className="h-title">
            품질, 납기, 합리적 가격<br />
            <span className="text-brand">절대 준수의 30년</span>
          </h2>
          <p className="h-sub">
            경우정밀은 1993년 설립 이래 CNC·머시닝·수동 선반·밀링을 활용해
            차체 지그·검사구·산업용 기계 부품을 가공·제작해 온 정밀가공 전문기업입니다.
            소재 절단부터 열처리·연마까지 제품을 완가공하는 종합 가공업체로서,
            제품의 품질과 납기를 절대 준수하며, 합리적인 가격으로 제품을 공급합니다.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <Item k="회사명" v={`${SITE.name} (${SITE.nameEn})`} />
            <Item k="대표자" v={SITE.ceo} />
            <Item k="설립일자" v={SITE.founded} />
            <Item k="직원수" v={`총 ${SITE.employees}명`} />
            <Item k="설비수" v={`총 ${SITE.equipmentCount}대`} />
            <Item k="업종" v={SITE.business} colSpan />
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about/overview" className="btn-primary">
              회사 소개 더보기
            </Link>
            <Link href="/about/location" className="btn-outline">
              오시는 길
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ k, v, colSpan = false }: { k: string; v: string; colSpan?: boolean }) {
  return (
    <div className={`border-l-2 border-brand pl-3 ${colSpan ? "col-span-2" : ""}`}>
      <dt className="text-xs text-ink-muted">{k}</dt>
      <dd className="mt-0.5 font-semibold text-ink">{v}</dd>
    </div>
  );
}
