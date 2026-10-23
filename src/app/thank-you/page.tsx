import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Qode Clicks",
  description: "Your message has been sent to Qode Clicks.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="bg-white dark:bg-[#05070d] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
        <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Thanks, we have your message.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          A specialist will reply within one business day. If it is urgent, email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-700 dark:text-cyan-300 underline">{SITE.email}</a>.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-200 transition-colors">Back to homepage</Link>
          <Link href="/#services" className="rounded-xl border border-slate-200 dark:border-white/15 px-6 py-4 font-semibold text-slate-900 dark:text-white hover:border-cyan-400 transition-colors">Explore our services</Link>
        </div>
      </div>
    </section>
  );
}
