export const metadata = { title: "연혁 | 경우정밀" };

const HISTORY = [
  {
    decade: "2020s",
    items: [
      { y: "2024", t: "ZEISS CALYPSO 3차원 측정 시스템 운영 고도화" },
      { y: "2023", t: "다품종 소량 생산 라인 확장 / 자동차 지그 표준품 재고 시스템 정비" },
      { y: "2022", t: "범용 밀링·연마 설비 추가 도입으로 사내 일관 공정 강화" },
      { y: "2021", t: "총 가공·측정 설비 27대 체제 완성" },
    ],
  },
  {
    decade: "2010s",
    items: [
      { y: "2019", t: "ZEISS CONTURA G2 자동 3차원 측정기 도입" },
      { y: "2017", t: "호리젠탈 머시닝 센터 도입 - 대형/중량물 가공 대응" },
      { y: "2015", t: "현대기아·GM·르노 차체 지그 표준품 정규 공급사 등록" },
      { y: "2012", t: "MCT 7대·CNC 선반 13대 라인업 구축" },
    ],
  },
  {
    decade: "2000s",
    items: [
      { y: "2008", t: "원통연마·평면연마 사내 라인 구축 (총 6대)" },
      { y: "2005", t: "시화공단 내 협력 열처리·도금사와 장기 파트너십 체결" },
      { y: "2002", t: "CNC 선반 양산 라인 확장" },
    ],
  },
  {
    decade: "1990s",
    items: [
      { y: "1998", t: "차체 용접치구·검사구 정규 공급" },
      { y: "1995", t: "산업용 기계부품 가공 사업 본격 진출" },
      { y: "1993.03", t: "경우정밀 설립 (대표 최양수)" },
    ],
  },
];

export default function History() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <span className="h-eyebrow">Our History</span>
        <h2 className="h-title">30년의 발자취</h2>
        <p className="h-sub">
          1993년 작은 가공소에서 시작해, 오늘날 27대의 설비와 30명의 전문 인력이 함께하는
          정밀가공 전문기업으로 성장하기까지의 경우정밀 연혁입니다.
        </p>

        <div className="mt-14 relative">
          <div className="absolute left-3 sm:left-1/2 top-2 bottom-2 w-[2px] bg-slate-200 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {HISTORY.map((h, i) => (
              <div key={h.decade} className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className="pl-10 sm:pl-0 sm:pr-12 sm:text-right relative">
                  <span className="absolute left-0 sm:left-auto sm:right-[-7px] top-2 grid place-items-center w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-slate-50 sm:translate-x-1/2" />
                  <div className="text-5xl sm:text-6xl font-black text-brand">{h.decade}</div>
                </div>

                <div className="pl-10 sm:pl-12">
                  <ul className="space-y-4">
                    {h.items.map((it) => (
                      <li key={it.y} className="card p-5">
                        <div className="text-sm font-bold text-brand">{it.y}</div>
                        <div className="mt-1 text-ink">{it.t}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-muted">
          ※ 일부 연도는 회사 자료를 기반으로 정리한 대표 마일스톤입니다.
        </p>
      </div>
    </section>
  );
}
