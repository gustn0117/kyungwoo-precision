import { PROCESS_STEPS } from "@/lib/site";

export default function ProcessFlow() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-label">일관 공정</span>
          <h2 className="section-title">
            소재 절단부터 출고까지<br />
            <span className="text-brand">하나의 프로세스</span>로 완성합니다.
          </h2>
          <p className="section-desc">
            사내 38대의 가공 설비와 ZEISS 3차원 측정기를 보유하고 있으며, 시화공단 내 20년 이상
            협력해 온 열처리·도금 협력사와 함께 모든 공정을 한 번에 해결합니다.
          </p>
        </div>

        <div className="mt-14 lg:mt-20 border-t border-slate-200">
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
            {PROCESS_STEPS.map((s, i) => (
              <li
                key={s.key}
                className="relative border-b sm:border-b-0 border-r border-slate-200 last:border-r-0 px-5 py-7 sm:py-9"
              >
                <div className="text-[11px] font-semibold tracking-[0.04em] text-brand tabular-nums">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-[16px] sm:text-[17px] font-bold text-ink leading-snug">
                  {s.label}
                </div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] text-ink-muted leading-[1.65]">
                  {s.desc}
                </p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden lg:flex absolute -right-[7px] top-[34px] z-10 w-[14px] h-[14px] items-center justify-center bg-white text-slate-400">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
