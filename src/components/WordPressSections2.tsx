"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PRICING } from "@/lib/site";

// On phones, long sections are shown partly with a "Show more" toggle. Desktop always shows everything.
export function MobileCollapse({ children, maxHeight = "max-h-[720px]", label = "Show more" }: { children: ReactNode; maxHeight?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`relative ${open ? "" : `${maxHeight} overflow-hidden md:max-h-none md:overflow-visible`}`}>
        {children}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-[#05070d] to-transparent md:hidden" />
        )}
      </div>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden mt-4 w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-white/20 font-semibold text-sm text-slate-700 dark:text-slate-200"
        >
          {label} <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export function SixPhasesProcess() {
  const phases = [
    { num: 1, title: "Discovery", desc: "Your business, your funnel and what the current site gets wrong. Sitemap and page count agreed, which is what the price is built on.", week: "Week 1" },
    { num: 2, title: "Architecture", desc: "URL structure, redirect map, block library specification and the performance budget, all signed off before design begins.", week: "Week 1 to 2" },
    { num: 3, title: "Design", desc: "Every block designed at desktop and mobile. On Figma projects you approve the full design system before any code exists.", week: "Week 2 to 4" },
    { num: 4, title: "Build", desc: "Custom theme or configured theme, block library, integrations and tracking, developed on staging with version control.", week: "Week 4 to 8" },
    { num: 5, title: "Test", desc: "Real devices, real browsers, real numbers against the agreed performance budget, plus accessibility and prelaunch SEO checks.", week: "Week 8 to 9" },
    { num: 6, title: "Launch and handover", desc: "Monitored cutover, redirects verified, Search Console watched for 14 days, then training so your team can run it.", week: "Week 9 to 10" },
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">The process</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Six phases. You sign off at the end of each one.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Nothing moves forward until you have approved what came before, which is how projects avoid a rebuild at week eight.
          </p>
        </div>

        <MobileCollapse label="Show all six phases">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-700 dark:text-cyan-300 font-bold text-sm mb-6 border border-cyan-500/30">
                  {phase.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{phase.desc}</p>
                <p className="text-slate-500 text-sm font-medium">{phase.week}</p>
              </div>
            ))}
          </div>
        </MobileCollapse>
        <p className="text-slate-500 text-sm mt-8">Timeline shown is for a custom theme build. Template kit builds run one to two weeks, headless builds run ten to sixteen.</p>
      </div>
    </section>
  );
}

export function EightThingsIncluded() {
  const items = [
    { title: "You own everything", desc: "Domain, hosting account, code and analytics all in your name from day one. Leaving costs you nothing but notice." },
    { title: "Mobile first, tested on real devices", desc: "Not just a browser window resized. Most of your traffic is mobile and that is where we build and test first." },
    { title: "SEO foundations in the templates", desc: "Clean URLs, heading structure, sitemaps, canonicals and meta handled at template level rather than page by page." },
    { title: "Analytics and conversion tracking", desc: "GA4 and Tag Manager with real form and call events, not a pageview tag pasted in the header." },
    { title: "Staging and version control", desc: "Git repository and a staging environment on every project. Nothing gets edited live, and every change is reversible." },
    { title: "Accessibility baseline", desc: "Keyboard navigation, focus states, contrast and semantic markup, with WCAG 2.2 AA as the working target." },
    { title: "Security hardening", desc: "Sensible permissions, login protection, file editing disabled, and no plugin doing a job that belongs in code." },
    { title: "Training and documentation", desc: "A recorded session plus written docs, so a new hire in eighteen months can still run the site without calling us." },
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-y border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Standard on every build</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Eight things included whatever you spend.
          </h2>
        </div>

        <MobileCollapse label="Show all eight">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-8 border-b border-slate-100 dark:border-white/5">
                <div className="mt-1 shrink-0">
                  <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </MobileCollapse>
      </div>
    </section>
  );
}

// Anonymized client example. Figures are specific to this project and are not reused elsewhere on the site.
export function WooCommerceCaseStudy() {
  const metrics = [
    { label: "Largest contentful paint", before: "4.1s", after: "1.4s" },
    { label: "Mobile conversion rate", before: "0.9%", after: "2.6%" },
    { label: "Homepage page weight", before: "4.2MB", after: "780KB" },
    { label: "Active plugins", before: "41", after: "15" },
  ];

  return (
    <section id="case-study" className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Client result</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Skincare brand, WooCommerce rebuild.</h2>
        </div>

        <div className="bg-slate-50 dark:bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-12 grid lg:grid-cols-2 gap-12 items-center border border-slate-200 dark:border-transparent">
          <div>
            <p className="text-slate-500 text-sm mb-4 font-medium">Ecommerce, direct-to-consumer skincare</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">A checkout losing a third of mobile sessions</h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Built on a premium theme with a page builder and forty-one plugins. Mobile took 4.1 seconds and the checkout ran to five steps. We rebuilt on a custom theme with a twelve-block library, cut the checkout to two steps and removed twenty-six plugins by moving their work into the theme.
            </p>
            <Link href="#estimate" className="inline-flex min-h-[44px] items-center justify-center border-2 border-slate-300 text-slate-900 font-bold px-8 py-4 rounded-full hover:border-slate-900 transition-colors">
              Get an estimate for your store
            </Link>
          </div>

          <div className="space-y-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white dark:bg-slate-100 rounded-xl p-5 sm:p-6 flex justify-between items-center gap-4">
                <span className="text-slate-600 font-medium">{m.label}</span>
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-slate-500 line-through">{m.before}</span>
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-600">{m.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorksWellWith() {
  const cards: { title: string; desc: string; href?: string }[] = [
    { title: "SEO", desc: "A new site is the cheapest moment to get the architecture right.", href: "/digital-marketing/seo" },
    { title: "Speed and Core Web Vitals", desc: "Ongoing monitoring so performance does not drift after launch." },
    { title: "WooCommerce", desc: `Checkout, subscriptions, payments and product feed work, from ${PRICING.wooCommerce}.`, href: "#specialist-work" },
    { title: "Google Ads", desc: "Landing pages and conversion tracking built alongside the site, ready for paid traffic.", href: "/ppc/google-ads" },
    { title: "Care plans", desc: `Hosting, updates, backups and someone who answers at night, from ${PRICING.carePlanMonthly}.`, href: "#specialist-work" },
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Works well with</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight max-w-xl">
            What we usually run alongside a build.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col">
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{card.desc}</p>
              {card.href ? (
                <Link href={card.href} className="mt-6 text-cyan-700 dark:text-cyan-400 font-bold text-sm hover:text-cyan-900 dark:hover:text-cyan-300 transition-colors">
                  Learn more
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
