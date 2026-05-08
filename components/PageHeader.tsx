import Image from "next/image";
import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  desc,
  bg = "/equipment/cnc-lathe-2.jpg",
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  bg?: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative h-[300px] sm:h-[360px] flex items-end overflow-hidden text-white">
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1322]/85 via-[#0b1322]/65 to-[#0b1322]/90" />

      <div className="relative container-x pb-10 sm:pb-14">
        <nav className="text-[12px] sm:text-[13px] flex items-center gap-2 text-white/70">
          <Link href="/" className="hover:text-white">홈</Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/30">/</span>
              {b.href ? (
                <Link href={b.href} className="hover:text-white">{b.label}</Link>
              ) : (
                <span className="text-white">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-5 flex items-center gap-2.5 text-[12px] sm:text-[13px] font-semibold tracking-[0.02em] text-brand-300">
          <span className="inline-block h-px w-7 bg-brand-300" />
          {eyebrow}
        </div>
        <h1 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.2]">
          {title}
        </h1>
        {desc && (
          <p className="mt-4 text-[14px] sm:text-[15px] text-white/80 max-w-2xl leading-[1.75]">{desc}</p>
        )}
      </div>
    </section>
  );
}
