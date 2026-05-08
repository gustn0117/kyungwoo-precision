import Image from "next/image";
import { STRENGTHS } from "@/lib/site";

export default function StrengthCards() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-3">
        {STRENGTHS.map((s, i) => (
          <div
            key={s.title}
            className="group relative h-[460px] sm:h-[520px] overflow-hidden"
          >
            <Image
              src={s.bg}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${s.accent}`} />
            {i === 1 && <div className="absolute inset-0 bg-red-700/55 mix-blend-multiply" />}
            {i === 2 && <div className="absolute inset-0 bg-brand-900/55 mix-blend-multiply" />}

            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-10 text-white">
              <div className="text-xs tracking-[0.28em] font-semibold text-white/80">
                STRENGTH 0{i + 1}
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight whitespace-pre-line">
                {s.title}
              </h3>
              <div className="mt-5 h-[2px] w-10 bg-white/80" />
              <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed text-white/85 max-w-sm">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
