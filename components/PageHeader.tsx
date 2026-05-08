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
    <section className="relative h-[360px] sm:h-[420px] flex items-end overflow-hidden text-white">
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/85" />

      <div className="relative container-x pb-10 sm:pb-14">
        <nav className="text-xs sm:text-sm flex items-center gap-2 text-white/70">
          <Link href="/" className="hover:text-white">홈</Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              {b.href ? (
                <Link href={b.href} className="hover:text-white">{b.label}</Link>
              ) : (
                <span className="text-white">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-3">
          <span className="text-[11px] sm:text-xs tracking-[0.28em] font-semibold text-brand-300 uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {desc && (
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">{desc}</p>
          )}
        </div>
      </div>
    </section>
  );
}
