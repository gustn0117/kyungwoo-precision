import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata = { title: "오시는 길 | 경우정밀" };

export default function Location() {
  const query = encodeURIComponent(SITE.address.full);
  return (
    <section className="section bg-white">
      <div className="container-x">
        <span className="section-label">오시는 길</span>
        <h2 className="section-title">오시는 길</h2>
        <p className="section-desc">
          경기 시흥시 시화공단에 위치한 경우정밀로 오시는 길을 안내드립니다.
          방문 전 사전 연락 부탁드립니다.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 border border-slate-200 overflow-hidden">
            <div className="relative aspect-[16/10] bg-slate-100">
              <iframe
                title="map"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${query}&output=embed`}
              />
            </div>
          </div>

          <div className="border border-slate-200 p-6 sm:p-7 space-y-5">
            <div>
              <div className="text-[12px] font-semibold text-brand">주소</div>
              <p className="mt-2 font-semibold text-ink leading-relaxed text-[14.5px]">{SITE.address.full}</p>
            </div>
            <div className="border-t border-slate-200 pt-5">
              <div className="text-[12px] font-semibold text-brand">연락처</div>
              <ul className="mt-2.5 space-y-1.5 text-[13.5px]">
                <li><span className="text-ink-muted w-16 inline-block">대표전화</span> <a href={`tel:${SITE.contact.phone}`} className="font-semibold text-ink">{SITE.contact.phone}</a></li>
                <li><span className="text-ink-muted w-16 inline-block">담당자</span> <span className="font-semibold text-ink">{SITE.contact.manager}</span></li>
                <li><span className="text-ink-muted w-16 inline-block">휴대폰</span> <a href={`tel:${SITE.contact.mobile}`} className="font-semibold text-ink">{SITE.contact.mobile}</a></li>
                <li><span className="text-ink-muted w-16 inline-block">FAX</span> <span className="font-semibold text-ink">{SITE.contact.fax}</span></li>
                <li><span className="text-ink-muted w-16 inline-block">이메일</span> <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-ink break-all">{SITE.contact.email}</a></li>
              </ul>
            </div>
            <div className="border-t border-slate-200 pt-5">
              <div className="text-[12px] font-semibold text-brand">운영 시간</div>
              <ul className="mt-2.5 space-y-1.5 text-[13.5px]">
                <li><span className="text-ink-muted w-24 inline-block">평일</span> <span className="font-semibold text-ink">08:30 - 18:00</span></li>
                <li><span className="text-ink-muted w-24 inline-block">점심</span> <span className="text-ink-soft">12:00 - 13:00</span></li>
                <li><span className="text-ink-muted w-24 inline-block">토·일·공휴일</span> <span className="text-ink-soft">휴무</span></li>
              </ul>
            </div>
            <a
              href={`https://map.kakao.com/?q=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              카카오맵에서 길찾기
            </a>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-2 sm:gap-3">
          {["/factory/exterior.jpg", "/factory/horizontal-mct.jpg", "/factory/material-stock.jpg"].map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="공장 전경" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
