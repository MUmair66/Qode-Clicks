"use client";

import { motion } from "framer-motion";
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
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  MousePointer2,
  PenLine,
  Play,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  PhoneCall,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { DigitalMarketingAccordion } from "@/components/DigitalMarketingAccordion";
import { FilterablePortfolio } from "@/components/FilterablePortfolio";
type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};





const partners = ["Google Ads", "Meta", "WordPress", "Shopify", "Analytics", "Search Console"];

const stats = [
  ["240+", "projects shipped"],
  ["38%", "avg. organic lift"],
  ["4.8x", "campaign ROAS"],
  ["21 days", "first sprint"],
];

const services: IconItem[] = [
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

const process = [
  ["01", "Diagnose", "We map your offer, audience, analytics, competitors, and current site friction."],
  ["02", "Design", "We build the message, page structure, conversion paths, and acquisition plan."],
  ["03", "Launch", "We ship fast with clean tracking, polished UI, and a measured rollout plan."],
  ["04", "Improve", "We review performance weekly and improve the pages, campaigns, and content."],
];

const platforms: IconItem[] = [
  { title: "Web", description: "Next.js, WordPress, Shopify, landing pages, speed, UX", icon: Layers3 },
  { title: "Search", description: "SEO, GEO, schema, local ranking, keyword intelligence", icon: Globe2 },
  { title: "Ads", description: "Google, Meta, retargeting, funnels, creative testing", icon: Target },
  { title: "Data", description: "GA4, GTM, dashboards, attribution, reporting rhythm", icon: Database },
];

const caseMetrics = [
  ["182%", "qualified lead growth"],
  ["41%", "lower cost per lead"],
  ["3.2s", "faster page load"],
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
  "Meta creative",
  "Reporting",
];

const auditItems: Array<[string, LucideIcon]> = [
  ["Message clarity", MessageSquareText],
  ["Conversion friction", MousePointer2],
  ["Ranking opportunities", Compass],
  ["Tracking accuracy", ShieldCheck],
];

const testimonials = [
  {
    quote: "QodeClick gave our site the kind of polish we wanted, then backed it with numbers every week.",
    name: "Sarah Ahmed",
    role: "Founder, B2B Services",
  },
  {
    quote: "The redesign looked premium, but the real win was how quickly leads became measurable.",
    name: "Daniel Brooks",
    role: "Marketing Director",
  },
  {
    quote: "Clear strategy, sharp execution, and no mystery reports. It felt like adding a senior growth team.",
    name: "Maya Khan",
    role: "Ecommerce Owner",
  },
];

const reviewTrack = [...testimonials, ...testimonials];

const packages = [
  {
    name: "Launch",
    price: "From $1.5k",
    description: "For new brands that need a credible site and launch plan.",
    features: ["5-page website", "Basic SEO setup", "Analytics install", "Launch checklist"],
  },
  {
    name: "Growth",
    price: "From $3.5k",
    description: "For teams ready to improve visibility, traffic, and leads.",
    features: ["Conversion redesign", "SEO roadmap", "Ad campaign setup", "Monthly reporting"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For ambitious companies that need a managed growth partner.",
    features: ["Full funnel strategy", "Content engine", "CRO experiments", "Weekly optimization"],
  },
];

const faqs = [
  ["How fast can we start?", "Most projects begin with a discovery sprint within 3 to 5 business days."],
  ["Do you only build in Next.js?", "No. We choose the platform around the business goal, team workflow, and growth plan."],
  ["Can you improve an existing site?", "Yes. We can audit, redesign, optimize, or rebuild depending on the current foundation."],
  ["Do you manage ads after launch?", "Yes. Paid media, SEO, reporting, and optimization can be handled as ongoing retainers."],
];

function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${tone === "dark" ? "text-cyan-600 dark:text-cyan-300" : "text-teal-700"}`}>{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${tone === "dark" ? "text-slate-900 dark:text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-pretty text-base leading-8 sm:text-lg ${tone === "dark" ? "text-slate-600 dark:text-slate-300" : "text-slate-600"}`}>{description}</p>
    </motion.div>
  );
}

