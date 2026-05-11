import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import {
  EQUIPMENT_LIST,
  MEASURING_LIST,
  HEAT_TREATMENTS,
  PROCESS_STEPS,
  CNC_CATALOG,
  MCT_CATALOG,
  SITE,
} from "@/lib/site";

export const metadata = {
  title: "보유 설비 | 경우정밀",
  description: "총 38대의 가공 설비와 ZEISS 3차원 측정기를 비롯한 정밀 측정 장비, 후처리 협력 네트워크를 한눈에 확인하세요.",
};

const MANUAL_IMGS = [
  { src: "/equipment/horizontal-lathe-1.jpg", label: "수동 선반" },
  { src: "/equipment/horizontal-lathe-2.jpg", label: "수동 선반" },
  { src: "/equipment/horizontal-lathe-3.jpg", label: "범용 밀링" },
  { src: "/equipment/horizontal-lathe-4.jpg", label: "범용 밀링" },
];
const GRIND_IMGS = [
  { src: "/equipment/grinder-flat.jpg", label: "평면 연마기" },
  { src: "/process/grinding-1.jpg", label: "원통 연마 작업" },
  { src: "/process/grinding-2.jpg", label: "정밀 연마 작업" },
  { src: "/process/grinding-3.jpg", label: "연마 후 검사" },
];

