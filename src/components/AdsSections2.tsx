"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export function AdsIncluded() {
  const items = [
    { title: "Search term review", desc: "Weekly, with negatives added. This is the unglamorous work that stops half of all wasted spend." },
    { title: "Conversion tracking maintained", desc: "Checked monthly and after every site change. Tracking that breaks silently is the most expensive failure in paid media." },
    { title: "Bid strategy and budget pacing", desc: "Tested rather than set once. Budgets paced so you are not dark for the last week of the month." },
    { title: "Ad copy and creative testing", desc: "New variants monthly with enough volume behind them to call a winner honestly." },
    { title: "Landing pages built for you", desc: "Developer hours included. A campaign that needs a dedicated page gets one, usually within the same sprint." },
    { title: "Competitor and auction monitoring", desc: "Impression share tracked against named competitors so you know when someone new enters your auction." },
    { title: "Live dashboard", desc: "Looker Studio pulling Google Ads and GA4 into one view you can open any time, not just at month end." },
    { title: "Monthly review call", desc: "Forty five minutes on what moved, what did not, and what we are changing next month about it." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">What we do monthly</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Eight things included in every account.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 border-b border-slate-200 dark:border-white/10 pb-8">
              <div className="mt-1 shrink-0">
                <Check className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsPricing() {
  const plans = [
    {
      name: "Starter",
      target: "Single channel accounts, usually Search only, for businesses starting properly.",
      price: "$900",
      media: "Media spend up to $8,000 per month",
      includes: "Includes",
      features: ["Search campaigns managed", "Weekly search term review", "Conversion tracking maintained", "Monthly ad copy testing", "4 developer hours monthly", "Dashboard and monthly review call"],
      btn: "Get a quote",
      popular: false
    },
    {
      name: "Growth",
      target: "Multi campaign accounts running Search, Shopping and Performance Max together.",
      price: "$1,600",
      media: "Media up to $20,000, then 12% of spend above",
      includes: "Everything in Starter, plus",
      features: ["Shopping, Performance Max and remarketing", "Merchant Center and feed management", "Landing page build and CRO testing", "Server side conversion tracking", "12 developer hours monthly", "Quarterly strategy reset"],
      btn: "Request a proposal",
      popular: true
    },
    {
      name: "Multi location",
      target: "Franchises, clinic groups and businesses running several markets at once.",
      price: "From $3,200",
      media: "Or 10% of spend above $60,000, whichever is higher",
      includes: "Everything in Growth, plus",
      features: ["Geographic campaign separation", "Maps and store visit campaigns", "Location level reporting and budgets", "Multi market feed management", "30 developer hours monthly", "Fortnightly review calls"],
      btn: "Talk to us",
      popular: false
    }
  ];

  return (
    <section className="pt-24 pb-12 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Management fees, separate from your media.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Media is billed directly to your own card on your own ad accounts. We never mark it up, resell it or take platform commission.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col relative ${p.popular ? 'border-2 border-blue-500 scale-105 shadow-2xl z-10' : 'border border-slate-200 dark:border-white/10'}`}>
              {p.popular && (
                <div className="absolute -top-4 left-6 bg-blue-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most accounts</div>
              )}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{p.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 h-10">{p.target}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                {p.price.includes("$") && !p.price.includes("From") && <span className="text-slate-500 text-sm ml-2">per month</span>}
              </div>
              
              <div className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs py-2 px-4 rounded-lg mb-8">
                {p.media}
              </div>
              
              <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">{p.includes}</div>
              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((feat, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 items-start">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="#contact" className={`w-full py-4 rounded-xl text-center font-bold transition-colors ${p.popular ? 'bg-blue-600 text-slate-900 dark:text-white hover:bg-blue-500' : 'bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10'}`}>
                {p.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsOneOffWork() {
  const work = [
    { title: "Google Ads account audit", desc: "Structure, waste, bidding and landing page review with a prioritised action plan", price: "Free" },
    { title: "Account rebuild", desc: "Full restructure of an existing account, campaigns, ad groups and tracking", price: "$1,400" },
    { title: "Conversion tracking rebuild", desc: "Measurement plan, GA4 and Tag Manager, server side events and dashboard", price: "$2,200" },
    { title: "Merchant Center and feed setup", desc: "Diagnostics cleared, feed rules, custom labels and promotions", price: "$980" },
    { title: "Landing page build", desc: "Single high converting page, written, designed, built and tracked", price: "$1,400" },
    { title: "Google Business Profile optimization", desc: "Categories, services, photos, posts, review workflow and Maps readiness", price: "$420" }
  ];

  return (
    <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="grid grid-cols-[1fr_2fr_auto] gap-4 p-6 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 font-bold text-slate-900 dark:text-white text-sm">
            <div>One-off work</div>
            <div>What it covers</div>
            <div className="text-right">Price</div>
          </div>
          <div className="divide-y divide-white/5">
            {work.map((w, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-4 p-6 items-center hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-slate-900 dark:text-white text-sm">{w.title}</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{w.desc}</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm text-right">{w.price}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-500 text-xs mt-6 max-w-3xl leading-relaxed">
          Three month minimum, then rolling with thirty days notice. Ad accounts stay under your billing from day one and you keep them if you leave. Local Services Ads are priced separately on <span className="text-blue-400 cursor-pointer">their own page</span>.
        </p>
      </div>
    </section>
  );
}
