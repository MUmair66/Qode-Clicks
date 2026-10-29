"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Code, Server, Search, Lock, Workflow, Activity, BarChart, FileCode, Puzzle, Unplug, Database, Gauge, KeyRound } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";

const inputClass =
  "w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors";
const labelClass = "text-xs font-medium text-slate-600 dark:text-slate-400";

const reasons = [
  { icon: FileCode, title: "Software that fits your process", desc: "Off-the-shelf tools make you change how you work. A custom app is built around the way your team already works." },
  { icon: BarChart, title: "Lower per-seat costs as you grow", desc: "Per-user subscription fees grow with every hire. When you own the app, your running costs are hosting and support, not licenses." },
  { icon: Workflow, title: "One place for your data and workflows", desc: "Connect your CRM, accounting, scheduling and other tools to a single dashboard, so nobody has to copy data between systems." },
  { icon: Lock, title: "You control your data", desc: "Your data lives in a database you own, with role-based access, audit logs and hosting in your own cloud account." },
];

const problems = [
  {
    icon: Gauge,
    title: "Manual work and double data entry",
    desc: "Your team spends hours copying data between spreadsheets and tools, exporting CSV files and working around software that was not built for your process.",
    tags: ["Repeated data entry", "Manual CSV imports and exports", "Error-prone spreadsheets"],
  },
  {
    icon: Puzzle,
    title: "Tools that cannot do what you need",
    desc: "You have hit the limits of your current software. Feature requests sit on the vendor's roadmap and your team builds workarounds instead.",
    tags: ["Missing features", "Vendor lock-in", "Slow bug fixes"],
  },
  {
    icon: KeyRound,
    title: "Data spread across too many vendors",
    desc: "Customer and business data lives in many third-party platforms, each with its own logins and permissions. A custom app keeps sensitive data in one place you control.",
    tags: ["Scattered logins", "Unclear access control", "Third-party exposure"],
  },
];

const standards = [
  { icon: Code, title: "Modern React, Next.js and Node.js stack", desc: "Proven, widely supported technology that is fast for your users and easy to hire for later." },
  { icon: Database, title: "Secure APIs and a database you control", desc: "A clear data model, documented APIs and role-based permissions, built for your application only." },
  { icon: Unplug, title: "Integrations with the tools you already use", desc: "Connect payments, CRM, email, accounting and other systems through their APIs, such as Stripe, HubSpot or Twilio." },
  { icon: Activity, title: "Analytics and conversion tracking", desc: "GA4 and event tracking set up from day one, so you can see how people use the app and where they drop off." },
  { icon: Search, title: "Search-friendly public pages", desc: "Marketing pages, listings and documentation are server rendered with clean URLs and schema so search engines can index them." },
  { icon: Shield, title: "30 days of post-launch support", desc: "We fix any bugs found in the first 30 days after launch at no extra cost, and a developer stays on hand while your team settles in." },
];

const scenarios = [
  { id: "A", title: "Your workflow does not fit a standard CRM or ERP", desc: "Your business processes do not map cleanly to off-the-shelf systems. You need software that follows your own rules and approvals." },
  { id: "B", title: "You juggle data from several systems", desc: "You pull data from several platforms and need one dashboard where your team can see, update and report on it together." },
  { id: "C", title: "You are launching a SaaS product", desc: "You are building software as a service to sell to your own customers or partners, with accounts, subscriptions and billing." },
  { id: "D", title: "Your clients need a secure portal", desc: "Clients need to log in to see documents, reports, invoices or project status, with access limited to their own account." },
];

