"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Wordpress", "Custom", "Apps", "Ecommerce"];

const projects = [
  {
    id: 1,
    title: "FinTech Mobile App",
    category: "Apps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    desc: "A sleek, secure mobile banking experience built for Gen Z users.",
  },
  {
    id: 2,
    title: "Luxury Fashion Store",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    desc: "High-end ecommerce platform with seamless checkout and 3D product views.",
  },
  {
    id: 3,
    title: "Corporate Law Firm",
    category: "Wordpress",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    desc: "A professional, fast-loading WordPress site focusing on lead generation.",
  },
  {
    id: 4,
    title: "SaaS Dashboard AI",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    desc: "React-based analytics dashboard with real-time AI insights and reporting.",
  },
  {
    id: 5,
    title: "Health & Fitness App",
    category: "Apps",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop",
    desc: "Cross-platform mobile application for workout tracking and diet plans.",
  },
  {
    id: 6,
    title: "Organic Food Market",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    desc: "Scalable Shopify headless storefront for a growing organic food brand.",
  },
  {
    id: 7,
    title: "Real Estate Portal",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    desc: "Custom built Next.js platform for property listings and virtual tours.",
  },
  {
    id: 8,
    title: "Creative Agency Portfolio",
    category: "Wordpress",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
    desc: "Award-winning headless WordPress build with WebGL animations.",
  }
];

export function FilterablePortfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4 text-cyan-300">
              <Sparkles className="h-6 w-6 fill-current" />
              <Sparkles className="h-4 w-4 fill-current opacity-70" />
              <Sparkles className="h-3 w-3 fill-current opacity-40" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Success Stories That Inspire
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition hover:bg-slate-100 dark:hover:bg-white/5"
          >
            View All Projects
          </Link>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-1.5 backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === category ? "text-slate-950 font-bold" : "text-slate-500 dark:text-slate-400 hover:text-white"
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

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:border-cyan-300/30 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="rounded-full bg-white/80 dark:bg-slate-950/80 px-3 py-1 text-xs font-medium text-cyan-500 dark:text-cyan-300 backdrop-blur-md border border-slate-200 dark:border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
