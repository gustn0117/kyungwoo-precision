import Image from "next/image";
import Link from "next/link";

export default function QualitySection() {
  return (
    <section className="section bg-white">
      <div className="container-x grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
        <div className="md:col-span-3 grid grid-cols-6 gap-3">
          <div className="col-span-4 row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/equipment/horizontal-lathe-1.jpg"
              alt="ZEISS 3차원 측정기 환경"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/process/grinding-1.jpg"
              alt="정밀 연마"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/equipment/mct-4.jpg"
              alt="MCT 가공"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <span className="h-eyebrow">Quality Assurance</span>
          <h2 className="h-title">
            ZEISS 3차원 측정으로<br />
            <span className="text-brand">데이터 기반 품질관리</span>
          </h2>
          <p className="h-sub">
            스위스 ZEISS사의 CONTURA G2 + CALYPSO 자동 3차원 측정기를 보유하여,
            제품 가공 후 정밀 측정을 통해 가공 오차를 보정하고, 열처리·연마 등
            후처리 과정에서의 수치 변화량까지 측정·관리합니다.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "ZEISS CONTURA G2 자동 3차원 측정기",
              "수동 3차원 측정기 (STARRETT)",
              "조도·형상 측정기 (MITUTOYO)",
              "마이크로미터·캘리퍼·실린더 게이지 일체 보유",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <Link href="/equipment#measuring" className="mt-8 btn-outline">
            측정기 보유 현황 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
