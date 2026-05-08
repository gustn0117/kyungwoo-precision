import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata = { title: "오시는 길 | 경우정밀" };

export default function Location() {
  const query = encodeURIComponent(SITE.address.full);
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <span className="h-eyebrow">Visit Us</span>
        <h2 className="h-title">오시는 길</h2>
        <p className="h-sub">
          경기 시흥시 시화공단에 위치한 경우정밀로 오시는 길을 안내드립니다.
          방문 전 사전 연락 부탁드립니다.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card overflow-hidden">
            <div className="relative aspect-[16/10] bg-slate-100">
              <iframe
                title="map"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${query}&output=embed`}
              />
            </div>
          </div>

          <div className="card p-7 space-y-5">
            <div>
              <div className="h-eyebrow">Address</div>
              <p className="mt-2 font-semibold text-ink leading-relaxed">{SITE.address.full}</p>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <div className="h-eyebrow">Contact</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li><span className="text-ink-muted w-14 inline-block">대표전화</span> <a href={`tel:${SITE.contact.phone}`} className="font-semibold text-ink">{SITE.contact.phone}</a></li>
                <li><span className="text-ink-muted w-14 inline-block">담당자</span> <span className="font-semibold text-ink">{SITE.contact.manager}</span></li>
                <li><span className="text-ink-muted w-14 inline-block">휴대폰</span> <a href={`tel:${SITE.contact.mobile}`} className="font-semibold text-ink">{SITE.contact.mobile}</a></li>
                <li><span className="text-ink-muted w-14 inline-block">FAX</span> <span className="font-semibold text-ink">{SITE.contact.fax}</span></li>
                <li><span className="text-ink-muted w-14 inline-block">이메일</span> <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-ink">{SITE.contact.email}</a></li>
              </ul>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <div className="h-eyebrow">Business Hours</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li><span className="text-ink-muted w-20 inline-block">평일</span> <span className="font-semibold text-ink">08:30 - 18:00</span></li>
                <li><span className="text-ink-muted w-20 inline-block">점심</span> <span className="text-ink-soft">12:00 - 13:00</span></li>
                <li><span className="text-ink-muted w-20 inline-block">토/일/공휴일</span> <span className="text-ink-soft">휴무</span></li>
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

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {["/factory/exterior.jpg", "/factory/horizontal-mct.jpg", "/factory/material-stock.jpg"].map((src) => (
            <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={src} alt="공장 전경" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