function IconPanel({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20 group-hover:blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 dark:text-white shadow-lg shadow-cyan-900/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-600 dark:hover:text-cyan-300">
          {item.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-600 dark:text-slate-300">
          {item.description}
        </p>

        <div className="mt-6 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">

      <section id="home" className="relative min-h-[92vh] px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(245,158,11,0.10),transparent_26%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_78%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(245,158,11,0.15),transparent_26%),linear-gradient(180deg,#080b14_0%,#05070d_78%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 dark:via-cyan-300/60 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
              Growth design for serious service businesses
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              QodeClick
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              A modern digital growth studio building premium websites, sharper SEO systems, and paid campaigns that turn attention into qualified leads.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-white"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-slate-900 dark:text-white transition hover:border-cyan-300/60 hover:bg-white/[0.1]"
              >
                <Play className="h-5 w-5" />
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Growth Command Center</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Live campaign health</p>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">Healthy</div>
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
                    <p className="text-sm font-semibold">Channel Mix</p>
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
                            transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`h-full rounded-full ${color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold">Revenue Path</p>
                    <TrendingUp className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <div className="flex h-44 items-end gap-2">
                    {[36, 52, 44, 68, 61, 84, 74, 92, 88, 100].map((height, index) => (
                      <motion.div
                        key={height + index}
                        initial={{ height: 8 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.25, delay: 0.25 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 rounded-t-md bg-cyan-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <span key={partner} className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {partner}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-[#05070d] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045] p-6"
            >
              <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{value}</p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07111b] px-5 py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">About Us</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Architects of Digital Dominance.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              At QodeClick, we don't just build websites; we engineer comprehensive growth ecosystems. Our team of specialists seamlessly integrates modern <span className="text-slate-900 dark:text-white font-medium">WordPress Development</span> with data-driven <span className="text-slate-900 dark:text-white font-medium">SEO, Google Ads, and Meta Ads</span> strategies. 
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              By staying ahead of the curve with <span className="text-slate-900 dark:text-white font-medium">AEO/GEO optimization</span> and compelling <span className="text-slate-900 dark:text-white font-medium">Content Writing</span>, alongside targeted <span className="text-slate-900 dark:text-white font-medium">Social Media Marketing</span> and <span className="text-slate-900 dark:text-white font-medium">GMB Optimization</span>, we turn your brand into a market leader.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Years Experience", "10+"],
                ["Client Retention", "95%"],
                ["Growth Experts", "20+"],
                ["Ad Spend Managed", "$5M+"],
              ].map(([label, value]) => (
                <div key={label} className="border-l-2 border-cyan-300/50 pl-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative h-full w-full max-lg:max-w-md max-lg:mx-auto">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col gap-4 mt-8">
                <div className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2">
                   <Target className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" />
                   <h3 className="font-semibold text-slate-900 dark:text-white">Precision Targeting</h3>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Google & Meta Ads</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg transition-transform hover:-translate-y-2">
                   <Code2 className="h-10 w-10 text-amber-300 mb-4" />
                   <h3 className="font-semibold text-slate-900 dark:text-white">Flawless Builds</h3>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Next-gen WordPress</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg transition-transform hover:-translate-y-2">
                   <Compass className="h-10 w-10 text-emerald-300 mb-4" />
                   <h3 className="font-semibold text-slate-900 dark:text-white">Search Authority</h3>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Advanced SEO & AEO/GEO</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2">
                   <PenLine className="h-10 w-10 text-rose-300 mb-4" />
                   <h3 className="font-semibold text-slate-900 dark:text-white">Brand Voice</h3>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Strategic Content & Social</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)] dark:bg-[linear-gradient(180deg,#05070d,#07111b)]" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Everything your digital presence needs to look premium and perform."
            description="QodeClick connects brand clarity, interface quality, search visibility, paid traffic, and reporting into one practical growth system."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <IconPanel key={service.title} item={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <DigitalMarketingAccordion />

      <section className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Coverage"
            title="Built for the channels where buyers already make decisions."
            description="Your website, search presence, ads, and analytics are treated as one connected operating system."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <IconPanel key={platform.title} item={platform} index={index} />
            ))}
          </div>
        </div>
      </section>
      <FilterablePortfolio />

      <section className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Audit</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Start with the leaks, not the guesswork.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              The first sprint reviews positioning, UX, speed, tracking, search coverage, and campaign economics so the redesign solves the right problem.
            </p>
          </div>
          <div className="grid gap-3">
            {auditItems.map(([label, AuditIcon]) => {
              return (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045] p-4">
                  <div className="flex items-center gap-3">
                    <AuditIcon className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                    <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
                  </div>
                  <BadgeCheck className="h-5 w-5 text-emerald-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-[#07111b] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Stack"
            title="Modern execution across strategy, design, web, search, ads, and measurement."
            description="Every deliverable is practical, connected, and built to make the next business decision easier."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-5 py-24 text-slate-900 dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Proof</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Clients remember the clarity as much as the results.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              A professional website is not just visual polish. It is the experience, message, loading speed, campaign fit, and reporting discipline working together.
            </p>
          </div>
          <div className="review-marquee-mask mt-12 overflow-hidden">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 38, ease: "linear", repeat: Infinity }}
            >
              {reviewTrack.map((testimonial, index) => (
                <figure
                  key={`${testimonial.name}-${index}`}
                  className="min-h-[280px] w-[310px] shrink-0 rounded-2xl border border-white/15 bg-slate-50 dark:bg-white/[0.045] p-6 shadow-xl shadow-black/15 sm:w-[380px]"
                >
                  <div className="mb-6 flex gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-8 text-slate-100">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <figcaption className="mt-8">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple starting points, shaped around your actual growth stage."
            description="Choose a focused build, a growth sprint, or a managed partnership when you need ongoing optimization."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {packages.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 ${plan.featured ? "border-cyan-300/60 bg-cyan-300/10 shadow-2xl shadow-cyan-950/20" : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045]"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                  {plan.featured ? <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">Popular</span> : null}
                </div>
                <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{plan.price}</p>
                <p className="mt-4 min-h-[56px] text-sm leading-7 text-slate-600 dark:text-slate-300">{plan.description}</p>
                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <Check className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 dark:bg-[#07111b] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">FAQ</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Answers before the first call.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.045] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {question}
                  <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white dark:bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.055)_38%,rgba(245,158,11,0.12))] p-1 shadow-2xl shadow-black/30">
          <div className="grid gap-8 rounded-[1.85rem] bg-white/[0.82] dark:bg-slate-950/[0.82] p-6 backdrop-blur-xl lg:grid-cols-[1fr_0.85fr] lg:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Project CTA</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ready for a website that looks premium and sells clearly?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Share your current site, market, and goals. We will map a practical first sprint for design, SEO, ads, and tracking.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CircleDollarSign className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  ROI-focused plans
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  Clear reporting
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  hello@qodeclick.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  Strategy call available
                </span>
              </div>
            </div>
            <form className="grid gap-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/[0.06] p-5">
              <input className="h-[52px] rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 px-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Name" />
              <input className="h-[52px] rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 px-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Email" />
              <input className="h-[52px] rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 px-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Website" />
              <textarea className="min-h-[128px] rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 p-4 text-sm text-slate-900 dark:text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="What do you want to improve?" />
              <button className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white">
                Request Proposal
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
