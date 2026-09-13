"use client";

import { motion } from "framer-motion";
import { Search, Globe2, Code2, BarChart3, Megaphone, MapPin, PenLine, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedServiceCard } from "@/components/AnimatedServiceCard";
import { OnboardingTimeline } from "@/components/OnboardingTimeline";
import { ReviewSection } from "@/components/ReviewSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
const services = [
  {
    title: "SEO",
    description: "Technical optimization, keyword strategy, content structure, and ranking improvements built for long-term organic growth.",
    icon: Search,
  },
  {
    title: "AEO/GEO",
    description: "Answer Engine and Generative Engine Optimization that helps your brand appear clearly in AI-powered discovery.",
    icon: Globe2,
  },
  {
    title: "WordPress Development",
    description: "Professional WordPress websites with responsive layouts, fast performance, clean UX, and easy content management.",
    icon: Code2,
  },
  {
    title: "Google Ads",
    description: "High-intent search campaigns, landing page alignment, conversion tracking, and budget-focused optimization.",
    icon: BarChart3,
  },
  {
    title: "Meta Ads",
    description: "Facebook and Instagram campaigns designed around creative testing, retargeting, and predictable lead flow.",
    icon: Megaphone,
  },
  {
    title: "GMB Optimization",
    description: "Google Business Profile setup, local visibility improvements, review strategy, and map-pack optimization.",
    icon: MapPin,
  },
  {
    title: "Content Writing",
    description: "SEO-friendly website copy, blogs, landing pages, and service content written to inform and convert.",
    icon: PenLine,
  },
  {
    title: "Social Media Marketing",
    description: "Content planning, platform positioning, campaign ideas, and social execution for stronger brand awareness.",
    icon: Share2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-5 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-sm mb-6">
              Our Capabilities
            </span>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
              Services Designed for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Measurable Impact
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We don't just execute tasks. We build interconnected digital ecosystems where design, search, and paid media work together to drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900 dark:text-white tracking-tight">Our Core Services</h2>
            <p className="mt-5 text-lg text-slate-500 dark:text-slate-400">Everything you need to capture attention, acquire leads, and scale your brand.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedServiceCard key={service.title} item={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section / Bento Grid */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900 dark:text-white tracking-tight">The Growth Stack</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl">A closer look at the core pillars that turn your digital presence into a revenue engine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-cyan-900/30 to-slate-900 p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Code2 className="w-48 h-48 text-cyan-300" />
              </div>
              <div className="relative z-10">
                <span className="text-cyan-300 font-semibold tracking-wider text-sm uppercase">Development</span>
                <h3 className="text-3xl font-bold mt-2">Next-Gen Web Architecture</h3>
              </div>
              <p className="relative z-10 text-slate-600 dark:text-slate-300 max-w-md">Lightning-fast, accessible, and conversion-optimized websites built on modern frameworks to ensure you never lose a lead to load times.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-purple-900/30 to-slate-900 p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <BarChart3 className="w-32 h-32 text-purple-300" />
              </div>
              <div className="relative z-10">
                <span className="text-purple-300 font-semibold tracking-wider text-sm uppercase">Acquisition</span>
                <h3 className="text-2xl font-bold mt-2">Precision Ads</h3>
              </div>
              <p className="relative z-10 text-slate-600 dark:text-slate-300 text-sm mt-4">Data-driven campaigns across Google and Meta that target high-intent buyers.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-emerald-900/30 to-slate-900 p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute -top-8 -right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Globe2 className="w-32 h-32 text-emerald-300" />
              </div>
              <div className="relative z-10">
                <span className="text-emerald-300 font-semibold tracking-wider text-sm uppercase">Visibility</span>
                <h3 className="text-2xl font-bold mt-2">Search Authority</h3>
              </div>
              <p className="relative z-10 text-slate-600 dark:text-slate-300 text-sm mt-4">Dominating search results with technical SEO and Generative Engine Optimization.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-amber-900/30 to-slate-900 p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <PenLine className="w-40 h-40 text-amber-300" />
              </div>
              <div className="relative z-10">
                <span className="text-amber-300 font-semibold tracking-wider text-sm uppercase">Brand Voice</span>
                <h3 className="text-3xl font-bold mt-2">Content That Converts</h3>
              </div>
              <p className="relative z-10 text-slate-600 dark:text-slate-300 max-w-md">We craft compelling narratives, landing pages, and social media content that builds trust and guides users seamlessly towards conversion.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <OnboardingTimeline />
      <PricingSection />
      <ReviewSection />
      <FaqSection />

      {/* Advanced CTA Section */}
      <section className="px-5 py-32 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-[#05070d]">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/40 p-10 md:p-20 text-center shadow-2xl backdrop-blur-3xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25),transparent_70%)]" />
            
            {/* Glowing orbs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />

            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 mb-6">
              Start Scaling Today
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Ready to engineer your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                growth engine?
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Stop losing leads to bad UX and poor search visibility. Let's build a digital ecosystem that turns traffic into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-white hover:scale-105"
              >
                Book Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 h-full w-full bg-white/20 blur-md transform translate-y-full group-hover:-translate-y-full transition-transform duration-500" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-white/20 bg-transparent px-8 py-4 text-base font-bold text-slate-900 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
            
            <p className="mt-8 text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently accepting 2 new clients this month
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
