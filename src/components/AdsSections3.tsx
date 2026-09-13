"use client";

import { motion } from "framer-motion";

export function AdsProcess() {
  const phases = [
    { num: 1, title: "Audit & Discovery", desc: "We review your historical data, identify wasted spend, and learn your actual margins to set realistic CPA or ROAS targets.", week: "Week 1" },
    { num: 2, title: "Tracking & Foundation", desc: "Fixing broken conversion tracking, setting up server-side tagging, and ensuring data accuracy before spending a single dollar.", week: "Week 1 to 2" },
    { num: 3, title: "Restructure & Build", desc: "Segmenting campaigns by intent and margin. We rewrite ad copy, restructure ad groups, and launch new dedicated landing pages.", week: "Week 2 to 4" },
    { num: 4, title: "Launch & Pacing", desc: "Going live with the new structure. We manage budgets closely and monitor search terms daily to aggressively cut out negative keywords.", week: "Week 4 to 6" },
    { num: 5, title: "Testing & Scaling", desc: "Rolling out new creative variants, testing bid strategies against manual limits, and gradually increasing spend on winning campaigns.", week: "Week 6 to 8" },
    { num: 6, title: "Ongoing Optimization", desc: "Routine maintenance, competitor auction monitoring, quarterly strategy resets, and scaling into new channels like YouTube or Demand Gen.", week: "Ongoing" },
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="text-blue-500 font-semibold text-sm mb-4 uppercase tracking-wider">Our Methodology</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Six phases. Predictable execution.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            A structured approach to taking over an account, fixing the leaks, and scaling what works. We don't guess, we test.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 font-bold text-sm mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                {phase.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{phase.desc}</p>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-auto">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{phase.week}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
