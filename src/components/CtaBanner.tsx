import Link from "next/link";
import type { ReactNode } from "react";

// Shared closing call-to-action block so every page uses the same brand colours and buttons.
export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-5xl">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-[2.5rem] px-6 py-12 sm:p-12 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 text-balance">{title}</h2>
          <p className="text-cyan-50 text-lg mb-10 max-w-2xl mx-auto relative z-10">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href={primary.href} className="bg-white text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-cyan-50 transition-colors">
              {primary.label}
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="text-white border-2 border-white/40 font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
