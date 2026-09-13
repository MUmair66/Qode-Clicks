"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Search, Code2, MapPin, Share2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "FinTech SEO & Lead Gen",
    category: "SEO, AEO & Google Ads",
    metric: "320% Traffic Increase",
    desc: "Dominated generic search terms using AEO optimization and scaled lead volume via targeted Google Ads. We overhauled their site architecture and launched a comprehensive content strategy.",
    color: "bg-cyan-900/40",
    border: "border-cyan-500/30",
    icon: Search,
    accent: "text-cyan-600 dark:text-cyan-300"
  },
  {
    title: "E-Commerce Replatforming",
    category: "WordPress & Meta Ads",
    metric: "4.8x ROAS",
    desc: "Built a lightning-fast custom WordPress storefront and scaled revenue through creative-tested Meta Ads. Cart abandonment dropped by 45% post-launch.",
    color: "bg-amber-900/40",
    border: "border-amber-500/30",
    icon: Code2,
    accent: "text-amber-300"
  },
  {
    title: "Local Enterprise Dominance",
    category: "GMB & Content Writing",
    metric: "Top 3 Map Pack",
    desc: "Captured hyper-local search intent through comprehensive GMB optimization and localized service content, generating a steady stream of qualified inbound calls.",
    color: "bg-emerald-50 dark:bg-emerald-900/40",
    border: "border-emerald-500/30",
    icon: MapPin,
    accent: "text-emerald-300"
  },
  {
    title: "SaaS Brand Activation",
    category: "Social Media & SEO",
    metric: "5M+ Impressions",
    desc: "Established category authority through a cohesive social media strategy and foundational technical SEO, leading to a massive increase in brand searches.",
    color: "bg-rose-900/40",
    border: "border-rose-500/30",
    icon: Share2,
    accent: "text-rose-300"
  },
];

export function AdvancedPortfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={containerRef} className="bg-white dark:bg-[#05070d] relative py-24 pb-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Our Portfolio</p>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl">Real Growth.<br />Engineered for Leaders.</h2>
      </div>

      <div className="mt-16 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 flex flex-col gap-24 relative">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          const range = [index * 0.25, 1];
          // Each card shrinks slightly when the user scrolls past it
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          const Icon = project.icon;

          return (
            <div key={index} className="h-screen flex items-center justify-center sticky top-0">
              <motion.div
                style={{ scale, top: `calc(10vh + ${index * 30}px)` }}
                className={`relative w-full max-w-4xl h-[500px] rounded-[2rem] border ${project.border} ${project.color} p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-md origin-top`}
              >
                {/* Decorative Elements */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-slate-100 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="h-14 w-14 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center backdrop-blur-xl border border-slate-200 dark:border-white/10">
                      <Icon className={`h-7 w-7 ${project.accent}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-wider text-slate-600 dark:text-slate-300 uppercase">{project.category}</p>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-slate-200 dark:bg-white/10 border ${project.border} backdrop-blur-md`}>
                    <span className={`text-sm font-bold ${project.accent}`}>{project.metric}</span>
                  </div>
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-end">
                  <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-lg">
                    {project.desc}
                  </p>
                  <div className="flex justify-end">
                    <Link href="#contact" className="group flex items-center gap-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white dark:bg-white dark:text-slate-950 px-6 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-colors">
                      View Case Study
                      <div className="h-8 w-8 rounded-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-colors">
                         <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
