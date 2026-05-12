import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "문의하기 | 경우정밀",
  description: "정밀가공 견적, 자동차 지그 표준품 문의 등 경우정밀에 직접 문의하실 수 있습니다.",
};

const FAQ = [
  {
    q: "최소 발주 수량(MOQ)이 있나요?",
    a: "별도의 최소 발주 수량은 두지 않습니다. 단품·시제품부터 양산까지 유연하게 대응합니다.",
  },
  {
    q: "도면이 없는데 견적이 가능한가요?",
    a: "스케치, 사진, 샘플 부품을 보내주시면 미팅 후 도면화 작업부터 협력 가능합니다. 비밀유지(NDA) 작성도 도와드립니다.",
  },
  {
    q: "납기는 얼마나 걸리나요?",
    a: "수량과 후처리 유무에 따라 다릅니다. 표준품은 즉시 출고 가능, 일반 가공은 평균 3~7일, 후처리 포함 시 7~14일 내외입니다.",
  },
  {
    q: "재질과 후처리는 어디까지 가능한가요?",
    a: "S45C, SCM440, SUS, AL 등 다양한 소재 가공이 가능하며, 진공·질화·TD·고주파 열처리, TIN코팅·크롬·무전해·아연 도금까지 협력사 일괄 처리합니다.",
  },
  {
    q: "어떤 측정 데이터를 받아볼 수 있나요?",
    a: "ZEISS 3차원 측정기로 측정한 측정성적서 / 검사성적서 발행이 가능합니다. 형상/조도/편심 데이터 모두 제공 가능합니다.",
  },
];

const RESOURCES = [
  { title: "회사 소개서 (PDF)", desc: "경우정밀 종합 소개 자료입니다.", date: "2025.11.21", tag: "PDF" },
  { title: "설비 보유 현황 표", desc: "CNC·MCT·연마기 등 총 38대 설비 상세 리스트.", date: "2025.11", tag: "PDF" },
  { title: "측정 성적서 샘플", desc: "ZEISS CALYPSO 측정 결과 샘플 양식.", date: "2025.10", tag: "Sample" },
  { title: "표준품 카탈로그", desc: "다웰핀·로케이션핀·스토퍼 등 표준품 리스트.", date: "2025.09", tag: "Catalog" },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="고객센터"
        title="고객센터"
        desc="견적 문의·일반 상담은 아래 양식 또는 전화로 빠르게 연결됩니다."
        bg="/equipment/cnc-lathe-7.jpg"
        breadcrumbs={[{ label: "고객센터" }]}
      />

      <section id="inquiry" className="section bg-slate-50 border-b border-slate-200 scroll-mt-[80px] lg:scroll-mt-[120px]">
        <div className="container-x grid lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <span className="section-label">문의하기</span>
            <h2 className="section-title">온라인 문의</h2>
            <p className="section-desc">
              아래 양식을 작성해주시면, 확인 후 빠르게 회신드립니다. 도면·사진 등은
              양식의 첨부파일로 함께 보내실 수 있습니다.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>

          <aside className="lg:sticky lg:top-[124px] self-start space-y-3">
            <div className="bg-brand text-white p-6 border-l-2 border-white">
              <div className="text-[12px] font-semibold tracking-[0.04em] text-white/80">전화 문의</div>
              <a href={`tel:${SITE.contact.phone}`} className="mt-1.5 block text-[24px] font-bold tracking-[-0.01em] tabular-nums">
                {SITE.contact.phone}
              </a>
              <div className="mt-1.5 text-[13px] text-white/75">
                평일 07:30 - 16:40 (점심 11:40 - 12:30)
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 space-y-1.5 text-[13.5px]">
                <div><span className="opacity-70">담당자</span> {SITE.contact.manager}</div>
                <div><span className="opacity-70">휴대폰</span> <a href={`tel:${SITE.contact.mobile}`} className="font-semibold">{SITE.contact.mobile}</a></div>
                <div><span className="opacity-70">FAX</span> {SITE.contact.fax}</div>
              </div>
            </div>

            <div className="border border-slate-200 p-6 space-y-4">
              <div>
                <div className="text-[12px] font-semibold text-brand">이메일</div>
                <a href={`mailto:${SITE.contact.email}`} className="mt-1.5 block font-semibold text-ink hover:text-brand break-all text-[14px]">
                  {SITE.contact.email}
                </a>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-[12px] font-semibold text-brand">주소</div>
                <p className="mt-1.5 text-[14px] text-ink-soft leading-relaxed">{SITE.address.full}</p>
              </div>
            </div>

            <a href={SITE.contact.kakaoUrl} className="border border-slate-200 p-6 block bg-yellow-300/20 hover:bg-yellow-300/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-[#FEE500] text-[#3C1E1E]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.582 2 11c0 2.83 1.86 5.31 4.66 6.74-.21.78-.77 2.83-.88 3.27-.14.55.2.55.43.4.18-.13 2.86-1.95 4.02-2.74.58.08 1.17.13 1.77.13 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-ink">카카오톡 상담</div>
                  <div className="text-xs text-ink-muted">도면·사진을 바로 전송 가능합니다</div>
                </div>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-x">
          <span className="section-label">자주 묻는 질문</span>
          <h2 className="section-title">자주 묻는 질문 (FAQ)</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {FAQ.map((f, i) => (
              <details key={i} className="card p-5 group" {...(i === 0 ? { open: true } : {})}>
                <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                  <span className="flex items-baseline gap-3 font-bold text-ink">
                    <span className="text-brand">Q.</span>
                    {f.q}
                  </span>
                  <span className="text-ink-muted text-xs group-open:rotate-180 transition shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Resources / 자료실 */}
      <section id="library" className="section bg-slate-50 border-t border-slate-200 scroll-mt-[80px] lg:scroll-mt-[120px]">
        <div className="container-x">
          <span className="section-label">자료실</span>
          <h2 className="section-title">자료실</h2>
          <p className="section-desc">
            회사 소개서, 설비 현황, 표준품 카탈로그 등 자료가 필요하신 경우 견적 문의 또는 이메일로 요청해주세요.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {RESOURCES.map((r) => (
              <div key={r.title} className="card p-5 flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-lg bg-brand/10 text-brand shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest text-brand bg-brand/10 px-2 py-0.5 rounded">
                      {r.tag}
                    </span>
                    <span className="text-xs text-ink-muted">{r.date}</span>
                  </div>
                  <h3 className="mt-1.5 font-bold text-ink">{r.title}</h3>
                  <p className="mt-0.5 text-xs text-ink-muted">{r.desc}</p>
                </div>
                <a
                  href={`mailto:${SITE.contact.email}?subject=${encodeURIComponent("[자료요청] " + r.title)}`}
                  className="btn-outline text-xs px-3 py-2 self-start whitespace-nowrap"
                >
                  자료 요청
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
