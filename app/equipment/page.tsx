import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { EQUIPMENT_LIST, MEASURING_LIST, HEAT_TREATMENTS, PROCESS_STEPS } from "@/lib/site";

export const metadata = {
  title: "보유 설비 | 경우정밀",
  description: "총 27대의 가공 설비와 ZEISS 3차원 측정기를 비롯한 정밀 측정 장비, 후처리 협력 네트워크를 한눈에 확인하세요.",
};

const CNC_IMGS = [
  { src: "/equipment/cnc-lathe-1.jpg", label: "CNC 선반" },
  { src: "/equipment/cnc-lathe-3.jpg", label: "CNC 선반" },
  { src: "/equipment/cnc-lathe-5.jpg", label: "CNC 선반" },
  { src: "/equipment/cnc-lathe-7.jpg", label: "CNC 선반" },
];
const MCT_IMGS = [
  { src: "/equipment/mct-1.jpg", label: "MCT (수직)" },
  { src: "/equipment/mct-3.jpg", label: "MCT (수직)" },
  { src: "/equipment/horizontal-mct-1.jpg", label: "호리젠탈 MCT" },
  { src: "/factory/horizontal-mct.jpg", label: "호리젠탈 MCT" },
];
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
  return (
    <>
      <PageHeader
        eyebrow="Equipment"
        title="보유 설비"
        desc="가공·측정 27대의 정밀 설비와 ZEISS 3차원 측정 시스템, 20년 협력의 후처리 네트워크."
        bg="/equipment/cnc-lathe-2.jpg"
        breadcrumbs={[{ label: "보유설비" }]}
      />

      {/* Equipment summary */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Stat num="27" label="총 가공·측정 설비" />
            <Stat num="13" label="CNC 선반" sub="최대 Ø500 × L2000" />
            <Stat num="8" label="머시닝 센터" sub="MCT 7 + 호리젠탈 1" />
            <Stat num="6" label="연마기" sub="원통 3 + 평면 3" />
          </div>
        </div>
      </section>

      {/* Manufacturing process */}
      <section id="process" className="section bg-white scroll-mt-[88px]">
        <div className="container-x">
          <span className="h-eyebrow">Manufacturing Process</span>
          <h2 className="h-title">제작과정 & 설비 매핑</h2>
          <p className="h-sub">소재 절단부터 출고까지 모든 공정을 사내 또는 협력사 네트워크로 일관 처리합니다.</p>

          <div className="mt-10 hidden md:grid md:grid-cols-7 gap-2">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.key} className="card p-5 text-center">
                <div className="text-xs font-semibold text-brand">STEP {i + 1}</div>
                <div className="mt-2 font-bold text-ink">{s.label}</div>
                <div className="mt-1 text-xs text-ink-muted leading-snug">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-12 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-brand text-white text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold">시설(장비)명</th>
                    <th className="px-4 py-3 font-semibold">용도</th>
                    <th className="px-4 py-3 font-semibold w-20 text-center">수량</th>
                    <th className="px-4 py-3 font-semibold">상세 / 비고</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {EQUIPMENT_LIST.map((e, i) => (
                    <tr key={e.name} className={i % 2 ? "bg-slate-50/60" : ""}>
                      <td className="px-4 py-3 font-bold text-ink whitespace-nowrap">{e.name}</td>
                      <td className="px-4 py-3 text-ink-soft">{e.usage}</td>
                      <td className="px-4 py-3 text-center font-semibold text-brand">{e.count}</td>
                      <td className="px-4 py-3 text-ink-muted">{e.note || "-"}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-900 text-white">
                    <td className="px-4 py-3 font-bold">계</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 text-center font-black text-lg">
                      {EQUIPMENT_LIST.reduce((s, e) => s + e.count, 0)}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CNC */}
      <Block id="machines" eyebrow="CNC LATHE" title="CNC 선반 (총 13대)" bg="bg-slate-50"
        desc="8인치/10인치/21인치 사양을 다양하게 보유. 최대 Ø500파이 길이 2000mm까지 가공 가능하며, 13대 보유로 긴급/유연 생산에 즉시 대응합니다."
        imgs={CNC_IMGS} />

      {/* MCT */}
      <Block eyebrow="MACHINING CENTER" title="머시닝 센터 (수직 7 + 호리젠탈 1)" bg="bg-white"
        desc="복잡한 3D 형상 가공에 최적화된 수직 머시닝 센터(MCT) 7대와, 평면·깊은 홈/대형 중량물 가공에 적합한 호리젠탈 머시닝 센터 1대를 보유합니다. 인덱스 타입 보유."
        imgs={MCT_IMGS} />

      {/* Manual */}
      <Block eyebrow="MANUAL & MILLING" title="수동 선반 / 범용 밀링 (각 4대)" bg="bg-slate-50"
        desc="다품종 소량 생산에 최적화된 수동 가공 라인. 양산 기계로는 대응이 어려운 시제품·소량 품목까지 유연하게 대응합니다."
        imgs={MANUAL_IMGS} />

      {/* Grinding */}
      <Block id="grinding" eyebrow="GRINDING" title="원통 / 평면 연마기 (각 3대)" bg="bg-white"
        desc="가공·열처리 후의 수치 변화 보정과 거칠기 정밀 가공을 위한 사내 연마 라인. 후처리 외주 없이 즉시 연마하여 납기를 단축합니다."
        imgs={GRIND_IMGS} />

      {/* Heat treatment */}
      <section id="heat" className="section bg-slate-100 scroll-mt-[88px]">
        <div className="container-x">
          <span className="h-eyebrow">Heat Treatment & Plating</span>
          <h2 className="h-title">후처리 - 열처리 / 도금 / 도색</h2>
          <p className="h-sub">
            시화공단 내 위치한 협력 열처리·도금사와 20년 이상 협력관계를 유지하여, 신속하고 안정적인 후처리 공정을 제공합니다.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {HEAT_TREATMENTS.map((h) => (
              <div key={h.type} className="card overflow-hidden">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image src={h.img} alt={h.type} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-bold text-ink">{h.type}</div>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="card p-6">
              <div className="text-sm font-bold text-brand">열처리</div>
              <div className="mt-2 text-ink font-semibold">진공 / 질화 / TD / 고주파</div>
            </div>
            <div className="card p-6">
              <div className="text-sm font-bold text-brand">도금</div>
              <div className="mt-2 text-ink font-semibold">TIN코팅 / 크롬 / 무전해 / 아연 / 착색</div>
            </div>
            <div className="card p-6">
              <div className="text-sm font-bold text-brand">도색</div>
              <div className="mt-2 text-ink font-semibold">흑착색 / 천연색</div>
            </div>
          </div>
        </div>
      </section>

      {/* Measuring */}
      <section id="measuring" className="section bg-white scroll-mt-[88px]">
        <div className="container-x">
          <span className="h-eyebrow">Measuring Equipment</span>
          <h2 className="h-title">측정기 보유 현황</h2>
          <p className="h-sub">
            스위스 ZEISS사의 자동 3차원 측정기를 중심으로, 다양한 정밀 측정·계측 장비를 갖추고 데이터 기반 품질을 보증합니다.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 card overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src="/equipment/horizontal-lathe-1.jpg" alt="ZEISS 3차원 측정기" fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-block rounded bg-brand px-2 py-0.5 text-[10px] font-bold tracking-widest">FEATURED</div>
                  <h3 className="mt-2 text-2xl font-bold">ZEISS CONTURA G2 + CALYPSO</h3>
                  <p className="mt-1 text-sm text-white/80 max-w-md">
                    스위스 ZEISS사의 자동 3차원 측정기. 가공 후 오차 보정, 후처리 후 수치 변화량 측정까지 데이터 기반으로 관리합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="font-bold text-ink">측정/계측 장비</h4>
              <ul className="mt-4 space-y-3">
                {MEASURING_LIST.slice(1).map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between text-sm border-b border-slate-100 pb-2 last:border-0">
                    <div>
                      <div className="font-semibold text-ink">{m.name}</div>
                      <div className="text-xs text-ink-muted">{m.maker}</div>
                    </div>
                    {m.note && <span className="text-xs text-brand font-medium">{m.note}</span>}
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
    <div className="card p-6 lg:p-7 bg-white">
      <div className="text-4xl sm:text-5xl font-black text-brand leading-none">{num}</div>
      <div className="mt-3 text-sm font-bold text-ink">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-ink-muted">{sub}</div>}
    </div>
  );
}

function Block({
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
    <section id={id} className={`section ${bg} scroll-mt-[88px]`}>
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="h-eyebrow">{eyebrow}</span>
            <h2 className="h-title">{title}</h2>
            <p className="h-sub">{desc}</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {imgs.map((it, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={it.src} alt={it.label} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-900/80 to-transparent">
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