export default function Equipment() {
  const totalCount = EQUIPMENT_LIST.reduce((s, e) => s + e.count, 0);

  return (
    <>
      <PageHeader
        eyebrow="보유설비"
        title="보유 설비"
        desc={`가공·측정 ${SITE.equipmentCount}대의 정밀 설비와 ZEISS 3차원 측정 시스템, 20년 협력의 후처리 네트워크.`}
        bg="/equipment/cnc-lathe-2.jpg"
        breadcrumbs={[{ label: "보유설비" }]}
      />

      {/* 설비 요약 */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-slate-200">
            <Stat num={String(totalCount)} label="총 가공·측정 설비" />
            <Stat num="13" label="CNC 선반" sub="최대 Ø650 × L3500" />
            <Stat num="8" label="머시닝 센터" sub="MCT 7 + 호리젠탈 1" />
            <Stat num="6" label="연마기" sub="원통 3 + 평면 3" />
            <Stat num="11" label="기타 설비" sub="범용·톱·용접·프레스" />
          </div>
        </div>
      </section>

      {/* 제작 공정 + 설비 매핑 */}
      <section id="process" className="section bg-white scroll-mt-[80px] lg:scroll-mt-[120px]">
        <div className="container-x">
          <span className="section-label">제작 공정</span>
          <h2 className="section-title">제작 과정 &amp; 설비 매핑</h2>
          <p className="section-desc">
            소재 절단부터 출고까지 모든 공정을 사내 또는 협력사 네트워크로 일관 처리합니다.
          </p>

          <div className="mt-12 hidden lg:grid lg:grid-cols-7 border-t border-slate-200">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.key} className="border-r border-slate-200 last:border-r-0 px-4 py-6">
                <div className="text-[11px] font-semibold tabular-nums text-brand">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-[15px] font-bold text-ink leading-snug">{s.label}</div>
                <div className="mt-2 text-[12px] text-ink-muted leading-[1.6]">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-12 overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-[13.5px]">
                <thead className="bg-[#0b1322] text-white text-left">
                  <tr>
                    <th className="px-4 py-3.5 font-semibold whitespace-nowrap">시설(장비)명</th>
                    <th className="px-4 py-3.5 font-semibold">용도</th>
                    <th className="px-4 py-3.5 font-semibold w-16 text-center">수량</th>
                    <th className="px-4 py-3.5 font-semibold">상세 / 비고</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {EQUIPMENT_LIST.map((e, i) => (
                    <tr key={e.name} className={`border-t border-slate-200 ${i % 2 ? "bg-slate-50/60" : ""}`}>
                      <td className="px-4 py-3.5 font-bold text-ink whitespace-nowrap">{e.name}</td>
                      <td className="px-4 py-3.5 text-ink-soft">{e.usage}</td>
                      <td className="px-4 py-3.5 text-center font-bold tabular-nums text-brand">{e.count}</td>
                      <td className="px-4 py-3.5 text-ink-muted">{e.note || "-"}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#0b1322] text-white">
                    <td className="px-4 py-3.5 font-bold">계</td>
                    <td className="px-4 py-3.5" />
                    <td className="px-4 py-3.5 text-center font-bold text-[16px] tabular-nums">{totalCount}</td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CNC 선반 — 카탈로그 */}
      <CatalogBlock
        id="machines"
        eyebrow="CNC 선반"
        title="CNC 선반 (총 13대)"
        desc="8인치 / 10인치 / 21인치 사양을 다양하게 보유하며, 최대 Ø650 길이 3500mm까지 가공 가능합니다. 13대 보유로 긴급·유연 생산에 즉시 대응합니다."
        bg="bg-white"
        items={CNC_CATALOG}
      />

      {/* 머시닝 센터 — 카탈로그 */}
      <CatalogBlock
        eyebrow="머시닝 센터"
        title="머시닝 센터 (수직 7 + 호리젠탈 1)"
        desc="복잡한 3D 형상 가공에 최적화된 수직 머시닝 센터(MCT) 7대와, 평면·깊은 홈/대형 중량물 가공에 적합한 호리젠탈 머시닝 센터 1대(800×800)를 보유합니다. 인덱스 타입 보유."
        bg="bg-slate-50 border-y border-slate-200"
        items={MCT_CATALOG}
      />

      {/* 수동 선반 / 범용 밀링 — 현장 사진 */}
      <PhotoBlock
        eyebrow="수동 선반 / 범용 밀링"
        title="수동 선반 / 범용 밀링 (각 4대)"
        desc="다품종 소량 생산에 최적화된 수동 가공 라인. 양산 기계로는 대응이 어려운 시제품·소량 품목과 CNC·MCT 보조 작업까지 유연하게 대응합니다."
        bg="bg-white"
        imgs={MANUAL_IMGS}
      />

      {/* 원통 / 평면 연마기 — 현장 사진 */}
      <PhotoBlock
        id="grinding"
        eyebrow="연마"
        title="원통 / 평면 연마기 (각 3대)"
        desc="가공·열처리 후의 수치 변화 보정과 거칠기 정밀 가공을 위한 사내 연마 라인. 후처리 외주 없이 즉시 연마하여 납기를 단축합니다."
        bg="bg-slate-50 border-y border-slate-200"
        imgs={GRIND_IMGS}
      />

      {/* 후처리 — 열처리 / 도금 */}
      <section id="heat" className="section bg-white scroll-mt-[80px] lg:scroll-mt-[120px]">
        <div className="container-x">
          <span className="section-label">후처리</span>
          <h2 className="section-title">후처리 — 열처리 / 도금 / 도색</h2>
          <p className="section-desc">
            시화공단 내 위치한 협력 열처리·도금사와 20년 이상 협력관계를 유지하여, 신속하고 안정적인 후처리 공정을 제공합니다.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {HEAT_TREATMENTS.map((h) => (
              <div key={h.type} className="bg-white">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={h.img} alt={h.type} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-bold text-ink text-[14px]">{h.type}</div>
                  <p className="mt-1 text-[12px] text-ink-muted leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            <SpecCard k="열처리" v="진공 / 질화 / TD / 고주파 / 침탄" />
            <SpecCard k="도금" v="TIN코팅 / 크롬 / 무전해 / 아연 / 착색" />
            <SpecCard k="도색" v="흑착색 / 천연색" />
          </div>
        </div>
      </section>

      {/* 측정기 보유 현황 */}
      <section id="measuring" className="section bg-slate-50 border-t border-slate-200 scroll-mt-[80px] lg:scroll-mt-[120px]">
        <div className="container-x">
          <span className="section-label">측정 장비</span>
          <h2 className="section-title">측정기 보유 현황</h2>
          <p className="section-desc">
            스위스 ZEISS사의 자동 3차원 측정기를 중심으로, 다양한 정밀 측정·계측 장비를 갖추고 데이터 기반 품질을 보증합니다.
          </p>

          <div className="mt-10 grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 relative overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src="/equipment/horizontal-lathe-1.jpg" alt="ZEISS 3차원 측정기" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322]/90 via-[#0b1322]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">
                  <div className="inline-block bg-brand px-2 py-0.5 text-[10px] font-bold tracking-[0.16em]">대표 측정장비</div>
                  <h3 className="mt-2.5 text-[22px] sm:text-[24px] font-bold">ZEISS CONTURA G2 + CALYPSO</h3>
                  <p className="mt-1.5 text-[13.5px] text-white/80 max-w-md leading-relaxed">
                    스위스 ZEISS사의 자동 3차원 측정기. 가공 후 오차 보정, 후처리 후 수치 변화량 측정까지 데이터 기반으로 관리합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 p-6 sm:p-7">
              <h4 className="font-bold text-ink text-[15px]">측정 / 계측 장비</h4>
              <ul className="mt-4 divide-y divide-slate-200 border-t border-slate-200">
                {MEASURING_LIST.slice(1).map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-3 py-3 text-[13.5px]">
                    <div>
                      <div className="font-semibold text-ink">{m.name}</div>
                      <div className="text-[12px] text-ink-muted">{m.maker}</div>
                    </div>
                    {m.note && <span className="text-[12px] text-brand font-medium text-right shrink-0">{m.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ num, label, sub }: { num: string; label: string; sub?: string }) {
  return (
    <div className="px-4 sm:px-6 py-7 sm:py-9">
      <div className="text-[30px] sm:text-[38px] font-bold tabular-nums tracking-[-0.02em] text-ink leading-none">{num}</div>
      <div className="mt-2.5 text-[13.5px] font-bold text-ink">{label}</div>
      {sub && <div className="mt-1 text-[11.5px] text-ink-muted">{sub}</div>}
    </div>
  );
}

function SpecCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-white p-6">
      <div className="text-[12px] font-bold text-brand">{k}</div>
      <div className="mt-2 text-ink font-semibold text-[14.5px]">{v}</div>
    </div>
  );
}

function CatalogBlock({
  id, eyebrow, title, desc, bg, items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  desc: string;
  bg: string;
  items: readonly { src: string; name: string }[];
}) {
  return (
    <section id={id} className={`section ${bg} scroll-mt-[80px] lg:scroll-mt-[120px]`}>
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="section-label">{eyebrow}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-desc">{desc}</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {items.map((it) => (
              <figure key={it.src} className="bg-white">
                <div className="relative aspect-[4/3] grid place-items-center p-4">
                  <Image src={it.src} alt={it.name} fill sizes="(max-width: 640px) 50vw, 30vw" className="object-contain p-2" />
                </div>
                <figcaption className="px-3 pb-3 text-center text-[12px] font-semibold text-ink-soft">
                  {it.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoBlock({
  id, eyebrow, title, desc, bg, imgs,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  desc: string;
  bg: string;
  imgs: { src: string; label: string }[];
}) {
  return (
    <section id={id} className={`section ${bg} scroll-mt-[80px] lg:scroll-mt-[120px]`}>
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="section-label">{eyebrow}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-desc">{desc}</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {imgs.map((it, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={it.src} alt={it.label} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-950/80 to-transparent">
                  <span className="text-[11px] font-semibold text-white">{it.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
