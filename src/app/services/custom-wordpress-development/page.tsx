"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Shield, Layout, Code, Server, Search } from "lucide-react";
import Link from "next/link";
import { BuildApproaches, SpecialistWork, BuildComparisonTable, SpeedCTA } from "@/components/WordPressSections";
import { SixPhasesProcess, EightThingsIncluded, WooCommerceCaseStudy, WorksWellWith } from "@/components/WordPressSections2";
import { FaqSection } from "@/components/FaqSection";
export default function WordPressPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* 1. Hero Section with Form */}
      <section className="relative pt-28 pb-20 lg:pt-28 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6">
              Premium Web Engineering
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Custom WordPress. <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
              >
                No page builders.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              We build lightning-fast, highly secure, and fully scalable WordPress websites coded from scratch. Say goodbye to bloated plugins, slow load times, and rigid templates.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="#estimate" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors">
                Get an Estimate
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#05070d] bg-slate-100 dark:bg-slate-800" />
                  ))}
                </div>
                Trusted by 50+ brands
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="estimate">
            <div className="bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
              <h3 className="text-2xl font-bold mb-6">Get a Custom Estimate</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">First Name</label>
                    <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Last Name</label>
                    <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Project Budget</label>
                  <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors text-slate-600 dark:text-slate-300 appearance-none">
                    <option value="">Select a range...</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Project Details</label>
                  <textarea rows={3} className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder="Tell us about your project goals..." />
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold rounded-xl px-4 py-4 transition-colors mt-2">
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Speed CTA from user image */}
      <SpeedCTA />

      {/* 2. Four Reasons Grid (Top Highlights) */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Four reasons to ditch the page builder</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lightning Fast", desc: "No bloated code means your site loads instantly, improving UX and SEO." },
              { title: "Bulletproof Security", desc: "Fewer plugins reduce vulnerabilities, keeping your data and business safe." },
              { title: "Endless Scalability", desc: "A clean architecture that grows with your business without breaking." },
              { title: "Tailored Backend", desc: "A custom admin panel designed specifically for your team's workflow." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl border-t-2 border-t-cyan-400 relative overflow-hidden group hover:bg-slate-800/50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Features Grid (2x3) */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built from the ground up for performance.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">We engineer WordPress themes from a blank canvas, ensuring every line of code serves a purpose.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Core Web Vitals", desc: "Guaranteed passing scores on Google's Core Web Vitals for better search rankings." },
              { icon: Code, title: "Semantic HTML5", desc: "Clean, accessible markup that search engines love and screen readers understand." },
              { icon: Shield, title: "Hardened Security", desc: "Custom login URLs, automated backups, and strict file permissions built-in." },
              { icon: Layout, title: "ACF Integration", desc: "Flexible content blocks using Advanced Custom Fields for easy content management." },
              { icon: Server, title: "Optimized Database", desc: "No left-over tables from deleted plugins. A lean database means a fast website." },
              { icon: Search, title: "Technical SEO", desc: "Schema markup, dynamic XML sitemaps, and optimized canonical architecture." },
            ].map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WooCommerceCaseStudy />
      <SixPhasesProcess />
      <BuildApproaches />
      <BuildComparisonTable />

      <EightThingsIncluded />
      <WorksWellWith />
      <SpecialistWork />

      {/* 6. Pricing Summary (WP specific) */}
      <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fixed scope, fixed price. No surprises.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Tier 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-2">Startup</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Perfect for small businesses needing a fast, professional presence.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8">$3,500+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Up to 5 custom pages</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Contact forms & maps</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Basic SEO setup</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Inquire</button>
            </div>

            {/* Tier 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-cyan-950/60 to-slate-900 border-2 border-cyan-400 relative transform md:-translate-y-4 shadow-xl shadow-cyan-900/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">For growing companies that need dynamic content and lead generation.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8">$7,500+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Up to 15 custom pages</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> 2 Custom Post Types</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Advanced animations</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> CRM integrations</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-white transition-colors font-bold">Inquire</button>
            </div>

            {/* Tier 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Complex platforms, large migrations, and headless architecture.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8">$15k+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Unlimited pages</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Multi-language support</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Custom API integrations</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Inquire</button>
            </div>

          </div>
        </div>
      </section>

      <FaqSection />


      {/* 7. Bottom Solid CTA */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
              Stop settling for slow templates.
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Book a call with our technical director to discuss your custom WordPress build and get a detailed proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="#estimate" className="bg-blue-50 text-blue-600 dark:bg-white dark:text-blue-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform">
                Get an Estimate
              </Link>
              <Link href="/#contact" className="bg-blue-700 text-slate-900 dark:text-white border border-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
