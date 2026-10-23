"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Search, MapPin, BadgeCheck, TrendingUp, Users, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { STATS } from "@/lib/site";

const adServices = [
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Capture high-intent traffic the exact moment your customers are searching for your services. We build and optimize Search, Display and Performance Max campaigns.",
    icon: Search,
    href: "/ppc/google-ads",
    linkLabel: "Learn more about Google Ads",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    features: ["Search and Display campaigns", "Performance Max", "Retargeting", "Conversion tracking"],
  },
  {
    id: "local-services-ads",
    title: "Local Services Ads (Google Verified)",
    description: "Appear above every other ad on Google with a Google Verified badge, and pay per qualified lead rather than per click. For eligible local service categories in the US and UK.",
    icon: BadgeCheck,
    href: "/ppc/local-services-ads",
    linkLabel: "Learn more about Local Services Ads",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10",
    features: ["Google Verified badge", "Pay-per-lead model", "Top of search results", "Bad lead disputes filed weekly"],
  },
  {
    id: "meta-ads",
    title: "Social Media Ads",
    description: "Meta (Facebook and Instagram), TikTok and LinkedIn campaigns that generate demand with targeted creative, then retarget the people who showed interest. Management from $750/mo.",
    icon: Users,
    href: "/ppc/social-media-ads",
    linkLabel: "Explore Social Media Ads",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    features: ["Meta, TikTok and LinkedIn Ads", "Lookalike and retargeting audiences", "Creative A/B testing", "Pixel and Conversions API setup"],
  },
  {
    id: "local-ads",
    title: "Local Ads",
    description: "Win your local market. We combine radius-targeted campaigns, Maps placements and Local Services Ads so your business captures the demand in your neighborhood.",
    icon: MapPin,
    href: "/contact#contact-form",
    linkLabel: "Ask us about local campaigns",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-500/10",
    features: ["Radius targeting", "Local map pack ads", "Location assets", "Store visit tracking"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export function AdsHubHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pt-28 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <Breadcrumbs className="mb-8 flex justify-center" items={[{ name: "Paid Advertising", path: "/ppc" }]} />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-6 uppercase tracking-wider">
            Paid Advertising
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Stop guessing. Start{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 font-serif italic pr-2">
              scaling your revenue.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We run data-driven advertising campaigns across Google and Meta. From capturing high-intent searchers to generating demand with visual creative, we turn ad spend into measurable profit. {STATS.adSpend} in ad spend managed so far.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#ad-platforms" className="rounded-full bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
              Explore ad platforms <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact#contact-form" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Get a free audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AdsHubPlatforms() {
  return (
    <section id="ad-platforms" className="scroll-mt-24 py-14 md:py-20 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">Our expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Mastering every ad channel</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            The right message, on the right platform, at the right time. Pick a channel below to see how we get the most from it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {adServices.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{service.description}</p>

              <div className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Target className="w-4 h-4 text-cyan-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={service.href} className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {service.linkLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${service.bgColor} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsHubMethod() {
  const pillars = [
    { icon: BarChart3, title: "Data over intuition", desc: "We don't guess what works. Conversion tracking, analytics and continuous A/B testing decide the strategy." },
    { icon: ShieldCheck, title: "Eliminate wasted spend", desc: "Negative keyword lists, audience exclusions and strict bid management keep every dollar pointed at real customers." },
    { icon: TrendingUp, title: "Built to scale", desc: "Once we hit your target cost per acquisition (CPA), we scale budget to grow lead volume without sacrificing quality." },
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />
            <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="space-y-8">
                {pillars.map((p) => (
                  <div key={p.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">Our methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">A holistic approach to paid acquisition.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Running ads is easy. Running profitable ads is hard. We look at the entire funnel: the ad creative and copy, the landing page experience, and the conversion tracking that proves what worked.
            </p>
            <ul className="space-y-4 mb-8">
              {["Cross-channel strategy alignment", "Landing page optimization", "Custom dashboard reporting", "Direct line to your account manager"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact#contact-form" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Speak with our paid media lead <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
