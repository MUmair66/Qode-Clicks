"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Foundation",
    price: "$2,500",
    period: "/mo",
    description: "Perfect for local businesses needing search visibility and a solid digital footprint.",
    features: [
      "Technical SEO Audit & Fixes",
      "Google Business Profile Optimization",
      "Local Citation Building",
      "4 High-Quality Blog Posts/mo",
      "Basic Analytics Dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$4,800",
    period: "/mo",
    description: "For scaling brands ready to dominate search and acquire customers predictably.",
    features: [
      "Everything in Foundation",
      "Advanced AEO/GEO Strategy",
      "Google Ads Campaign Management",
      "Meta Ads Creative Testing",
      "Conversion Rate Optimization (CRO)",
      "Weekly Strategy Calls",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated digital ecosystem management for established market leaders.",
    features: [
      "Full-Funnel Omnichannel Strategy",
      "Custom WordPress/Next.js Dev",
      "Enterprise SEO & Content Engine",
      "Advanced Attribution Modeling",
      "Dedicated Growth Team",
      "24/7 Priority Support",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-32 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Clear pricing, no surprises.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Choose a retainer that aligns with your growth goals. All plans include full transparency and dedicated reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-[2rem] p-8 md:p-10 ${
                pkg.highlighted 
                  ? "bg-gradient-to-b from-cyan-950/80 to-slate-900 border-2 border-cyan-400 shadow-2xl shadow-cyan-900/20 transform lg:-translate-y-4" 
                  : "bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-white/20 transition-colors"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 min-h-[40px]">{pkg.description}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                <span className="text-slate-500 font-medium">{pkg.period}</span>
              </div>
              
              <Link
                href="/#contact"
                className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all mb-10 ${
                  pkg.highlighted
                    ? "bg-cyan-400 text-slate-950 hover:bg-white"
                    : "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.highlighted ? "text-cyan-400" : "text-slate-500"}`} />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