export function CustomAppsHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { name: "Website Development", path: "/website-development" },
            { name: "Custom Web Apps", path: "/website-development/custom-web-apps" },
          ]}
          className="mb-8"
        />
      </div>
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
            Custom Web App Development
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Custom web apps that run the parts of your business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 font-serif italic pr-2">
              spreadsheets can&apos;t.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            We design and build dashboards, client portals, internal tools and SaaS products on React and Next.js, connected to the systems you already use, with code you own.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link href="#estimate" className="rounded-full bg-cyan-500 dark:bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 dark:hover:bg-white transition-colors flex items-center gap-2">
              Request an Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div id="estimate" className="scroll-mt-28" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> Get a Custom Estimate
            </h2>
            <LeadForm source="Custom web app estimate" id="estimate-form" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="cwa-first-name" className={labelClass}>First name *</label>
                  <input id="cwa-first-name" name="first_name" type="text" required autoComplete="given-name" className={inputClass} placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="cwa-last-name" className={labelClass}>Last name</label>
                  <input id="cwa-last-name" name="last_name" type="text" autoComplete="family-name" className={inputClass} placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="cwa-email" className={labelClass}>Email address *</label>
                <input id="cwa-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="john@company.com" />
              </div>
              <div className="space-y-1">
                <label htmlFor="cwa-company" className={labelClass}>Company or website (optional)</label>
                <input id="cwa-company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Company name or https://..." />
              </div>
              <div className="space-y-1">
                <label htmlFor="cwa-details" className={labelClass}>What do you want to build? (optional)</label>
                <textarea id="cwa-details" name="project_details" rows={3} className={`${inputClass} resize-none`} placeholder="For example: a client portal, an internal dashboard or a SaaS product" />
              </div>
              <button type="submit" className="w-full min-h-[44px] bg-cyan-500 dark:bg-cyan-400 hover:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold rounded-xl px-4 py-4 transition-colors mt-2 flex justify-center items-center gap-2">
                <Activity className="w-5 h-5" /> Request My Estimate
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                We only use your details to reply to your request.
              </p>
            </LeadForm>
          </div>
        </motion.div>
      </div>

      {/* Commitments below hero */}
      <div className="mx-auto max-w-7xl mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-slate-200 dark:border-white/10 pt-10">
        <div>
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">90+ Lighthouse target</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Built to pass Core Web Vitals</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Security reviewed</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Before every release</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Code you own</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Repository and hosting in your name</p>
        </div>
      </div>
    </section>
  );
}

export function CustomAppsSections() {
  return (
    <>
      {/* Why custom */}
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <p className="font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider text-sm mb-2">Why custom</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Why businesses replace spreadsheets and subscriptions with a custom app</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-3xl">
              Off-the-shelf software is a good place to start. As you grow, a tool built for your business can save time, cut costs and remove workarounds.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 sm:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">0{i + 1}. {item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Common problems</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Three problems a custom web app solves</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">
              These are the signs that your current tools are starting to cost more than they save.
            </p>
          </div>

          <div className="space-y-8">
            {problems.map((p) => (
              <div key={p.title} className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                  <p.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get with every custom build */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-white/[0.01] border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Included as standard</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">What you get with every custom build</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">These are part of every project, not paid add-ons.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((feat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mt-1 shrink-0">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Is it right for you?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">When a custom web app makes sense</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl">Not every business needs custom software. If one of these sounds familiar, it is worth a conversation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.id} className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wider uppercase mb-3">Scenario {scenario.id}</div>
                <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{scenario.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section id="pricing" className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Three project tiers. Fixed quotes, no open-ended hourly billing.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 01</div>
              <h3 className="text-xl font-bold mb-2">Marketing Web Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">A fast marketing site on Next.js with a headless CMS, technical SEO and lead capture.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$3,500 <span className="text-lg text-slate-500 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6 flex-1">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Headless CMS setup</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Advanced on-page SEO</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Automated deployment pipeline</li>
              </ul>
              <Link href="#estimate" className="w-full min-h-[44px] flex items-center justify-center py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Ask about a web platform</Link>
            </div>

            {/* Tier 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-cyan-950 to-slate-900 border-2 border-cyan-400 relative md:-translate-y-4 shadow-xl shadow-cyan-900/20 flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase">Recommended</div>
              <div className="text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 02</div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Web App or Portal</h3>
              <p className="text-slate-300 text-sm mb-6">Dashboards, client portals and internal tools that automate your core workflows.</p>
              <div className="text-4xl font-bold text-white mb-2">$8,500 <span className="text-lg text-slate-400 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6 flex-1">
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Secure user login</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Database and API design</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Third-party integrations (Stripe, Twilio)</li>
                <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> User roles and permissions</li>
              </ul>
              <Link href="#estimate" className="w-full min-h-[44px] flex items-center justify-center py-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-white transition-colors font-bold">Discuss a web app</Link>
            </div>

            {/* Tier 3 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wider mb-2">TIER 03</div>
              <h3 className="text-xl font-bold mb-2">SaaS and Enterprise Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">SaaS products, multi-tenant platforms and larger internal systems.</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$12,000+ <span className="text-lg text-slate-500 font-normal">base rate</span></div>
              <ul className="space-y-3 mb-8 mt-6 flex-1">
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Multi-tenant SaaS architecture</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> Subscriptions and billing</li>
                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" /> SOC 2 readiness support</li>
              </ul>
              <Link href="#estimate" className="w-full min-h-[44px] flex items-center justify-center py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">Ask about a SaaS build</Link>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10 flex items-center justify-center gap-2">
            <Server className="w-4 h-4" /> Hosting and ongoing support are quoted separately with every proposal.
          </p>
        </div>
      </section>
    </>
  );
}

export function MobileStickyCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="fixed bottom-4 inset-x-4 md:hidden z-40 min-h-[48px] flex items-center justify-center gap-2 rounded-full bg-cyan-500 text-slate-950 font-bold shadow-xl shadow-cyan-900/30"
    >
      {label} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
