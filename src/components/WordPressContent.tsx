"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Layout, Code, Server, Search } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { MobileCollapse } from "@/components/WordPressSections2";
import { STATS } from "@/lib/site";

const inputClass =
  "w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors";
const labelClass = "text-xs font-medium text-slate-600 dark:text-slate-400";

export function WordPressHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { name: "Website Development", path: "/website-development" },
            { name: "WordPress", path: "/website-development/wordpress" },
          ]}
          className="mb-8"
        />
      </div>
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
            WordPress Development
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            WordPress websites,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 font-serif italic pr-2">
              built lean.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            From fast template builds to fully custom themes and headless WordPress, every site we deliver is built lean, easy for your team to edit and built to pass Core Web Vitals.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link href="#estimate" className="rounded-full bg-cyan-500 dark:bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 dark:hover:bg-white transition-colors">
              Get an Estimate
            </Link>
            <Link href="#build-options" className="rounded-full border border-slate-200 dark:border-white/20 px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              See Build Options
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">Trusted by {STATS.clients} clients</p>
        </motion.div>

        {/* Right Form */}
        <motion.div id="estimate" className="scroll-mt-28" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
            <h2 className="text-2xl font-bold mb-6">Get a Custom Estimate</h2>
            <LeadForm source="WordPress estimate" id="estimate-form" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="wp-first-name" className={labelClass}>First name *</label>
                  <input id="wp-first-name" name="first_name" type="text" required autoComplete="given-name" className={inputClass} placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="wp-last-name" className={labelClass}>Last name</label>
                  <input id="wp-last-name" name="last_name" type="text" autoComplete="family-name" className={inputClass} placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="wp-email" className={labelClass}>Email address *</label>
                <input id="wp-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="john@company.com" />
              </div>
              <div className="space-y-1">
                <label htmlFor="wp-website" className={labelClass}>Current website (optional)</label>
                <input id="wp-website" name="website" type="text" autoComplete="url" className={inputClass} placeholder="https://..." />
              </div>
              <div className="space-y-1">
                <label htmlFor="wp-budget" className={labelClass}>Project budget</label>
                <select id="wp-budget" name="budget" defaultValue="" className={`${inputClass} text-slate-700 dark:text-slate-300`}>
                  <option value="" disabled>Select a range...</option>
                  <option value="Under $1,500">Under $1,500</option>
                  <option value="$1,500 to $5,000">$1,500 to $5,000</option>
                  <option value="$5,000 to $10,000">$5,000 to $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="wp-details" className={labelClass}>Project details (optional)</label>
                <textarea id="wp-details" name="project_details" rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your project goals..." />
              </div>
              <button type="submit" className="w-full min-h-[44px] bg-cyan-500 dark:bg-cyan-400 hover:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold rounded-xl px-4 py-4 transition-colors mt-2">
                Request My Estimate
              </button>
            </LeadForm>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const reasons = [
  { title: "Fast loading", desc: "Lean code and a performance budget agreed up front, which helps both visitors and SEO." },
  { title: "Hardened security", desc: "Fewer plugins and sensible permissions mean fewer ways in." },
  { title: "Room to grow", desc: "A clean structure that takes new pages, sections and features without breaking." },
  { title: "Easy to edit", desc: "A block library and admin set up around how your team actually works." },
];

const features = [
  { icon: Zap, title: "Core Web Vitals", desc: "Built to pass Core Web Vitals. We target 90+ Lighthouse performance on custom builds." },
  { icon: Code, title: "Semantic HTML5", desc: "Clean, accessible markup that search engines and screen readers both understand." },
  { icon: Shield, title: "Hardened security", desc: "Login protection, automated backups and strict file permissions built in." },
  { icon: Layout, title: "ACF block library", desc: "Flexible content blocks using Advanced Custom Fields, so your team can build pages without code." },
  { icon: Server, title: "Lean database", desc: "No leftover tables from deleted plugins. A lean database keeps the site fast." },
  { icon: Search, title: "Technical SEO", desc: "Schema markup, dynamic XML sitemaps and clean canonical URLs." },
];

export function WordPressHighlights() {
  return (
    <>
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Four reasons our WordPress sites stay fast</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl border-t-2 border-t-cyan-400">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Built for performance from the start.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Whichever build you choose, every line of code has a job to do.</p>
          </div>

          <MobileCollapse>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feat, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mb-6">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </MobileCollapse>
        </div>
      </section>
    </>
  );
}
