import Image from "next/image";
import { SITE, ORG_CHART, CORE_BUSINESS } from "@/lib/site";

export const metadata = {
  title: "회사개요 | 경우정밀",
};

export default function Overview() {
  return (
    <>
      {/* 회사 일반현황 */}
      <section className="section bg-white">
        <div className="container-x">
          <span className="section-label">회사개요</span>
          <h2 className="section-title">회사 일반현황</h2>

          <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7">
              <dl className="border-t border-slate-200">
                <Row k="회사명" v={SITE.name} />
                <Row k="영문명" v={SITE.nameEn} />
                <Row k="대표자" v={SITE.ceo} />
                <Row k="설립일자" v={SITE.founded} />
                <Row k="직원수" v={`총 ${SITE.employees}명`} />
                <Row k="설비수" v={`총 ${SITE.equipmentCount}대 (${SITE.equipmentBreakdown})`} />
                <Row k="업종" v={SITE.business} />
                <Row k="주소" v={SITE.address.full} />
                <Row k="전화 / FAX" v={`${SITE.contact.phone} / ${SITE.contact.fax}`} />
                <Row k="이메일" v={SITE.contact.email} last />
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full bg-[#0b1322] text-white p-8">
                <h3 className="text-[17px] font-bold">핵심 사업 영역</h3>
                <ul className="mt-6 divide-y divide-white/10 border-t border-white/15">
                  {CORE_BUSINESS.map((t) => (
                    <li key={t} className="flex items-center gap-3 py-3 text-[14px] text-white/85">
                      <span className="inline-block h-1 w-1 rounded-full bg-brand-300 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 조직도 */}
      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="container-x">
          <span className="section-label">조직</span>
          <h2 className="section-title">조직도</h2>
          <p className="section-desc">
            대표이사 직속 부설연구소를 중심으로 가공·후처리·검사 전 공정을 부서별 전문 인력이 담당합니다.
          </p>

          <div className="mt-12 flex flex-col items-center">
            <div className="bg-brand text-white px-8 py-3.5 text-[15px] font-bold">
              경우정밀 대표이사
            </div>
            <div className="h-8 w-px bg-slate-300" />
            <div className="border border-slate-300 bg-white text-ink-soft px-6 py-2.5 text-[13.5px] font-semibold">
              부설연구소
            </div>
            <div className="h-8 w-px bg-slate-300" />
          </div>

          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
            {ORG_CHART.map((d) => (
              <div key={d.dept} className="bg-white p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-bold text-ink text-[14.5px]">{d.dept}</h4>
                  <span className="text-[12px] font-bold tabular-nums text-brand">{d.count}명</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-[12px] text-ink-muted leading-relaxed">
                  {d.tasks.map((t) => (
                    <li key={t} className="flex gap-1.5">
                      <span className="text-slate-400">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 우리의 강점 */}
      <section className="section bg-white">
        <div className="container-x">
          <span className="section-label">강점</span>
          <h2 className="section-title">경우정밀의 강점</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            <Strength
              n="01"
              title="소재 절단부터 후처리까지 한 번에"
              desc="S45C 등 다양한 소재 재고를 보유하고, 양산 기계 외에 범용 선반·밀링까지 갖춰 다품종 소량 생산에 최적화되어 있습니다."
              imgs={["/factory/material-stock.jpg", "/equipment/saw.jpg"]}
            />
            <Strength
              n="02"
              title="20년 협력사 후처리 네트워크"
              desc="시화공단 내 위치한 열처리(진공·질화·TD·고주파), 도금(TIN코팅·크롬·무전해·아연·착색) 협력사와 20년 이상 협력관계를 유지합니다."
              imgs={["/process/heat-vacuum.jpg", "/process/heat-induction.jpg"]}
            />
            <Strength
              n="03"
              title="원통·평면 연마 직접 보유"
              desc="원통연마 3대 + 평면연마 3대를 직접 보유하여 후처리 후 연마까지 사내에서 처리, 안정적인 품질의 제품을 공급합니다."
              imgs={["/equipment/grinder-flat.jpg", "/process/grinding-2.jpg"]}
            />
            <Strength
              n="04"
              title="현대기아·GM·르노 지그 표준품 재고"
              desc="다웰핀·힌지핀·스토퍼·L/서브 브라켓트·각종 검사구 표준품을 상시 재고로 보유하여 즉시 출고가 가능합니다."
              imgs={["/products/gallery-15.jpg", "/products/gallery-22.jpg"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v, last = false }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={`flex gap-4 sm:gap-8 py-3.5 text-[14.5px] ${last ? "" : "border-b border-slate-200"}`}>
      <dt className="w-24 sm:w-28 shrink-0 text-ink-muted font-medium">{k}</dt>
      <dd className="text-ink font-semibold flex-1">{v}</dd>
    </div>
  );
}

function Strength({ n, title, desc, imgs }: { n: string; title: string; desc: string; imgs: string[] }) {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2">
        {imgs.map((src) => (
          <div key={src} className="relative aspect-[4/3]">
            <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="p-6 sm:p-7">
        <div className="text-[12px] font-bold tabular-nums text-brand">{n}</div>
        <h3 className="mt-2 text-[17px] font-bold text-ink leading-snug">{title}</h3>
        <p className="mt-3 text-[14px] text-ink-soft leading-[1.75]">{desc}</p>
      </div>
    </div>
  );
}
