import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CompanyOverview() {
  return (
    <section className="section bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/factory/exterior.jpg"
              alt="경우정밀 시화공장 전경"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/factory/material-stock.jpg"
                alt="소재 재고"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/factory/horizontal-mct.jpg"
                alt="호리젠탈 MCT"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-2">
          <span className="section-label">회사소개</span>
          <h2 className="section-title">
            품질·납기·합리적인 가격,<br />
            <span className="text-brand">절대 준수의 33년</span>
          </h2>
          <p className="section-desc">
            경우정밀은 1993년 설립 이래 CNC·머시닝·범용 선반·밀링을 활용해
            차체 지그·검사구·산업용 기계 부품을 가공·제작해 온 정밀가공 전문기업입니다.
            소재 절단부터 열처리·연마까지 제품을 완가공하는 종합 가공업체로서,
            제품의 품질과 납기를 절대 준수하고 합리적인 가격으로 공급합니다.
          </p>

          <dl className="mt-10">
            <Row k="회사명" v={`${SITE.name} (${SITE.nameEn})`} />
            <Row k="대표자" v={SITE.ceo} />
            <Row k="설립일자" v={SITE.founded} />
            <Row k="임직원" v={`총 ${SITE.employees}명`} />
            <Row k="보유설비" v={`총 ${SITE.equipmentCount}대 (${SITE.equipmentBreakdown})`} />
            <Row k="주요사업" v={SITE.business} />
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about/overview" className="btn-primary">회사 개요</Link>
            <Link href="/about/history" className="btn-outline">연혁 보기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="info-row">
      <dt>{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
