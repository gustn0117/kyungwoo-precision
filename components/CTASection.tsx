import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/equipment/cnc-lathe-5.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1426]/95 via-[#0a1426]/85 to-[#0a1426]/55" />

      <div className="relative container-x py-20 sm:py-24 lg:py-28 text-white">
        <div className="max-w-2xl">
          <span className="section-label !text-brand-300 before:!bg-brand-300">견적 문의</span>
          <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[42px] font-bold leading-[1.25] tracking-[-0.02em]">
            정밀가공이 필요하신가요?<br />
            <span className="text-brand-300">경우정밀이 답해드립니다.</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-white/80 leading-[1.8] max-w-xl">
            도면, 수량, 납기만 알려주시면 신속하게 견적을 회신해 드립니다.
            소량 다품종부터 양산까지, 30년의 가공 경험으로 함께합니다.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
            <a
              href={`tel:${SITE.contact.phone}`}
              className="group relative bg-white text-ink p-6 hover:bg-brand-50 transition-colors border-l-2 border-brand"
            >
              <div className="text-[12px] font-semibold tracking-[0.04em] text-brand">전화 상담</div>
              <div className="mt-2 text-[22px] sm:text-[24px] font-bold tracking-[-0.01em] tabular-nums">
                {SITE.contact.phone}
              </div>
              <div className="text-[12.5px] mt-1.5 text-ink-muted">
                {SITE.contact.manager} · {SITE.contact.mobile}
              </div>
            </a>
            <Link
              href="/contact"
              className="group relative bg-brand text-white p-6 hover:bg-brand-dark transition-colors border-l-2 border-white"
            >
              <div className="text-[12px] font-semibold tracking-[0.04em] text-white/80">온라인 문의</div>
              <div className="mt-2 text-[22px] sm:text-[24px] font-bold tracking-[-0.01em]">
                도면 첨부 견적 요청
              </div>
              <div className="text-[12.5px] mt-1.5 text-white/70 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                문의 양식으로 이동
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
