"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    week: "Week 1",
    title: "Access and audit",
    desc: "Accounts handed over, full review of analytics, ad accounts, site speed and competitors.",
  },
  {
    week: "Week 2",
    title: "Findings and forecast",
    desc: "You get the written audit plus a model showing expected cost per acquisition and break even point.",
  },
  {
    week: "Week 3",
    title: "Fix the foundation",
    desc: "Tracking rebuilt, speed issues cleared, first landing pages briefed and built.",
  },
  {
    week: "Week 4",
    title: "Launch and first review",
    desc: "Campaigns live alongside the pages built for them. Dashboard handed over, first review booked.",
  },
];

export function OnboardingTimeline() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl bg-[#0f1115] rounded-3xl p-10 md:p-16 border border-slate-100 dark:border-white/5 shadow-2xl">
        <div className="max-w-2xl mb-20">
          <p className="text-amber-400 font-bold text-sm tracking-wide uppercase mb-4">Onboarding</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Your first thirty days, week by week.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            We do not touch your campaigns in week one. Diagnosis comes first, and you see it before anything changes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-3 left-0 w-full h-px bg-slate-100 dark:bg-slate-800" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div className="w-6 h-6 rounded-full bg-[#0f1115] flex items-center justify-center mb-8 -mt-3">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                </div>
                
                <p className="text-amber-400 text-sm font-bold mb-3">{item.week}</p>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
