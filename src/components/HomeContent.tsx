"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  Compass,
  Database,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  MessageSquareText,
  MousePointer2,
  PenLine,
  PhoneCall,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Share2,
  Megaphone,
  ShoppingBag,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { DigitalMarketingAccordion } from "@/components/DigitalMarketingAccordion";
import { FilterablePortfolio } from "@/components/FilterablePortfolio";
import { LeadForm } from "@/components/LeadForm";
import { SITE, STATS, PRICING } from "@/lib/site";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const inView = { once: true, margin: "-40px" } as const;

const partners = ["Google Ads", "Local Services Ads", "WordPress", "Shopify", "Google Analytics", "Search Console"];

const stats = [
  [STATS.clients, "clients served"],
  [STATS.years, "years in business"],
  [STATS.roas, "average campaign ROAS"],
  [STATS.retention, "client retention"],
];

const services: IconItem[] = [
  {
    title: "SEO",
    description: "Technical optimization, keyword strategy, content structure and ranking improvements built for long-term organic growth.",
    icon: Search,
    href: "/digital-marketing/seo",
  },
  {
    title: "AI SEO",
    description: "Answer engine and generative engine optimization that helps your brand show up clearly in AI-powered search.",
    icon: Globe2,
    href: "/digital-marketing/ai-seo",
  },
  {
    title: "Google Business Profile",
    description: "Profile setup, local visibility improvements, review strategy and map pack optimization.",
    icon: MapPin,
    href: "/digital-marketing/google-business-profile",
  },
  {
    title: "Content Writing",
    description: "SEO-friendly website copy, blogs, landing pages and service content written to inform and convert.",
    icon: PenLine,
    href: "/digital-marketing/content-writing",
  },
  {
    title: "Google Ads",
    description: "High-intent search campaigns, landing page alignment, conversion tracking and budget-focused optimization.",
    icon: BarChart3,
    href: "/ppc/google-ads",
  },
  {
    title: "Local Services Ads",
    description: "Earn the Google Verified badge, appear above regular search ads and pay per qualified lead, not per click.",
    icon: ShieldCheck,
    href: "/ppc/local-services-ads",
  },
  {
    title: "Custom Web Apps",
    description: "Custom web applications, portals and dashboards built with React, Next.js and Node.js.",
    icon: Layers3,
    href: "/website-development/custom-web-apps",
  },
  {
    title: "WordPress Development",
    description: "Professional WordPress websites with responsive layouts, fast performance, clean UX and easy content management.",
    icon: Code2,
    href: "/website-development/wordpress",
  },
  {
    title: "Shopify and E-commerce",
    description: "Online stores on Shopify or WooCommerce with fast product pages, clean checkout and tracking that matches your sales.",
    icon: ShoppingBag,
    href: "/website-development/ecommerce-website",
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, post design, Reels and community management for Instagram, Facebook, LinkedIn and TikTok.",
    icon: Share2,
    href: "/digital-marketing/social-media-marketing",
  },
  {
    title: "Social Media Ads",
    description: "Meta, TikTok and LinkedIn ad campaigns with creative testing, retargeting and Conversions API tracking.",
    icon: Megaphone,
    href: "/ppc/social-media-ads",
  },
  {
    title: "Video Production",
    description: "2D explainers, 3D product animation and AI video for ads, social and your website.",
    icon: Clapperboard,
    href: "/video-production",
  },
];

const platforms: IconItem[] = [
  { title: "Web", description: "Next.js, WordPress, Shopify, landing pages, speed, UX", icon: Layers3 },
  { title: "Search", description: "SEO, GEO, schema, local ranking, keyword research", icon: Globe2 },
  { title: "Ads", description: "Google Ads, Local Services Ads, retargeting, creative testing", icon: Target },
  { title: "Data", description: "GA4, GTM, dashboards, attribution, reporting rhythm", icon: Database },
];

const caseMetrics = [
  [STATS.roas, "average campaign ROAS"],
  [STATS.cplReduction, "lower cost per lead"],
  [STATS.adSpend, "ad spend managed"],
];

const stack = [
  "Conversion copy",
  "Wireframes",
  "UI systems",
  "Technical SEO",
  "Schema",
  "GA4",
  "GTM",
  "CRO tests",
  "Landing pages",
  "Search ads",
  "Local Services Ads",
  "Reporting",
];

