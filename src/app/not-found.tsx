import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Qode Clicks",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-[#05070d] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Error 404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">We could not find that page.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          The link may be old or mistyped. Try one of our services below, or tell us what you were looking for.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 text-left">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="flex min-h-[44px] items-center justify-between rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-5 py-4 font-semibold text-slate-900 dark:text-white hover:border-cyan-400 transition-colors">
              {s.name}
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{s.group}</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-200 transition-colors">Go to homepage</Link>
          <Link href="/contact" className="rounded-xl border border-slate-200 dark:border-white/15 px-6 py-4 font-semibold text-slate-900 dark:text-white hover:border-cyan-400 transition-colors">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
