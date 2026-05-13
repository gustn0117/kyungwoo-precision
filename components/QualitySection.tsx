import Image from "next/image";
import Link from "next/link";

export default function QualitySection() {
  return (
    <section className="section bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/process/measuring-room.png"
              alt="ZEISS 3차원 측정실"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <span className="section-label">품질 관리</span>
          <h2 className="section-title">
            ZEISS 3차원 측정으로<br />
            <span className="text-brand">데이터 기반 품질관리</span>
          </h2>
          <p className="section-desc">
            스위스 ZEISS사의 CONTURA G2 + CALYPSO 자동 3차원 측정기를 보유하여
            가공 후 정밀 측정·오차 보정뿐 아니라 열처리·연마 등 후공정에서의
            치수 변화량까지 정량적으로 관리합니다.
          </p>

          <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {[
              ["3차원 측정장비", "ZEISS CONTURA G2 + CALYPSO"],
              ["수동 3차원 측정기", "STARRETT"],
              ["형상측정기 (CV-3200)", "MITUTOYO"],
              ["정밀 측정공구", "마이크로미터·캘리퍼·실린더 게이지"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between gap-4 py-3.5 text-[14px]">
                <span className="text-ink-muted">{k}</span>
                <span className="font-semibold text-ink text-right">{v}</span>
              </li>
            ))}
          </ul>

          <Link href="/equipment#measuring" className="mt-9 btn-outline">
            측정기 현황 보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