const auditItems: Array<[string, LucideIcon]> = [
  ["Message clarity", MessageSquareText],
  ["Conversion friction", MousePointer2],
  ["Ranking opportunities", Compass],
  ["Tracking accuracy", ShieldCheck],
];

const packages = [
  {
    name: "Launch",
    price: "From $1,450",
    description: "For new brands that need a credible site and a clean launch.",
    features: ["Premium-theme WordPress site", "Basic SEO setup", "Analytics install", "Launch checklist"],
  },
  {
    name: "Growth",
    price: `From ${PRICING.wordpressCustom}`,
    description: "For teams ready to improve visibility, traffic and leads.",
    features: ["Custom website build", "SEO roadmap", "Ad campaign setup", "Monthly reporting"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For ambitious companies that need a managed growth partner.",
    features: ["Full funnel strategy", "Content engine", "CRO experiments", "Weekly optimization"],
  },
];

const planNames = packages.map((p) => p.name);

const faqs = [
  ["How fast can we start?", "Most projects begin with a discovery sprint within 3 to 5 business days of sign-off."],
  [
    "How soon will we see results?",
    "Paid ads usually bring first leads in 2 to 4 weeks, with cost per lead stabilizing around weeks 4 to 6. SEO takes 3 to 6 months to compound, though technical fixes can show gains within 30 days.",
  ],
  ["Do you only build in Next.js?", "No. We choose the platform around the business goal, team workflow and growth plan. Many builds are WordPress."],
  ["Can you improve an existing site?", "Yes. We can audit, redesign, optimize or rebuild depending on the current foundation."],
  ["Do you manage ads after launch?", "Yes. Paid media, SEO, reporting and optimization can be handled as ongoing monthly retainers."],
];

const inputClass =
  "h-[52px] w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 px-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400";
const labelClass = "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200";
// Vertical padding on inline links enlarges the tap area to 44px without changing line height.
const inlineLink = "py-3 font-medium text-cyan-700 dark:text-cyan-400 underline-offset-4 hover:underline";

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      transition={{ duration: 0.45, ease }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-4xl text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-5 text-pretty text-base leading-8 sm:text-lg text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  );
}

