import { ArrowRight, Search, Map, PenTool, Sparkles, Share2, TrendingUp, BarChart3, CheckCircle2, Globe, Target } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCta } from "@/components/SeoMobileCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Marketing: SEO, Social and Local SEO | Qode Clicks",
  description:
    "Organic growth from Qode Clicks: SEO, AI SEO, Google Business Profile, content writing and social media marketing, measured in leads rather than likes.",
  path: "/digital-marketing",
});

const organicServices = [
  {
    id: "seo",
    title: "SEO",
    description:
      "Technical, on-page and off-page SEO built around the searches that convert, reported in revenue and leads rather than rankings.",
    icon: Search,
    href: "/digital-marketing/seo",
    features: ["Technical audits", "Keyword and intent strategy", "Earned link building", "Competitor analysis"],
  },
  {
    id: "ai-seo",
    title: "AI SEO",
    description:
      "Get cited when buyers ask AI. We optimize your site and your wider web presence for Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini and Claude.",
    icon: Sparkles,
    href: "/digital-marketing/ai-seo",
    features: ["AI crawler access", "Entity optimization", "Evidence-rich content", "Monthly share of model reporting"],
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description:
      "Content written by people who read the source: SEO articles, service and location pages, landing page copy and refreshes of pages that have slipped.",
    icon: PenTool,
    href: "/digital-marketing/content-writing",
    features: ["SEO articles", "Website and landing page copy", "Content refreshes", "Topic clusters"],
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    description:
      "Show up in the local map pack across your whole service area, measured with a 49 point geo-grid rather than a search from your own office.",
    icon: Map,
    href: "/digital-marketing/google-business-profile",
    features: ["Local map pack", "Review workflow and responses", "Local citations", "Geo-grid tracking"],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "A consistent, on-brand presence on Instagram, Facebook, LinkedIn and TikTok: strategy, content calendars, post design, short-form video and community management.",
    icon: Share2,
    href: "/digital-marketing/social-media-marketing",
    features: ["Content calendars", "Post design and Reels", "Community management", "Monthly analytics"],
  },
];

const faqs = [
  {
    question: "Which organic service should we start with?",
    answer:
      "It depends on where you lose customers. Local service businesses usually start with Google Business Profile, sites with technical problems start with SEO, and sites with thin or outdated pages start with content. The free SEO audit tells you which applies.",
  },
  {
    question: "How long does organic marketing take to work?",
    answer:
      "Technical fixes can show gains within about 30 days. Content, links and local signals typically take 3 to 6 months to compound. If you need leads sooner, paid search can cover the gap while SEO builds.",
  },
  {
    question: "What is AI SEO and do we need it?",
    answer:
      "AI SEO is the work of being cited when tools like Google AI Overviews, ChatGPT and Perplexity answer questions in your category. It builds on ordinary SEO rather than replacing it, so most businesses add it once the SEO foundations are sound.",
  },
  {
    question: "How much do your organic services cost?",
    answer:
      "SEO plans start at $1,600 per month and content writing plans start at $520 per month. Each service page lists what is included, and the free audit comes with a written recommendation for your site.",
  },
];

export default function DigitalMarketingParentPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-14 lg:pt-28 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />

        <div className="mx-auto max-w-7xl mb-10">
          <Breadcrumbs items={[{ name: "Digital Marketing", path: "/digital-marketing" }]} />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-6 uppercase tracking-wider">
            Digital Marketing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Own the search results. <br />
            <span className="inline-block text-cyan-600 dark:text-cyan-400 font-serif italic pr-2">Today and tomorrow.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build compounding organic growth through technical SEO, content that earns its position, local map pack visibility, AI search optimization and social media.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#services" className="rounded-full bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
              Explore organic services <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/digital-marketing/seo#audit" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Get a free SEO audit
            </Link>
          </div>
        </div>
      </section>

      {/* The Services Grid */}
      <section id="services" className="scroll-mt-24 py-14 md:py-20 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">Our expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">The complete organic playbook</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              From classic search results to AI answers, we make your business the source that gets recommended.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {organicServices.map((service) => (
              <div
                key={service.id}
                className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl md:[&:last-child:nth-child(odd)]:col-span-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
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

                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Learn more about {service.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8">
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-backed content</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Every piece is planned from search intent, entity analysis and competitive gap research, then edited by a second person.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical foundation first</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Great content fails on a broken site. We fix architecture, schema markup and page speed so your pages can be crawled, indexed and loaded fast.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Compounding returns</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Unlike paid ads that stop the moment you turn them off, organic work builds equity over time and lowers your long-term cost per customer.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">Our methodology</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Visibility that lasts.</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                With AI Overviews and chat-based search, ranking a page is no longer the whole job. We combine classic SEO with generative engine optimization (GEO) so you are found in the results and cited in the answers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "In-depth technical architecture audits",
                  "Entity-based content clustering",
                  "Local authority and citation building",
                  "AI search readiness and entity consistency",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact#contact-form" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Speak with an SEO specialist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Organic marketing questions" />

      <CtaBanner
        title="Ready to grow organic search?"
        description="Build a compounding source of qualified traffic alongside your paid ads. Start with a free SEO audit of your site."
        primary={{ label: "Get your free SEO audit", href: "/digital-marketing/seo#audit" }}
        secondary={{ label: "Book a strategy call", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="/digital-marketing/seo#audit" label="Get a free SEO audit" />
    </div>
  );
}
