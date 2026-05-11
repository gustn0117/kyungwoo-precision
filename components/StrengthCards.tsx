import Image from "next/image";
import { STRENGTHS } from "@/lib/site";

export default function StrengthCards() {
  return (
    <section className="relative bg-white">
      {/* Stat 바: 회사 신뢰 지표 */}
      <div className="border-b border-slate-200">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
          {STAT_ITEMS.map((s) => (
            <div key={s.label} className="px-4 sm:px-8 py-7 sm:py-9">
              <div className="text-[12px] tracking-[0.04em] text-ink-muted font-medium">
                {s.label}
              </div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-[30px] sm:text-[36px] font-bold tabular-nums tracking-[-0.02em] text-ink leading-none">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="text-[14px] font-semibold text-ink-soft">
                    {s.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 강점 카드 */}
      <div className="grid md:grid-cols-3">
        {STRENGTHS.map((s) => (
          <div
            key={s.title}
            className="group relative h-[420px] sm:h-[480px] overflow-hidden border-b md:border-b-0 md:border-r border-slate-900/10 last:border-r-0"
          >
            <Image
              src={s.bg}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/65 to-slate-950/85" />

            <div className="absolute inset-0 flex flex-col justify-end px-7 sm:px-9 pb-9 sm:pb-10 text-white">
              <h3 className="text-[22px] sm:text-[24px] font-bold leading-[1.35] tracking-[-0.01em]">
                {s.title}
              </h3>
              <div className="mt-5 h-px w-9 bg-white/55" />
              <p className="mt-5 text-[14px] sm:text-[14.5px] leading-[1.75] text-white/80 max-w-[26rem]">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STAT_ITEMS = [
  { label: "설립", value: "1993", suffix: "년" },
  { label: "정밀가공 노하우", value: "33", suffix: "년" },
  { label: "가공·측정 설비", value: "38", suffix: "대" },
  { label: "임직원", value: "33", suffix: "명" },
];
