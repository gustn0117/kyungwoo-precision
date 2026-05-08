import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 grid place-items-center rounded-md bg-brand text-white font-black">
              KW
            </span>
            <span className="flex flex-col">
              <span className="font-bold text-white text-lg">{SITE.name}</span>
              <span className="text-xs tracking-[0.18em] text-brand-300 font-semibold">
                {SITE.nameEn}
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-md">
            1993년 설립 이래 30년간 정밀가공 외길을 걸어온 경우정밀은,
            CNC·MCT 가공부터 후처리·검사까지 모든 공정을 한 곳에서 책임지는
            One-Stop 정밀가공 전문기업입니다.
          </p>
          <div className="mt-6 space-y-1.5 text-sm text-slate-400">
            <div>
              <span className="text-slate-500">주소</span>{" "}
              <span className="text-slate-200">{SITE.address.full}</span>
            </div>
            <div>
              <span className="text-slate-500">대표전화</span>{" "}
              <a href={`tel:${SITE.contact.phone}`} className="text-slate-200 hover:text-white">
                {SITE.contact.phone}
              </a>
              <span className="mx-2 text-slate-700">|</span>
              <span className="text-slate-500">FAX</span>{" "}
              <span className="text-slate-200">{SITE.contact.fax}</span>
            </div>
            <div>
              <span className="text-slate-500">담당자</span>{" "}
              <span className="text-slate-200">
                {SITE.contact.manager} · {SITE.contact.mobile}
              </span>
            </div>
            <div>
              <span className="text-slate-500">이메일</span>{" "}
              <a href={`mailto:${SITE.contact.email}`} className="text-slate-200 hover:text-white">
                {SITE.contact.email}
              </a>
            </div>
          </div>
        </div>

        {NAV.slice(0, 2).map((g) => (
          <div key={g.label}>
            <h4 className="text-white font-semibold text-sm">{g.label}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {g.children.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-slate-400 hover:text-white transition">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800">
        <div className="container-x py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.nameEn}. All rights reserved.</p>
          <p>대표 {SITE.ceo} · 설립 {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
