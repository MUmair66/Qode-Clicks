"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenLine, Target, TrendingUp, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery and Audit",
    desc: "We analyze your digital presence, competitors, and audience to find the highest-leverage growth opportunities.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy and Planning",
    desc: "We build a prioritized roadmap across SEO, paid media and content so every dollar has a clear job.",
    icon: Target,
  },
  {
    num: "03",
    title: "SEO and Content",
    desc: "We optimize your site architecture and publish content that captures high-intent organic traffic. SEO typically compounds over 3 to 6 months.",
    icon: PenLine,
  },
  {
    num: "04",
    title: "Paid Campaigns",
    desc: "We launch targeted Google Ads and Local Services Ads with structured testing. First leads typically arrive within 2 to 4 weeks.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Optimization",
    desc: "We track user behavior, adjust bids and refine landing pages to lower cost per lead, which usually stabilizes around weeks 4 to 6.",
    icon: BarChart3,
  },
  {
    num: "06",
    title: "Scaling and Growth",
    desc: "Once the numbers hold, we scale budget into what works and expand to new channels step by step.",
    icon: TrendingUp,
  },
];

export function DigitalMarketingAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-white dark:bg-[#05070d] px-5 py-14 md:py-20 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Our Methodology</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Digital Marketing Ecosystem</h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">A clear six-step framework for turning your website into a steady source of qualified leads.</p>
        </div>

        <div className="flex flex-col lg:flex-row h-[640px] sm:h-[700px] lg:h-[450px] w-full gap-3">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={step.num}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                tabIndex={0}
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer p-4 md:p-6 border transition-colors ${
                  isHovered ? "bg-cyan-50 border-cyan-200 dark:bg-cyan-950/40 dark:border-cyan-900/50" : "bg-slate-50 border-slate-200 dark:bg-white/[0.03] dark:border-white/10"
                }`}
              >
                {/* Number at Top Left */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{step.num}</span>
                </div>
                
                {/* Unhovered vertical text at the bottom */}
                <motion.div
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 left-0 right-0 hidden lg:flex items-center justify-center pointer-events-none"
                >
                  <span aria-hidden="true" className="text-xl font-bold text-slate-900 dark:text-white" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {step.title}
                  </span>
                </motion.div>
                
                {/* Unhovered horizontal text at the right for mobile */}
                <motion.div
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-y-0 right-4 left-16 flex lg:hidden items-center pointer-events-none"
                >
                  <span aria-hidden="true" className="text-base md:text-lg font-bold text-slate-900 dark:text-white truncate">
                    {step.title}
                  </span>
                </motion.div>

                {/* Hovered content in the center */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.15 : 0 }}
                  className={`absolute inset-0 flex-col justify-center px-6 md:px-10 ${isHovered ? "flex" : "sr-only"}`}
                >
                  <div className="max-w-md mx-auto w-full pt-10 lg:pt-0">
                    <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">{step.title}</h3>
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{step.desc}</p>
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
