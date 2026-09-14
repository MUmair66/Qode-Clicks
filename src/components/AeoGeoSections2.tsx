"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Code2, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { AnimatedServiceCard } from "./AnimatedServiceCard";

export function AeoGeoPipeline() {
  const stages = [
    { num: "01", title: "Engine decides to search", desc: "Some answers come from the model alone and never touch the live web at all" },
    { num: "02", title: "Crawl", desc: "Your robots file, CDN rules and rendering decide whether bots can read you" },
    { num: "03", title: "Index", desc: "The page has to be stored somewhere the retrieval step can reach it" },
    { num: "04", title: "Retrieve", desc: "Queries get broken into sub questions, and you compete on each one separately" },
    { num: "05", title: "Context allocation", desc: "Retrieved does not mean used. Space in the context window is limited" },
    { num: "06", title: "Citation", desc: "Whether the answer credits you with a link, a mention, or nothing at all" },
    { num: "07", title: "Absorption", desc: "Whether the substance of your view survives into the answer, accurately" }
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white border-y border-slate-800 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-amber-500">The Pipeline</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Seven stages between your page and a citation.
          </h2>
          <p className="text-lg text-slate-300">
            Visibility in an AI answer is not a position you hold. It is a sequence you have to survive. Each stage has different failure modes, and the diagnosis determines the work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16 pt-8 border-t-2 border-slate-700">
          {stages.map((s, i) => (
            <div key={i} className="relative pt-4">
              <div className="absolute -top-[5px] left-0 w-3 h-3 rounded-full bg-amber-500" />
              <span className="block text-xs font-bold text-amber-500 mb-3">{s.num}</span>
              <h3 className="font-bold text-sm mb-2 leading-tight">{s.title}</h3>
              <p className="text-xs text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-800/50 p-8 border-l-4 border-green-500">
            <span className="block text-sm font-bold text-slate-400 mb-2">Worth doing</span>
            <h3 className="text-xl font-bold mb-6">Supported by evidence or by Google directly</h3>
            <ul className="space-y-4">
              {[
                "Making sure AI crawlers can actually reach and render your pages",
                "Adding statistics, quotations and cited sources to key pages",
                "Structured data using supported vocabulary that matches visible content",
                "Entity clarity, so the model knows what you are and what you are not",
                "Third party presence: reviews, directories, press, comparison sites",
                "Ordinary strong SEO, which still feeds the generative surfaces"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 border-t border-slate-700/50 pt-4 first:border-0 first:pt-0">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-800/50 p-8 border-l-4 border-rose-500">
            <span className="block text-sm font-bold text-slate-400 mb-2">Not worth your money</span>
            <h3 className="text-xl font-bold mb-6">Untested, disproven, or explicitly ignored</h3>
            <ul className="space-y-4">
              {[
                "llms.txt files sold as a ranking factor, covered in detail below",
                "Hidden text or instructions aimed at manipulating a model",
                "Prompt engineering tricks embedded in page copy",
                "Bulk publishing AI content to increase surface area",
                "Any 'special markup' claimed to guarantee AI Overview inclusion",
                "Guaranteed citation rates, which nobody can honestly offer"
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

export function AeoGeoBand() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-950 p-10 md:p-16 grid md:grid-cols-[1.35fr_0.65fr] gap-10 items-center shadow-2xl">
          <div>
            <span className="block text-sm font-bold text-amber-500 mb-4 uppercase tracking-wider">Free Report</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find out what the models say about you right now.
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl">
              We run a set of real buying questions from your category across six AI surfaces and send you the transcripts: whether you are named, who is named instead, whether the description is accurate, and which sources each answer was built from.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Six surfaces", "Real buying questions", "Competitors named", "Yours to keep"].map((tag, i) => (
                <span key={i} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#quote" className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-slate-900 transition-colors hover:bg-cyan-400">
              Get my visibility report
            </Link>
            <Link href="#measure" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 text-sm font-bold text-white transition-colors hover:bg-white/10">
              How we measure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AeoGeoWorkstreams() {
  const accessStreams = [
    { title: "AI crawler access audit", desc: "Checking whether GPTBot, ClaudeBot, PerplexityBot and the rest can actually reach your pages. A surprising number of sites block them by accident." },
    { title: "Rendering and delivery", desc: "AI crawlers largely read the HTML your server returns. Content that only appears after JavaScript executes may as well not exist for them." },
    { title: "Structured data", desc: "Supported schema vocabulary that matches what is visibly on the page, used to clarify what your entities are rather than to decorate the source code." }
  ];

  const contentStreams = [
    { title: "Evidence enrichment", desc: "The single best supported tactic in the literature. Adding verifiable statistics, direct quotations and cited sources to the pages you most want cited." },
    { title: "Query fan-out mapping", desc: "AI systems break a question into sub questions and search each separately. We map the sub questions and make sure something of yours answers each one." },
    { title: "Extractable formatting", desc: "Clear definitions, direct answers near the top, self contained sections and unambiguous headings. Content that can be lifted cleanly without the surrounding page." },
    { title: "Question coverage", desc: "The literal questions buyers ask, answered directly on your site rather than implied across three paragraphs of positioning language." },
    { title: "Comparison and alternatives", desc: "Buying prompts are overwhelmingly comparative. If no honest comparison of you against your competitors exists, the model will build one from whatever does exist." },
    { title: "Narrative accuracy", desc: "Models sometimes describe businesses incorrectly: wrong market, discontinued product, outdated pricing. We find those errors and correct the sources feeding them." }
  ];

  const entityStreams = [
    { title: "Third party presence", desc: "A large majority of AI references come from sources other than the brand's own site. Directories, review platforms, industry lists and comparison sites do more work than your homepage." },
    { title: "Digital PR and citations", desc: "Press coverage, expert commentary and data led stories. Being quoted by sources the models already trust is more effective than asserting expertise on your own domain." },
    { title: "Entity consistency", desc: "Same name, same description, same category everywhere. Inconsistency across profiles gives a model conflicting information and it resolves that conflict unpredictably." }
  ];

  return (
    <section id="work" className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">What we do</span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Twelve workstreams, grouped by which stage they fix.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            The audit tells us which stage you are failing at. There is no point writing evidence rich content if a CDN rule is blocking the crawler that would read it.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-white/10">Access, stages one to three</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accessStreams.map((s, i) => (
              <AnimatedServiceCard key={i} item={{ title: s.title, description: s.desc, icon: Code2 }} index={i} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-white/10">Content and evidence, stages four to six</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contentStreams.map((s, i) => (
              <AnimatedServiceCard key={i} item={{ title: s.title, description: s.desc, icon: FileText }} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-white/10">Entity and authority, the part that is not on your website</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {entityStreams.map((s, i) => (
              <AnimatedServiceCard key={i} item={{ title: s.title, description: s.desc, icon: Globe }} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AeoGeoLlmsText() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 p-8 md:p-12">
          <span className="block text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4">Straight answer</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            About llms.txt, which you have probably been pitched.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-3xl">
            It is the most sold item in this category and the least supported. Many agencies sell the creation of an llms.txt file as an "optimization" that guarantees AI models will read your site properly. Currently, almost no major consumer LLM uses these files for crawling or indexing decisions. Focus on standard crawler access, rendering, and structured data instead.
          </p>
        </div>
      </div>
    </section>
  );
}
