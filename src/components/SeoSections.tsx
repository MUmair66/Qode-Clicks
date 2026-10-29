"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";

const seoField = "w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors";

export function SeoHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pt-28 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl relative z-10 mb-8">
        <Breadcrumbs
          items={[
            { name: "Digital Marketing", path: "/digital-marketing" },
            { name: "SEO", path: "/digital-marketing/seo" },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-12 items-start relative z-10">

        {/* Left Side */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-cyan-700 dark:text-cyan-400 font-bold text-sm mb-6 uppercase tracking-wider">SEO Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Rankings are not the goal. <br />
            <span className="inline-block text-cyan-600 dark:text-cyan-400 font-serif italic pr-2">
              Revenue is.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
            Plenty of agencies will get you to position three for a keyword nobody buys from. We build SEO around the searches that convert, fix the technical issues stopping them landing, and report in revenue rather than rankings.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 md:mb-12">
            <Link href="#audit" className="rounded-full bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition-colors text-lg">
              Get a free SEO audit
            </Link>
            <Link href="#pricing" className="rounded-full bg-transparent border-2 border-slate-200 dark:border-white/10 px-8 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-lg">
              See pricing
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Dev hours</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Included in every plan, so fixes get shipped</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">30 days</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">For technical fixes to start showing</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">3 to 6 mo</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">For content and links to compound</div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} id="audit" className="scroll-mt-24">
          <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Free SEO audit</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              A specialist reviews your site, then sends a written document covering what is broken, what it is costing you, and what we would fix first.
            </p>
            
            <LeadForm source="SEO audit" className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label htmlFor="seo-name" className="text-sm font-medium text-slate-600 dark:text-slate-300">Your name</label>
                <input id="seo-name" name="name" type="text" required autoComplete="name" className={seoField} placeholder="Your name" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="seo-email" className="text-sm font-medium text-slate-600 dark:text-slate-300">Work email</label>
                <input id="seo-email" name="email" type="email" required autoComplete="email" className={seoField} placeholder="priya@company.com" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="seo-website" className="text-sm font-medium text-slate-600 dark:text-slate-300">Website</label>
                <input id="seo-website" name="website" type="text" inputMode="url" autoComplete="url" className={seoField} placeholder="company.com" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="seo-goal" className="text-sm font-medium text-slate-600 dark:text-slate-300">Main goal</label>
                <select id="seo-goal" name="goal" defaultValue="" className={`${seoField} appearance-none`}>
                  <option value="" disabled className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">Choose your main goal</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">More organic leads</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">More ecommerce sales</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">Fix technical issues</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl px-4 py-4 transition-colors mt-4 text-lg">
                Request my free audit
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">Five working day turnaround. No sales deck attached.</p>
            </LeadForm>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function SeoReasons() {
  const reasons = [
    { title: "Rankings went up, revenue did not", desc: "You are winning informational keywords with no commercial intent behind them. Traffic looks great in the report and the sales team notices nothing." },
    { title: "Content is published, nothing indexes", desc: "Crawl budget wasted on filters, duplicates and thin pages. Google never reaches the pages you actually care about." },
    { title: "The site is too slow to rank", desc: "A four second load and layout shift on mobile. No amount of content offsets a page Google and users both give up on." },
    { title: "Links came from a marketplace", desc: "Cheap guest posts on sites with no traffic. At best they do nothing. At worst you are one update away from a problem." }
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">The usual problem</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Four reasons SEO stops working, in rough order of how often we see them.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">If two or more of these sound familiar, the audit will confirm it in about a week.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 border-l-4 border-l-orange-500 rounded-r-2xl p-6 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">{r.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoPillars() {
  const pillars = [
    {
      percent: "01",
      time: "Pillar",
      title: "Technical",
      desc: "Making sure the site can be crawled, indexed and loaded fast enough to compete. Usually the cheapest wins available.",
      items: ["Full crawl and index coverage audit", "Site architecture and URL structure", "Core Web Vitals remediation", "Schema and structured data", "Redirect, canonical and pagination logic", "Log file analysis on larger sites"]
    },
    {
      percent: "02",
      time: "Pillar",
      title: "Content",
      desc: "Targeting the searches that end in a purchase or an inquiry, and building pages good enough to deserve the position.",
      items: ["Keyword research and intent clustering", "Content roadmap tied to the funnel", "New page briefs and production", "Rewriting and merging underperformers", "Internal linking architecture", "On page optimization at template level"]
    },
    {
      percent: "03",
      time: "Pillar",
      title: "Authority",
      desc: "Links earned through something worth linking to. Slower than buying them, and it does not evaporate after an update.",
      items: ["Link gap and competitor analysis", "Digital PR and data led outreach", "Unlinked mention reclamation", "Broken link and resource placement", "Toxic backlink review", "Local citations where relevant"]
    }
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">How we split the work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Three pillars, weighted by what your site actually needs.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">The balance depends on your site. A technically broken site gets more of the first pillar. A clean site with no content gets more of the second.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 border-t-4 border-t-blue-500">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{p.percent}</div>
              <div className="text-xs text-slate-500 mb-6 font-medium uppercase tracking-wider">{p.time}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed h-16">{p.desc}</p>
              <ul className="space-y-4 border-t border-slate-200 dark:border-white/10 pt-6">
                {p.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-300 pb-4 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoDeliverables() {
  const items = [
    { title: "Technical monitoring and fixes", desc: "Continuous crawl monitoring with issues fixed by our own developers, not handed to you as a list." },
    { title: "Keyword and intent research", desc: "Clustered by what the searcher is actually trying to do, refreshed quarterly as the market shifts." },
    { title: "Content production", desc: "Two to six pages or posts monthly depending on plan, written by people who understand the subject." },
    { title: "On page optimization", desc: "Titles, headings, schema and internal links applied at template level so it scales across the site." },
    { title: "Link acquisition", desc: "Earned placements with real traffic behind them. Every link reported with the domain and the method used." },
    { title: "Developer hours included", desc: "SEO recommendations get implemented by us. No waiting three months for someone else's backlog." },
    { title: "Live dashboard", desc: "Looker Studio pulling Search Console, GA4 and rank tracking. Open it any time, not just at month end." },
    { title: "Monthly review call", desc: "Forty five minutes on what moved, what did not, and what we are doing next month about it." }
  ];

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">What you get</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Eight deliverables, every month.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Written into your scope, so you can hold us to it rather than wondering what the retainer bought.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 border-b border-slate-200 dark:border-white/10 pb-8">
              <div className="mt-1 shrink-0">
                <Check className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
