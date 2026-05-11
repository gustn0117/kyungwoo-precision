import { COMPANY_HISTORY, SITE } from "@/lib/site";

export const metadata = { title: "연혁 | 경우정밀" };

export default function History() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-label">연혁</span>
          <h2 className="section-title">{SITE.yearsLabel}의 발자취</h2>
          <p className="section-desc">
            1993년 작은 가공소에서 시작해, 오늘날 {SITE.equipmentCount}대의 설비와 {SITE.employees}명의
            전문 인력이 함께하는 정밀가공 전문기업으로 성장하기까지의 경우정밀 연혁입니다.
          </p>
        </div>

        <div className="mt-16 space-y-14 lg:space-y-16">
          {COMPANY_HISTORY.map((h) => (
            <div key={h.decade} className="grid lg:grid-cols-12 gap-6 lg:gap-10">
              <div className="lg:col-span-3">
                <div className="text-[40px] sm:text-[52px] font-bold tracking-[-0.03em] text-brand-200 leading-none">
                  {h.decade}
                </div>
              </div>
              <ol className="lg:col-span-9 border-t border-slate-200">
                {h.items.map((it, i) => {
                  const featured = "featured" in it && it.featured;
                  return (
                    <li
                      key={`${it.y}-${i}`}
                      className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-slate-200 px-4 sm:px-5 py-4 sm:py-5 ${
                        featured ? "bg-brand text-white" : ""
                      }`}
                    >
                      <span
                        className={`shrink-0 w-20 text-[13px] font-bold tabular-nums tracking-[0.01em] ${
                          featured ? "text-white/85" : "text-brand"
                        }`}
                      >
                        {it.y}
                      </span>
                      <span className={`text-[14.5px] sm:text-[15px] leading-relaxed ${featured ? "text-white font-semibold" : "text-ink"}`}>
                        {it.t}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[12px] text-ink-muted">
          ※ 일부 연도는 회사 자료를 기반으로 정리한 대표 마일스톤입니다.
        </p>
      </div>
    </section>
  );
}
