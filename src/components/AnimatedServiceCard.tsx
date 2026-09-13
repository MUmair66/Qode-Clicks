"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function AnimatedServiceCard({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      
      {/* Decorative circle */}
      <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20 group-hover:blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 dark:text-white shadow-lg shadow-cyan-900/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-300">
          {item.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
          {item.description}
        </p>

        {/* Hover reveal line */}
        <div className="mt-6 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
