"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "For Paid Ads (Google/Meta), you will start seeing traffic and initial lead data within the first week of launch. For SEO and Organic Growth, it typically takes 3-6 months to see significant compounding results, though technical fixes can provide quick wins in the first 30 days."
  },
  {
    question: "Do you guarantee results?",
    answer: "We guarantee our process, transparency, and output quality. While no agency can guarantee specific algorithmic rankings or conversion numbers, our historical data shows a 95% success rate in lowering CPA and increasing qualified traffic for clients who follow our complete growth stack."
  },
  {
    question: "Who will be working on my account?",
    answer: "You will have a dedicated Account Director who acts as your fractional CMO, supported by a specialized team of media buyers, SEO technical leads, and conversion copywriters. We don't outsource to junior offshore teams."
  },
  {
    question: "Can we start with just a website redesign?",
    answer: "Yes. Many of our long-term growth partnerships start with a 'Fix the Foundation' project. We build a high-performance, conversion-optimized Next.js or WordPress site first, and then transition into an ongoing acquisition retainer."
  },
  {
    question: "What is your reporting process?",
    answer: "You receive a live, 24/7 Looker Studio dashboard that tracks your core KPIs (Traffic, CPA, ROAS, Leads). We also provide a recorded loom video every week explaining the data, what we changed, and what the plan is for next week."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-5 py-32 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                className={`border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "bg-slate-100 dark:bg-white/[0.04]" : "bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? "text-cyan-600 dark:text-cyan-300" : "text-slate-900 dark:text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-cyan-900/50 text-cyan-600 dark:text-cyan-300" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
