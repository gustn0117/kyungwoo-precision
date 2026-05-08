import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a1322] text-slate-300">
      <div className="container-x pt-16 pb-10 grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-2.5">
            <span className="text-[22px] font-extrabold tracking-[-0.02em] text-white leading-none">
              경우정밀
            </span>
            <span className="text-[10.5px] tracking-[0.16em] font-semibold text-brand-300 leading-none">
              KYUNGWOO PRECISION
            </span>
          </div>
          <p className="mt-6 text-[13.5px] leading-[1.85] text-slate-400 max-w-md">
            1993년 설립 이래 30년간 정밀가공 외길을 걸어온 경우정밀은,
            CNC·MCT 가공부터 후처리·검사까지 모든 공정을 한 곳에서 책임지는
            One-Stop 정밀가공 전문기업입니다.
          </p>

          <dl className="mt-7 space-y-2 text-[13px]">
            <Row k="대표자" v={`${SITE.ceo}`} />
            <Row k="설립" v={SITE.founded} />
            <Row k="주소" v={SITE.address.full} />
            <Row k="대표전화" v={SITE.contact.phone} hrefVal={`tel:${SITE.contact.phone}`} extra={`FAX ${SITE.contact.fax}`} />
            <Row k="담당자" v={`${SITE.contact.manager} · ${SITE.contact.mobile}`} hrefVal={`tel:${SITE.contact.mobile}`} />
            <Row k="이메일" v={SITE.contact.email} hrefVal={`mailto:${SITE.contact.email}`} />
          </dl>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {NAV.map((g) => (
            <div key={g.label}>
              <h4 className="text-white font-semibold text-[13.5px]">{g.label}</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                {g.children.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-slate-400 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.name} ({SITE.nameEn}). All rights reserved.</p>
          <p>경기 시흥시 군자천로31번길 56, 시화공단 2바 213호</p>
        </div>
      </div>
    </footer>
  );
}

function Row({
  k,
  v,
  hrefVal,
  extra,
}: {
  k: string;
  v: string;
  hrefVal?: string;
  extra?: string;
}) {
  return (
    <div className="flex gap-3">
      <dt className="w-16 shrink-0 text-slate-500">{k}</dt>
      <dd className="text-slate-300 flex-1">
        {hrefVal ? (
          <a href={hrefVal} className="hover:text-white">{v}</a>
        ) : v}
        {extra && (
          <>
            <span className="mx-2 text-slate-600">|</span>
            <span className="text-slate-500">{extra}</span>
          </>
        )}
      </dd>
    </div>
  );
}
