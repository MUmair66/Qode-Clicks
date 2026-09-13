"use client";

import Link from "next/link";
import { Zap, Layout, Activity, MousePointerClick, BarChart, Server } from "lucide-react";

export function SeoReporting() {
  const metrics = [
    { title: "Organic revenue", desc: "Or qualified leads, depending on your model." },
    { title: "Cost per organic lead", desc: "Retainer divided by leads produced." },
    { title: "Non brand traffic", desc: "Brand searches stripped out, always." },
    { title: "Conversion rate by page", desc: "Which pages earn and which just get visits." },
    { title: "Indexation health", desc: "Pages indexed against pages that should be." },
    { title: "Share of voice", desc: "Your visibility against named competitors." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 lg:p-16 grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start shadow-2xl">
          <div>
            <p className="text-blue-500 font-semibold text-sm mb-3">Reporting</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Six numbers at the top of every report.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              Rankings appear further down where they belong. If your last agency led with impressions and keyword counts, this will look unfamiliar.
            </p>
            <Link href="#sample" className="inline-flex rounded-full border-2 border-slate-300 dark:border-white/20 px-6 py-3 font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
              See a sample report
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{m.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoNotSell() {
  const items = [
    { title: "Guaranteed number one rankings", desc: "Nobody controls the algorithm. Anyone guaranteeing a position is either bidding on your brand name or about to show you a keyword nobody searches." },
    { title: "Bulk link packages", desc: "Two hundred links for a fixed monthly fee means marketplace guest posts on sites with no traffic. We will not build your authority on something you cannot defend." },
    { title: "Content by word count", desc: "Publishing thirty thousand words a month is a way to sell hours, not a strategy. We would rather write six pages that deserve to rank." },
    { title: "Results inside three months", desc: "Long tail terms can move in eight to twelve weeks. Competitive head terms take six to nine months. If you need revenue faster, we will point you at paid search instead." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-cyan-400 font-semibold text-sm mb-3">Straight answers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Four things we will not sell you.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] rounded-xl p-8 border border-slate-100 dark:border-white/5 border-l-4 border-l-red-500 shadow-xl">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoTools() {
  const tools = ["Google Search Console", "GA4", "Looker Studio", "Ahrefs", "Semrush", "Screaming Frog", "Sitebulb", "PageSpeed Insights", "Google Business Profile", "WordPress", "Yoast or Rank Math", "Cloudflare"];
  
  return (
    <section className="py-16 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <p className="text-cyan-400 font-semibold text-sm mb-3">Platforms and tools</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          What we run your account in.
        </h2>
        <div className="flex flex-wrap gap-4">
          {tools.map((t, i) => (
            <span key={i} className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoWorksWellWith() {
  const services = [
    { title: "Speed and Core Web Vitals", desc: "A slow site caps how far SEO can take you, whatever the content does.", link: "/services/speed" },
    { title: "WordPress development", desc: "Template level fixes scale across thousands of pages at once.", link: "/services/custom-wordpress-development" },
    { title: "Conversion rate optimization", desc: "Organic traffic is worth nothing until the page converts it.", link: "/services/cro" },
    { title: "Google Ads", desc: "Buys revenue in the six months SEO takes to compound.", link: "/services/google-ads" },
    { title: "Analytics and tracking", desc: "Without clean attribution you cannot prove SEO earned anything.", link: "/services/analytics" }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-cyan-400 font-semibold text-sm mb-3">Works well with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            SEO rarely performs alone.
          </h2>
          <p className="text-slate-500 dark:text-slate-400">These are the services we most often run alongside it, and why.</p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-xl p-6 flex flex-col h-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">{s.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <Link href={s.link} className="text-cyan-400 font-bold text-sm hover:text-cyan-300 mt-auto inline-flex items-center">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
