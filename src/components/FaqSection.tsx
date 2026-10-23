"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

export type Faq = { question: string; answer: string };

// General agency questions. Service pages pass their own page-specific list.
export const generalFaqs: Faq[] = [
  {
    question: "How long does it take to see results?",
    answer: "Paid campaigns usually produce first leads within 2 to 4 weeks and settle into a stable cost per lead around weeks 4 to 6. SEO typically takes 3 to 6 months to compound, though technical fixes can show gains in the first 30 days.",
  },
  {
    question: "Do you guarantee results?",
    answer: "No agency can honestly guarantee rankings or conversion numbers, because Google and your market decide those. We commit to a clear plan, agreed targets, transparent reporting and the work itself.",
  },
  {
    question: "Who will be working on my account?",
    answer: "A senior specialist leads your account and is your main point of contact, supported by our developers, SEO specialists and media buyers. Work is done in-house, not passed to subcontractors.",
  },
  {
    question: "Can we start with just a website redesign?",
    answer: "Yes. Many partnerships start with a website project. We build a fast, conversion-focused WordPress or Next.js site first, then move into ongoing SEO or paid media if it makes sense.",
  },
  {
    question: "What is your reporting process?",
    answer: "You get a live Looker Studio dashboard with your core numbers (traffic, leads, cost per lead, ROAS) and a short written or video update each month explaining what changed and what comes next.",
  },
];

export function FaqSection({ faqs = generalFaqs, title = "Common questions." }: { faqs?: Faq[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-14 md:py-20 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">FAQ</p>
          <h2 className="text-4xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "bg-white dark:bg-white/[0.04]" : "bg-transparent hover:bg-white dark:hover:bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? "text-cyan-600 dark:text-cyan-300" : "text-slate-900 dark:text-white"}`}>
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300" : "bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
