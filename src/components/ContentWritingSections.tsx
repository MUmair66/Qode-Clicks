"use client";

import { motion } from "framer-motion";
import { ChevronRight, FileText, CheckCircle2, XCircle, Search, PenLine, Megaphone, Monitor, BookOpen } from "lucide-react";
import Link from "next/link";
import { AnimatedServiceCard } from "./AnimatedServiceCard";

export function ContentHero() {
  return (
    <section className="relative px-5 pt-32 pb-16 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#05070d] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white">Content Writing</span>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Content Writing
            </span>
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Written by people who <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200 bg-clip-text text-transparent">read the source,</span> not the top three results.
            </h1>
            <p className="mb-10 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              SEO articles, service and location pages, landing page copy, ad and email sequences, brand messaging, case studies and whitepapers. Researched properly, briefed against real search intent, and edited by someone who will send it back.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#quote" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 dark:bg-white px-8 text-sm font-semibold text-white dark:text-slate-900 transition-all hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:scale-105">
                Get a free content audit
              </Link>
              <Link href="#pricing" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:border-slate-900 dark:hover:border-white hover:bg-slate-50 dark:hover:bg-white/5">
                See pricing
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-6">
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">18</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">Content formats we produce</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">+312%</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">Median organic growth</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">3 to 6</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">Days turnaround typical</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="quote"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 p-8 shadow-xl backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-cyan-500" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free content audit</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
              Send us the site. We will tell you which existing pages to rewrite, which to merge, which to delete, and what is actually worth commissioning new.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your name</label>
                <input type="text" placeholder="Priya Raman" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Work email</label>
                <input type="email" placeholder="priya@company.com" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Website</label>
                <input type="url" placeholder="company.com" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">What do you need most</label>
                <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all">
                  <option>SEO articles and blog content</option>
                  <option>Service and location pages</option>
                  <option>Landing page and conversion copy</option>
                  <option>Website copy and brand messaging</option>
                  <option>Product descriptions</option>
                  <option>Email and ad copy</option>
                  <option>Case studies and long form</option>
                  <option>Rewriting content that is not working</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Rough monthly volume</label>
                <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all">
                  <option>A few pieces to start</option>
                  <option>4 to 8 pieces a month</option>
                  <option>9 to 20 pieces a month</option>
                  <option>More than 20 a month</option>
                  <option>One off project</option>
                </select>
              </div>
              <button className="w-full rounded-xl bg-cyan-600 dark:bg-cyan-500 py-3.5 text-sm font-bold text-white transition-colors hover:bg-cyan-700 dark:hover:bg-cyan-400">
                Request my content audit
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">Five working day turnaround. Yours to keep either way.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ContentProblems() {
  const problems = [
    { title: "Written from the top three results", desc: "Paraphrasing the pages already ranking produces something that adds nothing. Google has no reason to rank a worse version of what it already has." },
    { title: "Targeting the wrong intent", desc: "A buying query answered with a definition, or a research query answered with a sales page. The traffic arrives and leaves immediately." },
    { title: "Volume without a structure", desc: "Eighty blog posts with no clusters, no internal linking and no commercial pages behind them. Effort without architecture." },
    { title: "Published and abandoned", desc: "Nothing updated since publication. Competitors refresh, the search results change, and your page quietly slides out of view." }
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">What we usually find</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Four reasons content gets published and nothing happens.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            The free audit identifies which of these applies to you, and usually it is more than one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="rounded-2xl border-l-4 border-rose-500 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentCategories() {
  const searchContent = [
    { title: "SEO articles and blog posts", desc: "Researched against real search intent rather than a keyword list, with a point of view rather than a summary of what already ranks.", icon: Search },
    { title: "Service and landing pages", desc: "The commercial pages that actually earn revenue. Written to convert as well as rank, which most SEO content is not.", icon: Monitor },
    { title: "Location and service area pages", desc: "Genuinely local pages rather than the same page with the town name swapped, which search engines have handled badly for years.", icon: FileText },
    { title: "Pillar pages and topic clusters", desc: "A comprehensive hub with supporting pieces linking into it. How you compete for a competitive head term without pretending one article will do it.", icon: BookOpen },
    { title: "Product and category copy", desc: "Descriptions that answer the question stopping the purchase, and category pages with enough substance to rank rather than a filter and nothing else.", icon: Monitor },
    { title: "Content refreshes", desc: "Updating what you already have. Usually a better return than commissioning new, and almost nobody does it systematically.", icon: CheckCircle2 }
  ];

  const conversionCopy = [
    { title: "Landing page copy", desc: "Campaign pages where the only measure is conversion rate. Written against a specific audience, offer and traffic source rather than in general.", icon: PenLine },
    { title: "Email and lifecycle copy", desc: "Welcome flows, abandonment sequences, winbacks and newsletters. The channel you already own and the one most often left running on defaults.", icon: PenLine },
    { title: "Ad copy", desc: "Google, Meta and LinkedIn, written in volume so there is something real to test rather than three variants and a guess.", icon: Megaphone }
  ];

  return (
    <section id="types" className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">What we write</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Eighteen formats, grouped by the job they do.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Most clients buy from two or three of these groups. The audit tells you which, based on where your funnel actually leaks.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-white/10">Search content, written to rank</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchContent.map((s, i) => (
              <AnimatedServiceCard key={i} item={{ title: s.title, description: s.desc, icon: s.icon }} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-white/10">Conversion copy, written to sell</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionCopy.map((s, i) => (
              <AnimatedServiceCard key={i} item={{ title: s.title, description: s.desc, icon: s.icon }} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContentAIPolicy() {
  return (
    <section id="ai" className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white border-y border-slate-800 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-amber-500">Our AI Policy</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where AI touches your content, and where it never does.
          </h2>
          <p className="text-lg text-slate-300">
            You are going to ask, so here it is in writing rather than buried in a contract. We use AI in research and production support. We do not use it to generate the words you publish, and we do not charge you writer rates for output nobody wrote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl bg-slate-800/50 p-8 border-l-4 border-green-500">
            <span className="block text-sm font-bold text-slate-400 mb-2">Where we use it</span>
            <h3 className="text-xl font-bold mb-3">Research and production support</h3>
            <p className="text-slate-300 mb-6 text-sm">Tasks where speed matters and the output gets checked by a person before it goes anywhere near your site.</p>
            <ul className="space-y-4">
              {[
                "Clustering keyword sets and spotting intent patterns",
                "Summarising what currently ranks and where the gaps are",
                "Generating meta title and description variants to choose from",
                "Building schema markup and formatting output",
                "Checking a finished draft for things we missed"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 border-t border-slate-700/50 pt-4 first:border-0 first:pt-0">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-800/50 p-8 border-l-4 border-rose-500">
            <span className="block text-sm font-bold text-slate-400 mb-2">Where we do not</span>
            <h3 className="text-xl font-bold mb-3">Anything you publish under your name</h3>
            <p className="text-slate-300 mb-6 text-sm">Not because AI writing is always bad, but because it is average by construction, and average does not rank or persuade.</p>
            <ul className="space-y-4">
              {[
                "Generating the draft and lightly editing it afterwards",
                "Producing anything quoting data we have not verified",
                "Writing in a founder's voice for ghostwritten work",
                "Case studies, interviews or anything containing a claim",
                "Bulk publishing to hit a word count target"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 border-t border-slate-700/50 pt-4 first:border-0 first:pt-0">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
