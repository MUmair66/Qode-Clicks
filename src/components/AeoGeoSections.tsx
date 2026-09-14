"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Search, Zap, Globe, FileText, Database, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function AeoGeoHero() {
  return (
    <section className="relative px-5 pt-32 pb-16 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#05070d] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white">AEO and GEO</span>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Answer & Generative Engine Optimization
            </span>
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Getting cited when the answer <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200 bg-clip-text text-transparent">replaces the click.</span>
            </h1>
            <p className="mb-10 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              A growing share of buying research now ends inside an AI answer rather than on your website. This is the work of being the source that answer is built from, across AI Overviews, ChatGPT, Perplexity and Gemini.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#quote" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 dark:bg-white px-8 text-sm font-semibold text-white dark:text-slate-900 transition-all hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:scale-105">
                Get a free visibility report
              </Link>
              <Link href="#evidence" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:border-slate-900 dark:hover:border-white hover:bg-slate-50 dark:hover:bg-white/5">
                See the evidence
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-6">
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">6</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">AI surfaces tracked</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">25-40%</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">Citation lift from evidence</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">Monthly</strong>
                <span className="text-sm text-slate-500 dark:text-slate-400">Share of model reported</span>
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
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free AI visibility report</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
              We run a set of real buying questions from your category across six AI surfaces and send you what they say, who they cite, and whether you appear at all.
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
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">What do you sell, in a sentence</label>
                <input type="text" placeholder="Workflow software for logistics teams" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Main competitors, comma separated</label>
                <input type="text" placeholder="Competitor A, Competitor B" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <button className="w-full rounded-xl bg-cyan-600 dark:bg-cyan-500 py-3.5 text-sm font-bold text-white transition-colors hover:bg-cyan-700 dark:hover:bg-cyan-400">
                Send me the report
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">Five working day turnaround. Yours to keep either way.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AeoGeoTerms() {
  const terms = [
    {
      abbr: "SEO",
      title: "Search Engine Optimization",
      desc: "Ranking in the list of blue links. Still the foundation, and still where most qualified traffic comes from for the majority of businesses.",
      q: "Does our page rank for this search?",
      color: "text-slate-900 dark:text-white",
      borderColor: "border-slate-900 dark:border-white"
    },
    {
      abbr: "AEO",
      title: "Answer Engine Optimization",
      desc: "Being the source a direct answer is pulled from. Featured snippets, knowledge panels and the summary at the top of an AI Overview.",
      q: "Are we the source the answer box quotes?",
      color: "text-green-600 dark:text-green-400",
      borderColor: "border-green-600 dark:border-green-400"
    },
    {
      abbr: "GEO",
      title: "Generative Engine Optimization",
      desc: "Being cited and recommended when a model synthesises an answer from many sources. Broader than any one page, involving what the model knows about you as an entity.",
      q: "Does the model recommend us, and in what terms?",
      color: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-600 dark:border-cyan-400"
    }
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">The Terminology</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Three acronyms, and the industry has not settled on them.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            You will also see AI SEO and LLMO used for the same work. What matters is not the label but which of these three problems you actually have, because the answer changes what we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {terms.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border-t-4 ${t.borderColor}`}
            >
              <h3 className={`text-4xl font-bold mb-4 ${t.color}`}>{t.abbr}</h3>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{t.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[80px]">{t.desc}</p>
              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <span className="block text-xs font-bold text-slate-900 dark:text-white mb-1">The question it answers</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{t.q}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 rounded-2xl bg-white dark:bg-slate-900 p-6 border-l-4 border-amber-500 text-sm text-slate-600 dark:text-slate-400">
          In practice they overlap heavily and Google treats optimisation for its own generative features as part of ordinary SEO, stating that AI Overviews draw on the same ranking and quality systems as Search. That is why we do not sell GEO as a replacement for SEO. It is an extension of it.
        </div>
      </div>
    </section>
  );
}

export function AeoGeoProblems() {
  const problems = [
    { title: "The answer is the destination", desc: "Someone asks a question, gets a synthesised answer naming three vendors, and contacts one. If you were not named, you were never in the running and you see nothing in analytics." },
    { title: "Your crawlers may be blocked", desc: "Many sites block AI crawlers without knowing it, sometimes through a CDN default rather than a deliberate choice. If the bots cannot read you, nothing else matters." },
    { title: "Most citations are not from your site", desc: "A large share of what AI systems reference comes from third party sources: directories, reviews, forums and press. Optimising only your own pages leaves most of the surface untouched." },
    { title: "Nobody is measuring it", desc: "None of this appears in Google Analytics. Without deliberate tracking you have no idea whether you are recommended, ignored, or described inaccurately." }
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Why it matters now</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            The click is no longer guaranteed to follow the research.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="rounded-2xl border-l-4 border-rose-500 bg-slate-50 dark:bg-slate-900/50 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AeoGeoEvidence() {
  const evidence = [
    { source: "Princeton, KDD 2024", title: "Evidence markers work", desc: "The foundational GEO study ran 10k queries testing content changes against whether an answer cited the page. Adding machine extractable provenance produced the biggest gains: direct quotations, statistics and citations, each worth roughly 25 to 40% more visibility.", take: "Every page we optimise carries verifiable, attributable evidence rather than assertion." },
    { source: "C-SEO Bench, 2025", title: "Most tactics do not help", desc: "The first systematic benchmark of conversational SEO techniques reached a blunt conclusion: the majority of popular tactics produce no benefit, several actively hurt, and plain source relevance keeps working.", take: "We test page quality on the source side rather than chasing prompt engineering tricks." },
    { source: "2026 survey, 45 studies", title: "It is a pipeline, not a score", desc: "A critical survey reviewing 45 studies found that generative visibility is not one ranking factor but a chain of stages, and that winning one stage does not guarantee the next.", take: "We diagnose which stage you are failing at before changing anything." }
  ];

  return (
    <section id="evidence" className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">What the research shows</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Most GEO advice has never been tested. Some of it has.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            This field generates a lot of confident guidance from people selling tools. Three published studies are worth knowing about, and they shape what we will and will not spend your budget on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {evidence.map((e, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm">
              <span className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-4">
                {e.source}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{e.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{e.desc}</p>
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 text-sm">
                <span className="block font-bold text-slate-900 dark:text-white mb-1">What we do with it</span>
                <span className="text-slate-500 dark:text-slate-400">{e.take}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
