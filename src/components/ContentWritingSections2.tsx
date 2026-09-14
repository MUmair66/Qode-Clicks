"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ContentProcess() {
  const phases = [
    { num: "1", title: "Intent research", desc: "What the searcher actually wants, what currently ranks, and whether this is a query worth writing for at all.", time: "Day 1" },
    { num: "2", title: "Brief", desc: "Angle, structure, sources, internal links, word count and the point the piece has to make. You approve it.", time: "Day 1 to 2" },
    { num: "3", title: "Draft", desc: "Written by a person who has read the sources, with original examples rather than a paraphrase of the competition.", time: "Day 2 to 4", active: true },
    { num: "4", title: "Edit and fact check", desc: "A second person edits, verifies every claim and checks the piece delivers what the brief promised.", time: "Day 4 to 5" },
    { num: "5", title: "Optimise and publish", desc: "Meta, schema, internal links and formatting. We can publish it on your site or hand over the file.", time: "Day 5 to 6" },
  ];

  return (
    <section id="process" className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">How a piece gets made</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Five stages, and you see the brief before we write.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            The brief is where most content is won or lost. Approving it takes you ten minutes and prevents the rewrite that otherwise costs a week.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {phases.map((p, i) => (
            <div key={i} className={`rounded-xl p-6 ${p.active ? 'bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800' : 'bg-slate-50 dark:bg-slate-900/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4 ${p.active ? 'bg-cyan-600 text-white' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'}`}>
                {p.num}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.desc}</p>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-500">{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentRefreshing() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Refreshing</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Rewriting beats publishing more, most of the time.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A page that ranked in position four two years ago has a history, links and data behind it. Rewriting it is usually faster and cheaper than starting again, and almost no one does it on a schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Decay analysis", desc: "We pull every page losing impressions or slipping position over the last twelve months and rank them by how much traffic is recoverable.", tag: "Included in the free content audit" },
            { num: "02", title: "Rewrite, merge or delete", desc: "Some pages need updating, some need consolidating into one stronger page, and some should be removed because they are diluting everything else.", tag: "Merging is the most commonly missed action" },
            { num: "03", title: "Re-optimise against today", desc: "Search results change. A page written for what ranked in 2023 is competing against a page layout that no longer exists.", tag: "Cheaper per page than new commissions" }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm">
              <span className="text-3xl font-bold text-cyan-600 dark:text-cyan-500 mb-4 block leading-none tracking-tighter">{item.num}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{item.desc}</p>
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentPricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Steady publishing for businesses that need consistency more than volume.",
      price: "$520",
      extra: "4 pieces monthly, roughly 12% below piece rates",
      features: ["4 standard pieces monthly", "Briefs approved by you first", "Editor review on everything", "Meta, schema and internal links", "Published to your site", "Quarterly performance review"]
    },
    {
      name: "Growth",
      tag: "Most clients",
      desc: "Enough volume to build clusters rather than publish isolated pieces.",
      price: "$1,150",
      extra: "8 pieces plus social, roughly 20% below piece rates",
      features: ["8 pieces monthly, any mix of formats", "20 social posts monthly", "Topic cluster roadmap maintained", "2 content refreshes monthly", "Ad and email copy as needed", "Monthly review call"],
      highlight: true
    },
    {
      name: "Authority",
      desc: "Full content programme including long form and executive ghostwriting.",
      price: "$2,400",
      extra: "16 pieces plus long form, roughly 28% below piece rates",
      features: ["16 pieces monthly", "One long form asset per quarter", "Ghostwriting with monthly interview", "4 content refreshes monthly", "Digital PR and press support", "Fortnightly review calls"]
    }
  ];

  return (
    <section id="pricing" className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Pricing</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Per piece, not per word.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Paying by the word rewards padding. Every price includes research, the brief, the draft, a separate editor, fact checking, meta and schema, and one revision round.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 flex flex-col ${plan.highlight ? 'border-2 border-cyan-500 bg-white dark:bg-slate-900 shadow-xl relative' : 'border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50'}`}>
              {plan.tag && (
                <span className="absolute -top-3 left-8 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.tag}
                </span>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-2">per month</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-950 rounded-lg px-3 py-2 text-xs text-slate-600 dark:text-slate-400 mb-8">
                {plan.extra}
              </div>

              <span className="text-sm font-bold text-slate-900 dark:text-white mb-4 block">Includes</span>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="#quote" className={`w-full py-3.5 rounded-xl text-center text-sm font-bold transition-all ${plan.highlight ? 'bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400' : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'}`}>
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentResult() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-16 shadow-sm border border-slate-200 dark:border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300 mb-6">
                B2B SaaS, content and SEO
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ninety published posts and almost no traffic.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Written by a general agency from the top three results, with no clusters and no commercial pages behind any of it. We merged forty pieces into twelve, deleted twenty three, rewrote the rest around a proper cluster map, and built the pillar pages the supporting content should always have pointed at.
              </p>
              <Link href="#quote" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                Book a discovery call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid gap-4">
              {[
                { label: "Monthly organic sessions", was: "4,200", now: "17,300" },
                { label: "Organic demo requests", was: "31", now: "148" },
                { label: "Published pages", was: "90", now: "39" },
                { label: "Pages with any traffic", was: "11", now: "34" }
              ].map((stat, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-6 p-5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-white/5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{stat.label}</span>
                  <span className="text-sm text-slate-400 line-through decoration-slate-300 dark:decoration-slate-600">{stat.was}</span>
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 text-right min-w-[4rem]">{stat.now}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
