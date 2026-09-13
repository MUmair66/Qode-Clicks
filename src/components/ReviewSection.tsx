"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function ReviewSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-white dark:bg-[#05070d] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.1),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Client Success</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Don't just take our word for it.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8">
              We partner with ambitious brands to engineer growth systems that deliver measurable, scalable results month after month.
            </p>
            
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">95%</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Retention Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$5M+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Ad Spend Managed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 z-0">
              <Quote className="w-24 h-24 text-cyan-900/40" />
            </div>
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-10 md:p-12 rounded-3xl shadow-2xl">
              <div className="flex gap-1 mb-8 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-slate-900 dark:text-white font-medium leading-relaxed mb-10">
                "QodeClick completely transformed our digital strategy. They didn't just build a website; they engineered a lead generation machine. Our cost per acquisition dropped by 40% in the first three months."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-900 flex items-center justify-center text-xl font-bold text-cyan-300 border border-cyan-700/50">
                  MC
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-lg">Marcus Chen</p>
                  <p className="text-cyan-400 text-sm">CMO, TechFlow Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
