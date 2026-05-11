"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "인사말", href: "/about/greeting" },
  { label: "회사개요", href: "/about/overview" },
  { label: "연혁", href: "/about/history" },
  { label: "오시는 길", href: "/about/location" },
];

export default function AboutTabs() {
  const path = usePathname();
  return (
    <div className="border-b border-slate-200 bg-white sticky top-[68px] lg:top-[108px] z-20">
      <div className="container-x">
        <ul className="flex overflow-x-auto -mx-1">
          {TABS.map((t) => {
            const active = path === t.href;
            return (
              <li key={t.href} className="px-1">
                <Link
                  href={t.href}
                  className={`block px-4 sm:px-6 py-4 text-[13.5px] sm:text-[14.5px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                    active
                      ? "border-brand text-brand"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
