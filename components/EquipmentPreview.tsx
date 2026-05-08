import Image from "next/image";
import Link from "next/link";
import { EQUIPMENT_LIST } from "@/lib/site";

const SHOWCASE = [
  { src: "/equipment/cnc-lathe-2.jpg", label: "CNC 선반", count: 13 },
  { src: "/equipment/mct-2.jpg", label: "머시닝 센터", count: 7 },
  { src: "/factory/horizontal-mct.jpg", label: "호리젠탈 MCT", count: 1 },
  { src: "/equipment/grinder-flat.jpg", label: "연마기", count: 6 },
];

export default function EquipmentPreview() {
  return (
    <section className="section bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f6,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#06b6d4,transparent_45%)]" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="h-eyebrow text-brand-300">Our Equipment</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              총 27대의 가공·측정 설비로
              <br />
              <span className="text-brand-300">정밀도와 생산성을 동시에 확보</span>
            </h2>
          </div>
          <Link href="/equipment" className="btn border border-white/30 text-white hover:bg-white hover:text-ink">
            전체 설비 현황 →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {SHOWCASE.map((e) => (
            <div key={e.label} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={e.src}
                alt={e.label}
                fill
                sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-brand-300">{e.count}</span>
                  <span className="text-sm font-semibold text-white/70">대</span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">{e.label}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {EQUIPMENT_LIST.map((e) => (
            <div key={e.name} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center backdrop-blur">
              <div className="text-2xl font-black text-white">{e.count}</div>
              <div className="mt-1 text-[11px] sm:text-xs font-semibold text-white/70 leading-snug">
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
