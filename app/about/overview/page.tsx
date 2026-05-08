import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "회사개요 | 경우정밀",
};

const ORG = [
  { dept: "총무부", count: 3, tasks: ["기획 및 관리 업무", "예산/견적 업무"] },
  { dept: "CNC부", count: 10, tasks: ["CNC 가공 담당", "야간 CNC/MCT 품질관리"] },
  { dept: "MCT부", count: 4, tasks: ["MCT 가공 담당"] },
  { dept: "제관부", count: 3, tasks: ["서브/브라켓트 및 제관물 용접", "공작물 절단"] },
  { dept: "수동선반부", count: 4, tasks: ["수동선반 및 밀링 가공 담당"] },
  { dept: "연마부", count: 6, tasks: ["열처리 및 연마 담당", "최종 품질 확인", "제품 포장 및 출고"] },
];

export default function Overview() {
  return (
    <>
      <section className="section bg-slate-50">
        <div className="container-x">
          <span className="h-eyebrow">Company Profile</span>
          <h2 className="h-title">회사 개요</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 card p-8">
              <h3 className="text-lg font-bold text-ink">회사 일반현황</h3>
              <dl className="mt-6 grid sm:grid-cols-2 gap-y-4 gap-x-8 text-[15px]">
                <Row k="회사명" v={SITE.name} />
                <Row k="영문명" v={SITE.nameEn} />
                <Row k="대표자" v={SITE.ceo} />
                <Row k="설립일자" v={SITE.founded} />
                <Row k="직원수" v={`총 ${SITE.employees}명`} />
                <Row k="설비수" v={`총 ${SITE.equipmentCount}대`} />
                <Row k="업종" v={SITE.business} colSpan />
                <Row k="주소" v={SITE.address.full} colSpan />
                <Row k="전화" v={`${SITE.contact.phone} (FAX: ${SITE.contact.fax})`} />
                <Row k="이메일" v={SITE.contact.email} />
              </dl>
            </div>

            <div className="card p-8 bg-brand text-white">
              <h3 className="text-lg font-bold">핵심 사업 영역</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "CNC / MCT 정밀 가공",
                  "수동 선반 / 밀링 가공",
                  "차체 용접치구·검사구 제작",
                  "산업용 기계부품 가공",
                  "원통·평면 연마 (사내)",
                  "열처리·도금 (협력사 일괄 관리)",
                  "ZEISS 3차원 측정·검사",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <span className="h-eyebrow">Organization</span>
          <h2 className="h-title">조직도</h2>

          <div className="mt-12">
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-brand text-white px-8 py-4 font-bold shadow">
                경우정밀 대표이사
              </div>
              <div className="h-8 w-[2px] bg-slate-300" />
              <div className="rounded-xl border-2 border-dashed border-slate-300 text-ink-soft px-6 py-3 font-semibold">
                부설연구소
              </div>
              <div className="h-8 w-[2px] bg-slate-300" />
            </div>

            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {ORG.map((d) => (
                <div key={d.dept} className="card p-5">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-bold text-ink">{d.dept}</h4>
                    <span className="text-xs font-semibold text-brand">({d.count}명)</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-ink-soft">
                    {d.tasks.map((t) => (
                      <li key={t}>· {t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-x">
          <span className="h-eyebrow">Strengths</span>
          <h2 className="h-title">우리의 강점</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Strength
              num="01"
              title="소재절단부터 후처리까지 한 번에"
              desc="S45C 등 다양한 소재 재고를 보유하고, 양산 기계 외에도 범용선반·밀링까지 갖춰 다품종 소량 생산에 최적화되어 있습니다."
              imgs={["/factory/material-stock.jpg", "/equipment/saw.jpg"]}
            />
            <Strength
              num="02"
              title="20년 협력사 후처리 네트워크"
              desc="시화공단 내 위치한 열처리(진공/질화/TD/고주파), 도금(TIN코팅·크롬·무전해·아연·착색) 협력사와 20년 이상 협력관계를 유지합니다."
              imgs={["/process/heat-vacuum.jpg", "/process/heat-induction.jpg"]}
            />
            <Strength
              num="03"
              title="원통·평면 연마 직접 보유"
              desc="원통연마 3대 + 평면연마 3대를 직접 보유하여 후처리 후 연마까지 사내에서 완벽한 품질의 제품을 생산합니다."
              imgs={["/equipment/grinder-flat.jpg", "/process/grinding-2.jpg"]}
            />
            <Strength
              num="04"
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

function Row({ k, v, colSpan = false }: { k: string; v: string; colSpan?: boolean }) {
  return (
    <div className={`flex items-baseline gap-4 ${colSpan ? "sm:col-span-2" : ""}`}>
      <dt className="w-20 shrink-0 text-xs font-semibold text-brand">{k}</dt>
      <dd className="text-ink">{v}</dd>
    </div>
  );
}

function Strength({ num, title, desc, imgs }: { num: string; title: string; desc: string; imgs: string[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="grid grid-cols-2">
        {imgs.map((src) => (
          <div key={src} className="relative aspect-[4/3]">
            <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black text-brand-200">{num}</span>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
