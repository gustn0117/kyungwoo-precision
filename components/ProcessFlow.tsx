import { PROCESS_STEPS } from "@/lib/site";

export default function ProcessFlow() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="h-eyebrow">One-Stop Process</span>
          <h2 className="h-title">
            소재 절단부터 출고까지,
            <br />
            <span className="text-brand">하나의 프로세스</span>로 완성합니다
          </h2>
          <p className="h-sub mx-auto text-center">
            경우정밀은 사내 24대의 가공설비와 6대의 정밀 연마기, ZEISS 3차원 측정기를 보유하고
            있으며, 시화공단 내 20년 이상 협력해온 열처리·도금 협력사와 함께 모든 공정을 한 번에 해결합니다.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-[34px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
          <ol className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-3">
            {PROCESS_STEPS.map((s, i) => (
              <li key={s.key} className="relative flex flex-col items-center text-center px-1">
                <div className="relative grid place-items-center w-[68px] h-[68px] rounded-full bg-white border-2 border-brand shadow-sm">
                  <span className="text-brand font-black text-lg">0{i + 1}</span>
                </div>
                <div className="mt-4 text-sm sm:text-base font-bold text-ink">{s.label}</div>
                <p className="mt-1 text-[12px] sm:text-[13px] text-ink-muted leading-snug">
                  {s.desc}
                </p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden md:block absolute top-[26px] -right-3 text-brand">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
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