function IconPanel({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;
  const body = (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-slate-950 shadow-lg shadow-cyan-900/30 transition-transform duration-500 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 sm:mb-3 sm:text-xl">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
        {item.href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  );
  const className =
    "group relative block h-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/40 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.05, ease }}
      className="h-full"
    >
      {item.href ? (
        <Link href={item.href} className={className}>
          {body}
        </Link>
      ) : (
        <div className={className}>{body}</div>
      )}
    </motion.div>
  );
}

export function HomeContent() {
  const [plan, setPlan] = useState("");

  // Preselect the plan when arriving via /?plan=Growth#contact.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("plan");
    if (fromUrl && planNames.includes(fromUrl)) setPlan(fromUrl);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-hidden">
        <section id="home" className="relative px-5 pb-16 pt-28 sm:px-6 md:min-h-[92vh] lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(245,158,11,0.10),transparent_26%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_78%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(245,158,11,0.15),transparent_26%),linear-gradient(180deg,#080b14_0%,#05070d_78%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 dark:via-cyan-300/60 to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5, ease }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                {SITE.name}: growth for service businesses
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Web design, SEO and Google Ads that bring in{" "}
                <span className="text-cyan-600 dark:text-cyan-400">qualified leads</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                {SITE.name} is a digital growth studio building fast websites, SEO programs and paid campaigns that turn attention into measurable leads.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-200"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/[0.06] px-6 py-4 text-base font-semibold text-slate-900 dark:text-white transition hover:border-cyan-400/60"
                >
                  <Play className="h-5 w-5" aria-hidden="true" />
                  See Sample Builds
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="relative hidden md:block"
              aria-hidden="true"
            >
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 dark:shadow-black/35 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Growth Command Center</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Averages across managed accounts</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Healthy</div>
                </div>
                <div className="grid gap-4 py-4 sm:grid-cols-3">
                  {caseMetrics.map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 p-4">
                      <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 p-4">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Channel Mix</p>
                      <LineChart className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                    </div>
                    <div className="space-y-4">
                      {[
                        ["Organic", "78%", "bg-teal-600"],
                        ["Paid", "64%", "bg-amber-500"],
                        ["Local", "52%", "bg-rose-500"],
                      ].map(([label, value, color]) => (
                        <div key={label}>
                          <div className="mb-2 flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: value }}
                              transition={{ duration: 0.5, delay: 0.3, ease }}
                              className={`h-full rounded-full ${color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Revenue Path</p>
                      <TrendingUp className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                    </div>
                    <div className="flex h-44 items-end gap-2">
                      {[36, 52, 44, 68, 61, 84, 74, 92, 88, 100].map((height, index) => (
                        <motion.div
                          key={height + index}
                          initial={{ height: 8 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.03, ease }}
                          className="flex-1 rounded-t-md bg-cyan-400 dark:bg-cyan-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Platforms we work with" className="border-y border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-5 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span key={partner} className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {partner}
              </span>
            ))}
          </div>
        </section>

        <section aria-label="Key figures" className="bg-white dark:bg-[#05070d] px-5 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045] p-5 sm:p-6"
              >
                <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{value}</p>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07111b] px-5 py-16 sm:px-6 md:py-20 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={fadeUp} transition={{ duration: 0.45, ease }}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">About Us</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">One team for your website, search and ads.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                At {SITE.name}, we build websites as part of a complete growth system. Our specialists connect{" "}
                <Link href="/website-development/wordpress" className={inlineLink}>WordPress development</Link> with data-driven{" "}
                <Link href="/digital-marketing/seo" className={inlineLink}>SEO</Link>,{" "}
                <Link href="/ppc/google-ads" className={inlineLink}>Google Ads</Link> and{" "}
                <Link href="/ppc/local-services-ads" className={inlineLink}>Local Services Ads</Link>.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We also help you get found in AI search with{" "}
                <Link href="/digital-marketing/ai-seo" className={inlineLink}>AI SEO</Link>, publish useful{" "}
                <Link href="/digital-marketing/content-writing" className={inlineLink}>content</Link> and win local searches with a strong{" "}
                <Link href="/digital-marketing/google-business-profile" className={inlineLink}>Google Business Profile</Link>.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Years in business", STATS.years],
                  ["Client retention", STATS.retention],
                  ["Countries served", STATS.countries],
                  ["Ad spend managed", STATS.adSpend],
                ].map(([label, value]) => (
                  <div key={label} className="border-l-2 border-cyan-400/60 pl-4">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.45, ease }}
              className="relative hidden h-full w-full sm:block max-lg:max-w-md max-lg:mx-auto"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg">
                    <Target className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" aria-hidden="true" />
                    <p className="font-semibold text-slate-900 dark:text-white">Precision Targeting</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Google Ads and LSA</p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg">
                    <Code2 className="h-10 w-10 text-amber-500 dark:text-amber-300 mb-4" aria-hidden="true" />
                    <p className="font-semibold text-slate-900 dark:text-white">Fast Builds</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">WordPress and Next.js</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg">
                    <Compass className="h-10 w-10 text-emerald-600 dark:text-emerald-300 mb-4" aria-hidden="true" />
                    <p className="font-semibold text-slate-900 dark:text-white">Search Authority</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">SEO, AEO and GEO</p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg">
                    <PenLine className="h-10 w-10 text-rose-500 dark:text-rose-300 mb-4" aria-hidden="true" />
                    <p className="font-semibold text-slate-900 dark:text-white">Brand Voice</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Strategic content</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="relative px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)] dark:bg-[linear-gradient(180deg,#05070d,#07111b)]" />
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Services"
              title="Everything your digital presence needs to look premium and perform."
              description={`${SITE.name} connects brand clarity, interface quality, search visibility, paid traffic and reporting into one practical growth system.`}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {services.map((service, index) => (
                <IconPanel key={service.title} item={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <DigitalMarketingAccordion />

        <section className="bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Coverage"
              title="Built for the channels where buyers already make decisions."
              description="Your website, search presence, ads and analytics are treated as one connected operating system."
            />
            <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 lg:grid-cols-4">
              {platforms.map((platform, index) => (
                <IconPanel key={platform.title} item={platform} index={index} />
              ))}
            </div>
          </div>
        </section>

        <FilterablePortfolio />

        <section className="bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Audit</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Start with the leaks, not the guesswork.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                The first sprint reviews positioning, UX, speed, tracking, search coverage and campaign economics so the redesign solves the right problem.
              </p>
            </div>
            <div className="grid gap-3">
              {auditItems.map(([label, AuditIcon]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045] p-4">
                  <div className="flex items-center gap-3">
                    <AuditIcon className="h-5 w-5 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
                  </div>
                  <BadgeCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-[#07111b] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Stack"
              title="Modern execution across strategy, design, web, search, ads and measurement."
              description="Every deliverable is practical, connected and built to make the next business decision easier."
            />
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Pricing"
              title="Simple starting points, shaped around your actual growth stage."
              description="Choose a focused build, a growth package or a managed partnership when you need ongoing optimization."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-3xl border p-6 ${pkg.featured ? "border-cyan-400/60 bg-cyan-300/10 shadow-2xl shadow-cyan-950/10" : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045]"}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pkg.name}</h3>
                    {pkg.featured ? <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">Popular</span> : null}
                  </div>
                  <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{pkg.price}</p>
                  <p className="mt-4 min-h-[56px] text-sm leading-7 text-slate-600 dark:text-slate-300">{pkg.description}</p>
                  <ul className="mt-7 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Check className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/?plan=${pkg.name}#contact`}
                    scroll={false}
                    onClick={() => {
                      setPlan(pkg.name);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition ${
                      pkg.featured
                        ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                        : "border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white hover:border-cyan-400"
                    }`}
                  >
                    {pkg.name === "Scale" ? "Talk to us" : "Get started"}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 dark:bg-[#07111b] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">FAQ</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Answers before the first call.</h2>
              <Link href="/faq" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-cyan-700 dark:text-cyan-400 hover:underline">
                See all FAQs
              </Link>
            </div>
            <div className="space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.045] p-5">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {question}
                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.055)_38%,rgba(245,158,11,0.12))] p-1 shadow-2xl shadow-black/10 dark:shadow-black/30">
            <div className="grid gap-8 rounded-[1.85rem] bg-white/[0.85] dark:bg-slate-950/[0.82] p-6 backdrop-blur-xl lg:grid-cols-[1fr_0.85fr] lg:p-10">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Request a proposal</p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Ready for a website that looks premium and sells clearly?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Share your current site, market and goals. We will map a practical first sprint for design, SEO, ads and tracking.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CircleDollarSign className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    ROI-focused plans
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    Clear reporting
                  </span>
                </div>
                <div className="mt-8 flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:gap-6">
                  <a href={`mailto:${SITE.email}`} className="inline-flex min-h-[44px] items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-300">
                    <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    {SITE.email}
                  </a>
                  {SITE.phone ? (
                    <a href={SITE.phoneHref || `tel:${SITE.phone}`} className="inline-flex min-h-[44px] items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-300">
                      <PhoneCall className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                      {SITE.phone}
                    </a>
                  ) : null}
                </div>
              </div>
              <LeadForm source="Homepage proposal" className="relative grid gap-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/[0.06] p-5">
                <div>
                  <label htmlFor="home-name" className={labelClass}>Name</label>
                  <input id="home-name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="home-email" className={labelClass}>Email</label>
                  <input id="home-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="home-website" className={labelClass}>Website (optional)</label>
                  <input id="home-website" name="website" type="text" inputMode="url" autoComplete="url" className={inputClass} placeholder="yourcompany.com" />
                </div>
                <div>
                  <label htmlFor="home-plan" className={labelClass}>Package of interest</label>
                  <select id="home-plan" name="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className={inputClass}>
                    <option value="">Not sure yet</option>
                    {packages.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name} ({p.price})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="home-message" className={labelClass}>What do you want to improve?</label>
                  <textarea
                    id="home-message"
                    name="message"
                    className="min-h-[128px] w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 p-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder="Goals, timeline, budget range"
                  />
                </div>
                <button type="submit" className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                  Request Proposal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </LeadForm>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
