"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Layout, Code, Server, Search, CheckCircle2, Lock, Workflow, Cpu, Activity, BarChart, FileCode, Users } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";

export default function CustomDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-28 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
              Premier Web Engineering
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Websites are not digital brochures. They are <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
              >
                revenue engines.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              Stop losing customers to slow, clunky websites. We build scalable custom web applications, SaaS platforms, and enterprise portals that work securely, look beautiful, and scale infinitely.
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <Link href="#estimate" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2">
                Request an Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#05070d] bg-slate-100 dark:bg-slate-800" />
                  ))}
                </div>
                Trusted by 100+ brands
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="estimate">
            <div className="bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-cyan-400" /> Get a Custom Estimate
              </h3>
              <form action="https://formsubmit.co/info@qodeclicks.com" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">First Name</label>
                    <input name="name" type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Last Name</label>
                    <input name="name" type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Address</label>
                  <input name="email" type="email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Company / Website (Optional)</label>
                  <input name="name" type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors" placeholder="https://..." />
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold rounded-xl px-4 py-4 transition-colors mt-2 flex justify-center items-center gap-2">
                  <Activity className="w-5 h-5" /> Analyze My Project Needs
                </button>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                  Your data is protected. We respect your privacy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
        
        {/* Quick Stats below hero */}
        <div className="mx-auto max-w-7xl mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-slate-200 dark:border-white/10 pt-10">
            <div>
                <h4 className="text-4xl font-bold text-cyan-400">$100k+</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Avg. client revenue <br/> increase post-launch</p>
            </div>
            <div>
                <h4 className="text-4xl font-bold text-cyan-400">99+</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Performance <br/> Score Guarantee</p>
            </div>
            <div>
                <h4 className="text-4xl font-bold text-cyan-400">0-Day</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Vulnerability <br/> track record</p>
            </div>
        </div>
      </section>

      {/* Four Reasons Section */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 uppercase tracking-wider text-sm mb-2">TALK TO EXPERTS</h2>
            <h3 className="text-4xl lg:text-5xl font-bold">Four reasons you should transition <br/> your running business tools</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-3xl">
              Stop limiting your business potential with software that dictates how you work. Build tools that work how you work.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { icon: FileCode, title: "No more \"cookie-cutter\" apps", desc: "Stop compromising your processes to fit into off-the-shelf software. Build tools customized exactly for your operational needs." },
              { icon: BarChart, title: "Higher ROI, 0 monthly fees", desc: "Stop paying endless subscription fees per user. Own your technology and eliminate escalating SaaS costs as your team grows." },
              { icon: Workflow, title: "Unprecedented Workflow & Tools Shape", desc: "Build tools around your business, not the other way around. Seamlessly integrate your existing processes into a unified dashboard." },
              { icon: Lock, title: "Your Database Security", desc: "Your data is your asset. Self-hosted or securely deployed databases mean you never have to worry about third-party data breaches." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">0{i+1}. {item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">FOUNDATION METRICS</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Three pillars sustained in base <br/> monitor custom apps vs. extras.</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">When you opt out of custom solutions, you're not just saving upfront costs—you're accumulating long-term technical debt and workflow bottlenecks.</p>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-6xl font-bold text-cyan-400 w-32 shrink-0">45%</div>
                <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-4">
                        Productivity Bottlenecks
                        <span className="text-xs bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 font-medium tracking-wider uppercase">SEVERE IMPACT</span>
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Fixing clunky manual processes, repetitive data entry, and workarounds around off-the-shelf software consumes nearly half of employee time.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Data Entry Delays</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Manual CSV Exports/Imports</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">System Glitches</span>
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-6xl font-bold text-cyan-400 w-32 shrink-0">35%</div>
                <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-4">
                        Limitation in Standard off-the-shelf Tools
                        <span className="text-xs bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 font-medium tracking-wider uppercase">MODERATE IMPACT</span>
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">You hit a wall where the software simply cannot do what you need. Feature requests are ignored by vendors, leaving your business stuck with inadequate tools.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Feature Blocks</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Vendor Lock-in</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Slow Bug Fixes</span>
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-6xl font-bold text-cyan-400 w-32 shrink-0">20%</div>
                <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-4">
                        Data Breaches & Security Risk
                        <span className="text-xs bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 font-medium tracking-wider uppercase">CRITICAL IMPACT</span>
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Using popular shared platforms makes you a target for mass automated attacks. Custom infrastructure significantly reduces your attack surface.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Shared Hosting</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">Plugin Vulnerabilities</span>
                        <span className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">3rd Party API Exposure</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get with every custom build */}
      <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-white/[0.01] border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">ENGINEERING STANDARDS</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What you get with every custom build</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">Enterprise-grade architecture included as standard, not as an add-on.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Code, title: "Advanced React, Next.js & Node Architecture", desc: "Built with the modern stack used by global tech giants. Lightning fast, heavily optimized, and highly scalable." },
              { icon: Lock, title: "API & Internal Database Lead Governance", desc: "Full control over your data structures. Secure APIs built exclusively for your applications." },
              { icon: Server, title: "Headless CMS & Serverless Architecture", desc: "Decoupled front-end and back-end ensures blazing fast delivery and ultimate flexibility." },
              { icon: Activity, title: "Analytics & Full Conversion Tracking", desc: "Pre-integrated with your analytics suite to monitor user paths and optimize conversion funnels." },
              { icon: Search, title: "SEO Operation API Generator", desc: "Programmatic SEO capabilities out of the box. Generate dynamic pages optimized for search engines." },
              { icon: Shield, title: "30-Day Post-Launch Developer Warranty", desc: "Complete peace of mind with dedicated support post-launch to ensure everything runs perfectly." },
            ].map((feat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mt-1 shrink-0">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{feat.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">THE ARCHITECTURE DILEMMA</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">When exactly custom tools are needed.</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">Not everyone needs custom software. But if you hit these scenarios, it's time to upgrade.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { id: "A", title: "Unconventional Data Workflow", desc: "Your business processes don't map cleanly to standard CRM/ERP systems. You need a system that understands your unique logic." },
              { id: "B", title: "Multi-Platform Backend & Third-Party Platforms", desc: "You rely on pulling data from 5 different APIs and need a centralized hub to manipulate and view it holistically." },
              { id: "C", title: "Platform as a Service (PaaS)", desc: "You are building a proprietary tool intended to be monetized and sold to your own customers or partners." },
              { id: "D", title: "Client Portals & Subscription Access", desc: "You need a deeply integrated, highly secure portal for clients to access sensitive documents, metrics, or services." },
            ].map((scenario, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 relative overflow-hidden group">
                <div className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-3">SCENARIO {scenario.id}</div>
                <h4 className="text-xl font-bold mb-3">{scenario.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{scenario.desc}</p>
                <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 opacity-20 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three custom engineering tiers.<br/>Zero hidden hourly retainers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Tier 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 01</div>
              <h3 className="text-xl font-bold mb-2">Marketing Web Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">High-performance corporate sites demanding CMS capabilities, technical SEO, and conversion tools.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$3,500 <span className="text-lg text-slate-500 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Custom Headless CMS Setup</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Advanced On-page SEO</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> CI/CD Deployment Pipeline</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Inquire Web Platform</button>
            </div>

            {/* Tier 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-cyan-950/60 to-slate-900 border-2 border-cyan-400 relative transform md:-translate-y-4 shadow-xl shadow-cyan-900/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
              <div className="text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 02</div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Web App & Portal</h3>
              <p className="text-slate-300 text-sm mb-6">Interactive applications, dashboards, and automated workflows driving core business logic.</p>
              <div className="text-4xl font-bold text-white mb-2">$8,500 <span className="text-lg text-slate-400 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Secure user authentication</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Database & API architecture</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> 3rd Party Integrations (Stripe, Twilio)</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Roles and permissions</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-white transition-colors font-bold">Inquire App Engine</button>
            </div>

            {/* Tier 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 03</div>
              <h3 className="text-xl font-bold mb-2">Enterprise Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Large scale multi-tenant architectures, SaaS MVPs, and complex internal infrastructure.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$12,000+ <span className="text-lg text-slate-500 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Multi-tenant SaaS architecture</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Microservices API orchestration</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> SOC2 Compliance readiness</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Inquire Enterprise Build</button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Bottom Solid CTA */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10 flex items-center justify-center gap-4">
              <Zap className="w-10 h-10 text-cyan-400" /> Ready to engineer a faster web engine?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Book a call with our technical director to discuss your custom development requirements. We'll map out the architecture and provide a detailed technical proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="#estimate" className="bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20">
                Get a Technical Estimate
              </Link>
              <Link href="/contact" className="bg-blue-700 text-white border border-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                Book Technical Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
