import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "인사말 | 경우정밀",
};

export default function Greeting() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x grid md:grid-cols-2 gap-14 items-start">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/factory/horizontal-mct.jpg"
            alt="경우정밀 작업 현장"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>

        <div>
          <span className="h-eyebrow">CEO Greeting</span>
          <h2 className="h-title">
            정밀가공의 본질에<br />
            <span className="text-brand">정직과 책임</span>을 더합니다
          </h2>

          <div className="mt-8 space-y-5 text-[15px] leading-[1.9] text-ink-soft">
            <p>
              안녕하십니까. <strong className="text-ink">경우정밀</strong>을 찾아주신
              모든 분들께 진심으로 감사드립니다.
            </p>
            <p>
              저희 경우정밀은 1993년 설립 이래 30년 동안 CNC·머시닝·수동 선반·밀링을 활용해
              차체 용접치구, 검사구, 산업용 기계부품 등을 가공·제작해 온
              <strong className="text-ink"> 정밀가공 외길의 전문기업</strong>입니다.
            </p>
            <p>
              저희는 단순히 도면대로 가공하는 것을 넘어, 소재의 절단부터
              <strong className="text-ink"> 열처리·연마·도금까지 일관된 후처리</strong>를
              사내 또는 20년 이상 협력해온 협력사 네트워크를 통해 책임집니다.
              스위스 ZEISS사의 3차원 측정기를 활용한
              <strong className="text-ink"> 데이터 기반 품질관리</strong>로 모든
              제품이 도면 공차 안에 들도록 검증합니다.
            </p>
            <p>
              <strong className="text-ink">"품질·납기 절대 준수, 합리적인 가격."</strong>
              <br />
              이것은 30년간 한 번도 흔들리지 않은 경우정밀의 약속입니다. 앞으로도 고객의
              가장 가까운 가공 파트너가 되어, 변하지 않는 신뢰로 답하겠습니다.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="text-sm text-ink-muted">경우정밀 대표</div>
            <div className="mt-1 text-2xl font-bold text-ink tracking-tight">
              {SITE.ceo} <span className="text-base font-medium text-ink-muted">드림</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
