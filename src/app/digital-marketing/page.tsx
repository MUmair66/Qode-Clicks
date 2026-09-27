"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Map, PenTool, Sparkles, TrendingUp, BarChart3, CheckCircle2, Zap, Globe, Target } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";

export default function DigitalMarketingParentPage() {
  const organicServices = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description: "Dominate Google search results. We build technical, on-page, and off-page SEO strategies that drive compounding organic traffic to your most valuable pages.",
      icon: Search,
      href: "/services/seo",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      features: ["Technical Audits", "Keyword Strategy", "Link Building", "Competitor Analysis"]
    },
    {
      id: "aeo-geo",
      title: "AI SEO",
      description: "Future-proof your brand for AI search. We optimize your content to be cited by ChatGPT, Google SGE (AI Overviews), and Claude (Generative Engine Optimization).",
      icon: Sparkles,
      href: "/services/aeo-geo",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      features: ["AI Search Readiness", "Entity Optimization", "Knowledge Graph", "Direct Answer Targeting"]
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description: "High-converting, authoritative content that ranks. Our expert writers produce blog posts, landing pages, and technical guides designed for both humans and algorithms.",
      icon: PenTool,
      href: "/services/content-writing",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      features: ["SEO Blog Posts", "Website Copywriting", "Content Refresh", "Topic Clusters"]
    },
    {
      id: "gmb-optimization",
      title: "Google Business Profile",
      description: "Own your local search presence. We fully optimize and manage your Google Business Profile so you show up in the Local Pack when nearby customers are searching.",
      icon: Map,
      href: "/services/gmb-optimization",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      features: ["Local Map Pack", "Review Management", "Local Citations", "Profile Updates"]
    }
  ];

  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
        
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
              Organic Growth Ecosystem
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Own the search results. <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
              >
                Today and tomorrow.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We build sustainable, compounding organic growth through technical SEO, authoritative content, local dominance, and forward-thinking AI engine optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2">
                Explore Organic Strategies <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Get an SEO Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Services Grid */}
      <section id="services" className="py-24 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">OUR EXPERTISE</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">The Complete Organic Playbook</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              From traditional search engines to modern AI chatbots, we ensure your business is the authority that gets recommended.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {organicServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <Target className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  Learn more about {service.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* Subtle background decoration */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${service.bgColor} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Methodology */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10" />
              <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Data-Backed Content</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">We don't write fluff. Every piece of content is engineered based on search intent, entity analysis, and competitive gap research.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Technical Foundation First</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Great content fails on a broken site. We ensure your website architecture, schema markup, and speed meet Google's highest technical standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Compounding ROI</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Unlike paid ads that stop the moment you turn them off, our organic strategies build equity over time, reducing your long-term customer acquisition cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">OUR METHODOLOGY</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Future-proofing your visibility.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                The search landscape is changing rapidly. With the rise of AI Overviews and chat-based search engines, traditional SEO is no longer enough. We blend traditional search optimization with modern Generative Engine Optimization (GEO).
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "In-depth technical architecture audits",
                  "Entity-based content clustering",
                  "Local authority and citation building",
                  "AI readiness and knowledge graph integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                Speak with an SEO Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA Section */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10 flex items-center justify-center gap-4">
              <Zap className="w-10 h-10 text-cyan-400" /> Ready to dominate organic search?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Stop relying solely on paid ads. Build a compounding growth engine that drives highly qualified traffic to your website month after month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20">
                Get Your Free SEO Audit
              </Link>
              <Link href="/contact" className="bg-blue-700 text-white border border-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors">
                Book a Growth Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
