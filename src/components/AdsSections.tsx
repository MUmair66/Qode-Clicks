"use client";

import { motion } from "framer-motion";
import { Check, Search, ShoppingCart, Box, PlaySquare, RotateCcw, MapPin } from "lucide-react";
import Link from "next/link";

export function AdsHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-28 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-cyan-400 font-bold text-sm mb-6 uppercase tracking-wider">Google Ads Management</p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Ads run by the people who{" "}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
            >
              build the page
            </motion.span>{" "}
            they point at.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
            Search, Shopping, Performance Max and remarketing, managed against revenue rather than clicks. When a campaign needs a dedicated landing page, a developer on your own account builds it that week instead of quoting for it.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="#audit" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors text-lg">
              Get a free account audit
            </Link>
            <Link href="#campaigns" className="rounded-full bg-transparent border-2 border-slate-200 dark:border-white/10 px-8 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-lg">
              See campaign types
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">-58%</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Median cost per lead, 12 months</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">4.2x</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Median blended return on ad spend</div>
            </div>
            <div className="col-span-2 pt-4">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$4.1m</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Managed media in the last year</div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="audit">
          <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 p-8 lg:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Free account audit</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              A specialist reviews your account and sends a written document covering wasted spend, structural problems and what we would change first.
            </p>
            
            <form className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Your name</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Priya Raman" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Work email</label>
                <input type="email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="priya@company.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Website</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="company.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Monthly ad spend</label>
                <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">Under $3,000</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">$3,000 to $10,000</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">$10,000+</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Main goal</label>
                <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">More leads at a lower cost</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">Scale current performance</option>
                </select>
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold rounded-xl px-4 py-4 transition-colors mt-4 text-lg">
                Request my free audit
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">Five working day turnaround. Yours to keep either way.</p>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function AdsReasons() {
  const reasons = [
    { title: "Brand traffic counted as a win", desc: "People already searching your name get claimed as campaign conversions. Strip those out and the real numbers look very different." },
    { title: "Conversion tracking is broken", desc: "Roughly seven in ten accounts we audit have duplicate, missing or misattributed conversions. Every optimisation on top of that is a guess." },
    { title: "Performance Max eating everything", desc: "Left unstructured it absorbs brand and shopping traffic you were already winning, then takes credit for it." },
    { title: "Ads pointing at the homepage", desc: "Traffic bought for a specific search lands on a generic page. The click was fine, the page threw it away." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">What we find</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Four reasons Google Ads accounts quietly waste money.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Every one of these shows up in the free audit, usually more than one at a time.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 border-l-4 border-l-red-500 rounded-r-2xl p-6 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">{r.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsCampaignTypes() {
  const types = [
    {
      icon: Search,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-500",
      title: "Search",
      desc: "Text ads against people actively searching. Still the highest intent traffic on the internet and where most accounts should start.",
      items: ["Account and campaign restructure", "Keyword, match type and negative strategy", "Ad copy testing at scale", "Bid strategy and budget pacing"],
      best: "Best for lead generation and high intent demand"
    },
    {
      icon: ShoppingCart,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "border-indigo-500",
      title: "Shopping",
      desc: "Product listings driven by your feed. Most Shopping performance comes from feed quality, which is where the work actually goes.",
      items: ["Merchant Center setup and diagnostics", "Feed optimisation and custom labels", "Campaign segmentation by margin", "Promotions and local inventory"],
      best: "Best for ecommerce with a real catalogue"
    },
    {
      icon: Box,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-500",
      title: "Performance Max",
      desc: "Google's automated multi channel campaign. Powerful once structured so it stops absorbing traffic you were winning for free.",
      items: ["Brand exclusions configured properly", "Asset group structure by theme", "Feed and audience signal control", "Channel level reporting via scripts"],
      best: "Best once conversion volume supports automation"
    },
    {
      icon: PlaySquare,
      color: "text-red-400",
      bg: "bg-red-400/10",
      border: "border-red-500",
      title: "Demand Gen and YouTube",
      desc: "Reaching people before they search, on YouTube, Discover and Gmail. Slower to prove out, worth it once search demand is capped.",
      items: ["Creative strategy and briefs", "Audience building from first party data", "View through measurement setup", "Incrementality testing where budget allows"],
      best: "Best when you have exhausted existing search demand"
    },
    {
      icon: RotateCcw,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-500",
      title: "Remarketing and retention",
      desc: "Bringing back people who came close. Cheap relative to acquisition, and usually the first thing missing from a neglected account.",
      items: ["Audience segmentation by behaviour", "Dynamic remarketing for ecommerce", "Customer match from your CRM", "Frequency and exclusion control"],
      best: "Best for anyone with existing traffic volume"
    },
    {
      icon: MapPin,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-500",
      title: "Maps and local campaigns",
      desc: "Promoted pins and store goal campaigns for businesses where a physical visit is the conversion. Covered in full further down this page.",
      items: ["Business Profile linked and optimised", "Location assets across campaigns", "Performance Max for store goals", "Store visit and direction tracking"],
      best: "Best for retail, clinics, showrooms and restaurants"
    }
  ];

  return (
    <section id="campaigns" className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-cyan-400 font-semibold text-sm mb-3">Campaign types</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Six campaign types we run, and when each is right.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <div key={i} className={`bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 border-t-4 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors ${t.border} flex flex-col`}>
              <div className={`w-10 h-10 rounded-lg ${t.bg} flex items-center justify-center mb-6`}>
                <t.icon className={`w-5 h-5 ${t.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">{t.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {t.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-slate-600">-</span> {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-auto">
                <p className="text-xs text-slate-500 uppercase tracking-wide">{t.best}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsLocalBanner() {
  return (
    <section className="py-12 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-500/30 rounded-3xl p-10 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <p className="text-emerald-400 font-bold text-sm mb-4 uppercase tracking-wider">Different product</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Local service business? There is a channel that sits above all of this.
            </h2>
            <p className="text-emerald-100/80 mb-6 leading-relaxed">
              Local Services Ads appear at the very top of Google Search, above every campaign type on this page, and you pay per lead rather than per click. They carry the Google Verified badge, but only eligible categories can use them. It is a separate platform with its own verification process, so we cover it on its own page.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Pay per lead", "Above all other ads", "US and UK", "Eligible categories only"].map((pill, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1 bg-emerald-800/50 border border-emerald-500/30 text-emerald-300 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4 w-full lg:w-auto min-w-[250px]">
            <Link href="#lsa" className="bg-emerald-50 text-emerald-900 dark:bg-white dark:text-emerald-900 font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-50 transition-colors">
              Local Services Ads
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdsMaps() {
  const points = [
    { label: "Foundation", title: "Verified Business Profile, linked", desc: "Nothing on Maps works without a verified Google Business Profile connected to your Google Ads account. Categories, service areas, hours and photos all feed what the map shows." },
    { label: "Mechanism", title: "Location assets in campaigns", desc: "Enabling location assets lets your Search and Performance Max campaigns surface your business on the map and in local results, rather than only as a text ad." },
    { label: "Mechanism", title: "Promoted pins", desc: "Your branded pin appears on the map for nearby searchers, with a business page attached. Useful where footfall or a physical visit is the conversion." },
    { label: "Mechanism", title: "Performance Max for store goals", desc: "The current route for driving physical visits. Google places your business in front of nearby customers with visit intent across Maps, Search and its other surfaces." },
    { label: "Measurement", title: "Store visit and direction tracking", desc: "Calls, direction requests and store visits tracked as conversions where volume allows, so Maps activity is measured rather than assumed." },
    { label: "Underneath it all", title: "Organic local SEO", desc: "Paid visibility on Maps sits on top of profile quality, reviews and proximity. We run the organic side alongside rather than paying to mask a weak profile." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 dark:border-white/10 shadow-xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-blue-500 font-semibold text-sm mb-3">Google Maps</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Getting your business onto the map itself.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Maps visibility is not a campaign type you switch on. It runs through a verified Google Business Profile linked to your Google Ads account, with location assets and store goal campaigns layered on top. Worth doing when a physical visit is the outcome you actually want.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {points.map((p, i) => (
              <div key={i} className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                <p className="text-emerald-400 text-xs font-semibold mb-2">{p.label}</p>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-500">
            Maps advertising suits retail, clinics, showrooms, restaurants and anywhere a physical visit is the outcome. For urgent service calls, <span className="text-blue-400 cursor-pointer">Local Services Ads</span> usually produce cheaper leads. Many clients run both.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AdsAuditCTA() {
  return (
    <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white dark:bg-[#11131a] rounded-[2rem] p-10 lg:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between border border-slate-100 dark:border-white/5 shadow-2xl">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-bold text-sm mb-3 uppercase tracking-wider">Free audit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Not sure how much of your spend is actually working?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Most accounts we review are wasting somewhere between fifteen and forty percent of budget on brand traffic, broken tracking and search terms nobody would have bid on deliberately. We will tell you which, in writing, with the numbers attached.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Five day turnaround", "Written findings", "Yours to keep", "No sales deck"].map((pill, i) => (
                <span key={i} className="text-xs font-semibold px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[280px]">
            <Link href="#audit" className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold px-8 py-4 rounded-full text-center hover:scale-105 transition-transform">
              Get a free audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
