import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/equipment/cnc-lathe-5.jpg"
        alt="공장 작업 현장"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />

      <div className="relative container-x py-20 sm:py-24 text-white">
        <div className="max-w-2xl">
          <span className="h-eyebrow text-brand-300">Get a Quote</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            정밀가공이 필요하신가요?<br />
            <span className="text-brand-300">경우정밀이 답해드립니다.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            도면, 수량, 납기만 알려주시면 신속하게 견적을 회신해 드립니다.
            소량 다품종부터 양산까지, 30년의 가공 경험이 함께합니다.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg">
            <a
              href={`tel:${SITE.contact.phone}`}
              className="bg-white text-ink rounded-xl p-4 hover:bg-brand hover:text-white transition group"
            >
              <div className="text-xs font-semibold tracking-[0.18em] text-brand group-hover:text-white">
                CALL US
              </div>
              <div className="mt-1 text-xl font-black tracking-tight">{SITE.contact.phone}</div>
              <div className="text-xs mt-1 opacity-70">{SITE.contact.manager} · {SITE.contact.mobile}</div>
            </a>
            <Link
              href="/contact"
              className="bg-brand text-white rounded-xl p-4 hover:bg-brand-dark transition group"
            >
              <div className="text-xs font-semibold tracking-[0.18em] text-white/80">
                ONLINE INQUIRY
              </div>
              <div className="mt-1 text-xl font-black">온라인 견적 문의</div>
              <div className="text-xs mt-1 opacity-80 flex items-center gap-1">
                도면 첨부 가능
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
