"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenLine, Target, TrendingUp, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We analyze your digital presence, competitors, and audience to find the highest-leverage growth opportunities.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "We build a customized roadmap across SEO, Paid Media, and Content to ensure maximum ROI for every dollar spent.",
    icon: Target,
  },
  {
    num: "03",
    title: "SEO & Content",
    desc: "We optimize your site architecture and produce high-converting content to capture high-intent organic traffic.",
    icon: PenLine,
  },
  {
    num: "04",
    title: "Paid Campaigns",
    desc: "We launch targeted Google and Meta ads with rigorous A/B testing to drive qualified leads immediately.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Optimization",
    desc: "We continuously track user behavior, adjust bids, and refine landing pages to lower CPA and increase conversions.",
    icon: BarChart3,
  },
  {
    num: "06",
    title: "Scaling & Growth",
    desc: "Once we find the winning formula, we scale the budget and expand to new channels for exponential growth.",
    icon: TrendingUp,
  },
];

export function DigitalMarketingAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Our Methodology</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Digital Marketing Ecosystem</h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">A proven framework to turn your website into a predictable revenue engine.</p>
        </div>

        <div className="flex flex-col lg:flex-row h-[600px] lg:h-[450px] w-full gap-3">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            // Note: Not using icons in the center to match the purple design precisely, or we can keep it above the title.
            // In the purple image there is no icon. I will remove the icon from the center to match the "purple pic" perfectly.

            return (
              <motion.div
                key={step.num}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer p-6 border border-slate-200 dark:border-white/10 ${
                  isHovered ? "bg-cyan-950/40" : "bg-slate-50 dark:bg-white/[0.03]"
                }`}
              >
                {/* Number at Top Left */}
                <div className="absolute top-6 left-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{step.num}</span>
                </div>
                
                {/* Unhovered vertical text at the bottom */}
                <motion.div
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 left-0 right-0 hidden lg:flex items-center justify-center pointer-events-none"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {step.title}
                  </h3>
                </motion.div>

                {/* Hovered content in the center */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
                  className={`absolute inset-0 flex-col justify-center px-10 ${isHovered ? "flex" : "hidden"}`}
                >
                  <div className="max-w-md mx-auto w-full">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
