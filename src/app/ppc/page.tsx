"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Search, MapPin, BadgeCheck, TrendingUp, Users, MousePointerClick, BarChart3, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";

export default function AdsParentPage() {
  const adServices = [
    {
      id: "google-ads",
      title: "Google Ads",
      description: "Capture high-intent traffic the exact moment your customers are searching for your services. We build highly optimized search, display, and performance max campaigns.",
      icon: Search,
      href: "/services/google-ads",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      features: ["Search & Display Campaigns", "Performance Max", "Retargeting", "Conversion Tracking"]
    },
    {
      id: "meta-ads",
      title: "Meta Ads (Facebook & IG)",
      description: "Build brand awareness and generate leads with hyper-targeted visual campaigns across Facebook and Instagram based on user demographics, interests, and behaviors.",
      icon: Users,
      href: "/services/meta-ads",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      features: ["Advanced Audience Targeting", "Lookalike Audiences", "Creative A/B Testing", "Pixel Integration"]
    },
    {
      id: "google-guarantee",
      title: "Google Guarantee",
      description: "Earn the ultimate trust badge from Google. Build instant credibility and appear at the very top of search results, paying only for qualified phone calls and leads.",
      icon: BadgeCheck,
      href: "/google-guarantee",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      features: ["Google Trust Badge", "Pay-Per-Lead Model", "Top of Search Results", "Dispute Resolution"]
    },
    {
      id: "local-ads",
      title: "Local Ads",
      description: "Dominate your local market. We deploy geo-fenced campaigns and Google Guaranteed to ensure your business captures the demand right in your neighborhood.",
      icon: MapPin,
      href: "/services/local-ads",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      features: ["Geo-fencing", "Local Map Pack Ads", "Radius Targeting", "Store Visit Tracking"]
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
              Omnichannel Paid Advertising
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Stop guessing. Start <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
              >
                scaling your revenue.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We engineer data-driven advertising campaigns across Google and Meta. From capturing high-intent searchers to generating demand with visual creatives, we turn ad spend into measurable profit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#ad-platforms" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2">
                Explore Ad Platforms <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Get a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ad Platforms Grid */}
      <section id="ad-platforms" className="py-24 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">OUR EXPERTISE</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Mastering Every Ad Channel</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              We deploy the right message, on the right platform, at exactly the right time. Select a channel below to learn how we maximize its potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adServices.map((service, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />
              <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Data Over Intuition</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">We don't guess what works. We use advanced analytics, conversion tracking, and continuous A/B testing to let the data dictate our strategy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Eliminate Wasted Spend</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Through aggressive negative keyword lists, audience exclusion, and strict bid management, we ensure every dollar goes towards acquiring actual customers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Built to Scale</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Once we hit your target Cost Per Acquisition (CPA), we strategically scale your budget to maximize lead volume without sacrificing quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">OUR METHODOLOGY</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">A holistic approach to paid acquisition.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Running ads is easy. Running profitable ads is hard. We look at the entire funnel—from the initial ad creative and copy, to the landing page experience, and all the way through the final conversion tracking.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Cross-channel strategy alignment",
                  "Landing page optimization (CRO)",
                  "Custom dashboard reporting",
                  "Direct line to your account manager"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                Speak with a Growth Strategist <ArrowRight className="w-4 h-4" />
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
              <Zap className="w-10 h-10 text-cyan-400" /> Ready to dominate your market?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Stop letting your competitors steal your customers. Get a free, comprehensive audit of your current ad accounts and discover where you're leaving money on the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20">
                Claim Your Free Audit
              </Link>
              <Link href="/contact" className="bg-blue-700 text-white border border-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
