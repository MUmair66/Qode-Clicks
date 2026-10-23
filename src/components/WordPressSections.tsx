"use client";

import Link from "next/link";
import { Code, Box, PenTool, LayoutTemplate, Layers, Zap, ShoppingCart, ArrowRightLeft, ShieldAlert, ServerIcon } from "lucide-react";
import { PRICING } from "@/lib/site";

const cardClass =
  "p-6 sm:p-8 bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col border-t-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors";

type Card = { title: string; desc: string; points: string[]; price: string; time: string; icon: typeof Code; color: string };

function OptionCard({ item }: { item: Card }) {
  return (
    <div className={`${cardClass} ${item.color}`}>
      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-6">
        <item.icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
      <ul className="space-y-3 mb-8">
        {item.points.map((pt, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="text-slate-500" aria-hidden="true">-</span> {pt}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-end gap-4 border-t border-slate-200 dark:border-white/10 pt-6 mt-auto">
        <span className="text-lg font-bold text-slate-900 dark:text-white">{item.price}</span>
        <span className="text-xs font-medium text-slate-500 text-right">{item.time}</span>
      </div>
    </div>
  );
}

export function BuildApproaches() {
  const approaches: Card[] = [
    {
      title: "Custom build, no theme",
      desc: "A theme written from scratch for your site alone, on an ACF block library. Nothing bought, nothing inherited, no code you will never use.",
      points: ["Hand-coded theme, no parent theme underneath", "12-block library your team assembles pages from", "Only the CSS each page actually needs", "Fastest possible WordPress result"],
      price: `From ${PRICING.wordpressCustom}`,
      time: "6 to 10 weeks",
      icon: Code,
      color: "border-t-cyan-500",
    },
    {
      title: "Headless WordPress",
      desc: "WordPress stays as the editor your team knows. A Next.js front end serves visitors from the edge, so the CMS never sits in the request path.",
      points: ["Next.js front end with incremental regeneration", "WPGraphQL or REST as the content layer", "Sub-second loads even under heavy traffic", "Same WordPress editing experience"],
      price: "From $11,000",
      time: "10 to 16 weeks",
      icon: Box,
      color: "border-t-slate-500",
    },
    {
      title: "Designed in Figma, then built",
      desc: "We design every page and every block in Figma first. You approve exactly what you are getting before a line of code exists, then we build it to the pixel.",
      points: ["Full design system, tokens and components", "Desktop, tablet and mobile for every block", "Two revision rounds included", "Figma file is yours to keep"],
      price: "+$1,600",
      time: "Adds 2 to 3 weeks",
      icon: PenTool,
      color: "border-t-emerald-500",
    },
    {
      title: "Premium theme, done properly",
      desc: "A licensed theme customized to your brand and then stripped of everything you do not use. Considerably cheaper than custom, and fine for most business sites.",
      points: ["Theme selected for your content, not for the demo", "Child theme so updates never wipe your work", "Unused demo content and plugins removed", "Brand fonts, colors and spacing applied properly"],
      price: "From $1,450",
      time: "2 to 4 weeks",
      icon: LayoutTemplate,
      color: "border-t-slate-500",
    },
    {
      title: "Template kit build",
      desc: "The fastest and cheapest route. A ready-made kit adapted to your content and brand. We are upfront that it trades performance and originality for speed.",
      points: ["Live in one to two weeks", "Kit license and setup included", "Content, forms and tracking configured", "Upgradeable to a custom build later"],
      price: `From ${PRICING.wordpressBuild}`,
      time: "1 to 2 weeks",
      icon: Layers,
      color: "border-t-slate-500",
    },
    {
      title: "SEO and speed optimized builds",
      desc: "Any of the above, built to a written performance budget with technical SEO and schema in the templates rather than added by a plugin afterward.",
      points: ["Core Web Vitals targets agreed up front", "Schema built into every template", "Keyword-mapped page structure and URLs", "Search Console, GA4 and tracking configured"],
      price: "+$1,100",
      time: "Adds 1 to 2 weeks",
      icon: Zap,
      color: "border-t-emerald-500",
    },
  ];

  return (
    <section id="build-options" className="scroll-mt-24 py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">How we can build it</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Six build options, chosen by budget and ambition.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Four ways to build, plus two upgrades you can add to any of them. There is no single right answer: a template kit launched next week can be the correct commercial decision, and a fully custom build can be an expensive mistake. We will tell you which one your situation calls for.
          </p>
        </div>
        <p className="text-slate-500 font-medium text-sm mb-6 uppercase tracking-wider">Build approaches and upgrades</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item) => (
            <OptionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecialistWork() {
  const specials: Card[] = [
    {
      title: "Ecommerce and WooCommerce",
      desc: "Stores that survive a traffic spike, with checkouts that do not lose a third of mobile sessions. Shopify work too where that is the better platform.",
      points: ["Custom checkout and payment gateways", "Subscriptions and recurring billing", "Inventory, ERP and 3PL integrations", "Product feeds ready for shopping ads"],
      price: `From ${PRICING.wooCommerce}`, time: "6 to 12 weeks", icon: ShoppingCart, color: "border-t-emerald-500",
    },
    {
      title: "Migration and deployment",
      desc: "Moving off Wix, Squarespace, Shopify or another host without losing the rankings you already earned. Cutover is monitored, not left to chance.",
      points: ["Full URL mapping and redirect strategy", "Content, media and product data migrated", "Staging build and side-by-side review", "Search Console watched daily for 14 days"],
      price: "From $450", time: "1 to 3 weeks", icon: ArrowRightLeft, color: "border-t-slate-500",
    },
    {
      title: "Hacked site and error recovery",
      desc: "Malware, redirects to gambling sites, a white screen, a critical error after an update. We clean it, harden it and get you live again.",
      points: ["Full malware scan and manual code review", "Clean restore, not just a plugin scan", "Blacklist removal and reindex request", "Hardening so it does not happen twice"],
      price: "From $350", time: "24 to 72 hours", icon: ShieldAlert, color: "border-t-red-500",
    },
    {
      title: "Hosting, support and maintenance",
      desc: "Managed hosting on infrastructure we actually monitor, plus updates tested on staging and someone who answers when it breaks at eleven at night.",
      points: ["Managed hosting with CDN and SSL included", "Updates tested on staging before live", "Daily backups with restores actually tested", "Monthly development hours included"],
      price: `From ${PRICING.carePlanMonthly}`, time: "Rolling, cancel anytime", icon: ServerIcon, color: "border-t-emerald-500",
    },
  ];

  return (
    <section id="specialist-work" className="scroll-mt-24 py-12 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <p className="text-slate-500 font-medium text-sm mb-6 uppercase tracking-wider">Specialist work and care plans</p>
        <div className="grid md:grid-cols-2 gap-6">
          {specials.map((item) => (
            <OptionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildComparisonTable() {
  const rows = [
    { name: "Template kit", cost: PRICING.wordpressBuild, timeline: "1 to 2 weeks", speed: "Moderate", design: "Limited", bestFor: "Launching fast on a tight budget, validating an idea" },
    { name: "Premium theme", cost: "$1,450", timeline: "2 to 4 weeks", speed: "Good", design: "Moderate", bestFor: "Standard business sites where design is not the differentiator" },
    { name: "Custom, no theme", cost: PRICING.wordpressCustom, timeline: "6 to 10 weeks", speed: "Excellent", design: "Complete", bestFor: "Brands where the site is the main sales channel", highlight: true },
    { name: "Figma design plus custom", cost: "$5,800", timeline: "8 to 13 weeks", speed: "Excellent", design: "Complete", bestFor: "Design-led brands who want to approve everything first" },
    { name: "Headless WordPress", cost: "$11,000", timeline: "10 to 16 weeks", speed: "Best available", design: "Complete", bestFor: "High traffic, app-like interfaces, thousands of pages" },
  ];
  const good = (v: string) => v === "Excellent" || v === "Best available" || v === "Complete";

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-y border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Choosing</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Which build approach is right for you.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            The honest comparison. Most businesses under $2M in revenue do not need a custom build, and we will say so before taking the larger fee.
          </p>
        </div>

        <p className="md:hidden text-sm font-medium text-cyan-700 dark:text-cyan-400 mb-3">Swipe to compare →</p>
        <div className="overflow-x-auto bg-slate-100/50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-bold bg-slate-100 dark:bg-white/5">
                <th scope="col" className="py-6 px-8 rounded-tl-3xl">Approach</th>
                <th scope="col" className="py-6 px-6">Starting cost</th>
                <th scope="col" className="py-6 px-6">Timeline</th>
                <th scope="col" className="py-6 px-6">Speed result</th>
                <th scope="col" className="py-6 px-6">Design freedom</th>
                <th scope="col" className="py-6 px-8 rounded-tr-3xl">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/10">
              {rows.map((row, i) => (
                <tr key={i} className={`hover:bg-slate-100 dark:hover:bg-white/5 transition-colors ${row.highlight ? "bg-cyan-50 dark:bg-cyan-950/30" : ""}`}>
                  <th scope="row" className="py-6 px-8 font-semibold text-slate-900 dark:text-white">{row.name}</th>
                  <td className="py-6 px-6 font-bold text-slate-600 dark:text-slate-300">{row.cost}</td>
                  <td className="py-6 px-6 text-slate-500 dark:text-slate-400">{row.timeline}</td>
                  <td className={`py-6 px-6 font-medium ${good(row.speed) ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>{row.speed}</td>
                  <td className={`py-6 px-6 font-medium ${good(row.design) ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>{row.design}</td>
                  <td className="py-6 px-8 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 text-sm text-slate-500 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
            Every approach above can be built to the SEO and speed optimized standard. On kit and theme builds there is a ceiling to what is achievable, and we will tell you where it sits before you buy.
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpeedCTA() {
  return (
    <section className="py-12 md:py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-12 items-center">
          <div>
            <p className="text-cyan-700 dark:text-cyan-400 font-bold text-sm mb-4 uppercase tracking-wider">Speed</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Website slow? You are paying for visitors who leave before it loads.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
              A three-second delay costs a meaningful share of every visitor you paid for. If your site takes four seconds on mobile, you are funding traffic that never sees your offer. Send us the URL and we will test it on real devices and tell you exactly what is slowing it down and what the fix costs.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Free speed report", "Real device testing", "Fixed-price fixes from $680", "No rebuild needed in most cases"].map((pill, i) => (
                <span key={i} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <Link href="#estimate" className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold px-8 py-5 rounded-full text-center hover:bg-slate-800 dark:hover:bg-cyan-50 transition-colors text-lg w-full lg:max-w-md">
              Get a free speed report
            </Link>
            <Link href="#build-options" className="bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold px-8 py-5 rounded-full text-center hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-lg w-full lg:max-w-md">
              Compare build options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
