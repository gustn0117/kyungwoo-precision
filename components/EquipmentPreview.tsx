import Image from "next/image";
import Link from "next/link";
import { EQUIPMENT_LIST } from "@/lib/site";

const SHOWCASE = [
  { src: "/equipment/cnc-lathe-2.jpg", label: "CNC 선반", count: 13 },
  { src: "/equipment/mct-2.jpg", label: "머시닝 센터", count: 7 },
  { src: "/factory/horizontal-mct.jpg", label: "호리젠탈 MCT", count: 1 },
  { src: "/equipment/grinder-flat.jpg", label: "연마기", count: 6 },
];

export default function EquipmentPreview() {
  return (
    <section className="section bg-[#0b1322] text-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="section-label !text-brand-300 before:!bg-brand-300">보유 설비</span>
            <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.25] tracking-[-0.02em] text-white">
              총 27대의 가공·측정 설비로<br />
              <span className="text-brand-300">정밀도와 생산성을 동시에 확보</span>
            </h2>
          </div>
          <Link
            href="/equipment"
            className="btn border border-white/30 text-white hover:bg-white hover:text-ink self-start lg:self-auto"
          >
            전체 설비 현황
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {SHOWCASE.map((e) => (
            <div key={e.label} className="group relative aspect-[4/5] overflow-hidden bg-[#0b1322]">
              <Image
                src={e.src}
                alt={e.label}
                fill
                sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-[#0b1322]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[36px] sm:text-[40px] font-bold tabular-nums tracking-[-0.02em] text-white leading-none">
                    {e.count}
                  </span>
                  <span className="text-[14px] font-semibold text-white/70">대</span>
                </div>
                <h3 className="mt-2 text-[15px] font-semibold text-white">{e.label}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 전체 설비 한눈에 보기 */}
        <div className="mt-14 border-t border-white/15">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-x divide-white/10">
            {EQUIPMENT_LIST.map((e) => (
              <div key={e.name} className="px-4 py-5 lg:py-6 border-b lg:border-b-0 border-white/10">
                <div className="text-[28px] sm:text-[30px] font-bold tabular-nums text-white leading-none">
                  {e.count}
                </div>
                <div className="mt-2 text-[11.5px] sm:text-[12px] font-semibold text-white/65 leading-snug">
                  {e.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
