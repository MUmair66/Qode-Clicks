"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const categories = ["All", "WordPress", "Custom", "Apps", "Ecommerce"];

// Sample builds that show the range of work we design and develop.
// Imagery is illustrative. Replace with real client projects once approved for publication.
const projects = [
  {
    id: 1,
    title: "Fintech Mobile App",
    category: "Apps",
    image: "/projects/fintech-app.jpg",
    desc: "A secure, mobile-first banking experience with clear onboarding and account insights.",
  },
  {
    id: 2,
    title: "Fashion Ecommerce Store",
    category: "Ecommerce",
    image: "/projects/fashion-store.jpg",
    desc: "Premium storefront concept with a fast, simple checkout and rich product pages.",
  },
  {
    id: 3,
    title: "Law Firm Website",
    category: "WordPress",
    image: "/projects/law-firm.jpg",
    desc: "A professional, fast-loading WordPress site built around consultation requests.",
  },
  {
    id: 4,
    title: "SaaS Analytics Dashboard",
    category: "Custom",
    image: "/projects/saas-dashboard.jpg",
    desc: "React-based analytics dashboard with real-time reporting and role-based access.",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    category: "Custom",
    image: "/projects/real-estate.jpg",
    desc: "Custom Next.js platform for property listings, search filters and inquiry routing.",
  },
  {
    id: 6,
    title: "Creative Agency Portfolio",
    category: "WordPress",
    image: "/projects/agency-portfolio.jpg",
    desc: "Headless WordPress build with smooth page transitions and an easy editing workflow.",
  },
];

export function FilterablePortfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 md:py-20 lg:px-8 border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-1 mb-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true">
            <Sparkles className="h-6 w-6 fill-current" />
            <Sparkles className="h-4 w-4 fill-current opacity-70" />
            <Sparkles className="h-3 w-3 fill-current opacity-40" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Sample builds</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            The kind of work we design and build
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Sample concepts across WordPress, custom builds, apps and ecommerce. Imagery is illustrative; ask us for live client examples in your industry.
          </p>
        </div>

        {/* Filter pills: one horizontally scrollable row on small screens */}
        <div className="mb-10 md:mb-12 -mx-5 px-5 overflow-x-auto sm:mx-0 sm:px-0 md:flex md:justify-center [scrollbar-width:none]">
          <div className="inline-flex flex-nowrap items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-1.5" role="group" aria-label="Filter sample builds">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                aria-pressed={activeTab === category}
                className={`relative min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === category ? "text-slate-950 font-bold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-300"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal swipe carousel. md and up: 3-column grid. */}
        <motion.div
          layout
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] sm:w-[60%] md:w-auto"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} sample build`}
                    width={800}
                    height={533}
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 80vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="rounded-full bg-white/90 dark:bg-slate-950/80 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{project.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-2 text-center text-xs text-slate-500 md:hidden">Swipe to see more →</p>
      </div>
    </section>
  );
}
