"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Shield, Zap, Code2, LineChart, Users } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";

export function AboutHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pt-28 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.1),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Breadcrumbs items={[{ name: "About Us", path: "/about-us" }]} className="mb-8 flex justify-center" />
          <p className="text-cyan-700 dark:text-cyan-400 font-bold text-sm mb-6 uppercase tracking-wider">About Qode Clicks</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] max-w-5xl mx-auto">
            We build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300">revenue</span>,<br /> not just for show.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are a digital performance agency specializing in <Link href="/website-development/wordpress" className="text-cyan-600 dark:text-cyan-400 hover:underline">WordPress development</Link>, <Link href="/digital-marketing/seo" className="text-cyan-600 dark:text-cyan-400 hover:underline">SEO</Link>, and <Link href="/ppc/google-ads" className="text-cyan-600 dark:text-cyan-400 hover:underline">paid media</Link>. We don't hide behind vanity metrics. We measure success by the bottom line.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#services" className="rounded-full bg-cyan-300 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-200 transition-colors text-lg inline-flex items-center gap-2">
              Explore our services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutStats() {
  const stats = [
    { value: "In-house", label: "Developers, SEO and media buyers" },
    { value: "Fixed price", label: "Written scope before work starts" },
    { value: "Monthly", label: "Reporting and review calls" },
    { value: "USA and Pakistan", label: "Where our team works" }
  ];

  return (
    <section className="py-16 px-5 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0d14] border-b border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-200 dark:divide-white/10 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-4">
              <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{s.value}</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutValues() {
  const values = [
    {
      icon: Target,
      title: "Data over opinions",
      desc: "Every design choice, keyword targeted, and ad placed is backed by data. We test, measure, and scale what works."
    },
    {
      icon: Shield,
      title: "Radical transparency",
      desc: "No black-box reporting. You see exactly where your budget goes, what we are working on, and why."
    },
    {
      icon: Code2,
      title: "Technical excellence",
      desc: "We don't rely on bloated plugins or cheap hacks. Our development is custom, scalable, and built for speed."
    },
    {
      icon: Zap,
      title: "Speed to execution",
      desc: "Because we have developers and marketers in-house, we implement changes in days, not months."
    }
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3 uppercase tracking-wider">Our Philosophy</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            How we operate.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            We built this agency because we were tired of the standard model: over-promising, under-delivering, and hiding behind impressions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <v.icon className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3 uppercase tracking-wider">The Story</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              Bridging the gap between engineering and marketing.
            </h2>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                Most agencies fall into two traps: they either build beautiful websites that nobody can find, or they drive massive traffic to pages that take ten seconds to load and never convert.
              </p>
              <p>
                We started Qode Clicks to fix that disconnect. We recognized that true performance requires both sides of the coin: elite technical infrastructure and aggressive, data-driven marketing.
              </p>
              <p>
                Today, our developers, SEO specialists and media buyers work as one in-house team across the USA and Pakistan. When an ad campaign needs a lightning-fast landing page, it gets built immediately. When an SEO strategy requires schema changes, it gets pushed to production without waiting for a third-party IT team.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 rounded-3xl transform rotate-3 scale-105" />
            <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 rounded-3xl p-10 relative z-10 shadow-2xl">
              <div className="grid gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <LineChart className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">Performance first</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Everything is tied back to revenue and lead generation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">In-house development</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">No outsourcing. Our engineers write the code that powers your campaigns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">Senior specialists</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Your account isn't handed off to a junior. You work directly with the experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

