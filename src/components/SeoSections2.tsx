"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export function SeoTimeline() {
  const months = [
    {
      time: "Month 1",
      title: "Diagnose and fix",
      items: ["Full technical and content audit", "Search Console and GA4 validated", "Keyword research and roadmap", "Critical technical fixes shipped", "Baseline report agreed with you"]
    },
    {
      time: "Months 2 to 3",
      title: "Build the foundation",
      items: ["Site architecture and internal links", "Core commercial pages rewritten", "Schema and Core Web Vitals work", "First content batch published", "Early movement on long tail terms"]
    },
    {
      time: "Months 4 to 6",
      title: "Scale content and links",
      items: ["Content published to the roadmap", "Digital PR and outreach running", "Underperformers merged or rewritten", "Conversion testing on landing pages", "Meaningful traffic and lead growth"]
    },
    {
      time: "Months 7 to 12",
      title: "Compound and defend",
      items: ["Head terms start moving", "Topic clusters filled out", "Competitor gap closing", "Quarterly strategy resets", "Revenue attribution matured"]
    }
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-10 lg:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]" />
          
          <p className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-4">The first twelve months</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 tracking-tight leading-tight max-w-xl">
            What actually happens, month by month.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 md:mb-12 max-w-2xl leading-relaxed">
            SEO takes time, but it should not be opaque. Here is the sequence we follow and roughly when you should expect to see something.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[11px] left-0 right-0 h-[2px] bg-slate-200 dark:bg-white/10 z-0" />
            
            {months.map((m, i) => (
              <div key={i} className="relative z-10">
                <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-[#0a0d14] border-4 border-yellow-500 mb-6" />
                <div className="text-yellow-500 text-sm font-bold mb-2">{m.time}</div>
                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-4">{m.title}</h4>
                <ul className="space-y-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-slate-500 dark:text-slate-400 text-sm flex gap-2">
                      <span className="text-slate-600">-</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoPricing() {
  const plans = [
    {
      name: "Local",
      target: "Single location or small service area businesses competing in the map pack.",
      price: "$1,600",
      features: ["Technical monitoring and fixes", "Google Business Profile management", "Two content pieces monthly", "Local citations and review strategy", "6 developer hours monthly", "Dashboard and monthly review"],
      btn: "Get an audit",
      popular: false
    },
    {
      name: "Growth",
      target: "National reach, competitive keywords, and a site that needs technical work as well as content.",
      price: "$3,400",
      features: ["Includes everything in Local, plus", "Full technical SEO program", "Four content pieces monthly", "Digital PR and link acquisition", "Conversion testing on key pages", "15 developer hours monthly", "Quarterly strategy reset"],
      btn: "Request a proposal",
      popular: true
    },
    {
      name: "Ecommerce and enterprise",
      target: "Large catalogs, multiple markets, or sites where crawl budget is a real constraint.",
      price: "$6,200",
      features: ["Includes everything in Growth, plus", "Log file analysis and crawl management", "Category and faceted navigation strategy", "International and hreflang setup", "Six or more content pieces monthly", "30 developer hours monthly", "Review calls every two weeks"],
      btn: "Talk to us",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">Pricing</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Three SEO plans. Media budget not included, because we do not resell it.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Every plan includes developer hours, which is the part most agencies leave out and then blame you for not implementing.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col relative ${p.popular ? 'border-2 border-cyan-500 lg:scale-105 shadow-2xl z-10' : 'border border-slate-200 dark:border-white/10'}`}>
              {p.popular && (
                <div className="absolute -top-4 left-6 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Recommended starting point</div>
              )}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{p.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 h-10">{p.target}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">per month</span>
              </div>
              
              <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">Includes</div>
              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((feat, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 items-start">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className={j === 0 && p.name !== "Local" ? "font-semibold text-slate-800 dark:text-slate-200" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="#audit" className={`w-full py-4 rounded-xl text-center font-bold transition-colors ${p.popular ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10'}`}>
                {p.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
