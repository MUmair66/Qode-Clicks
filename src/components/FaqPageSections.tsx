"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, X, Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const faqData = [
  {
    category: "Getting started",
    id: "start",
    faqs: [
      { q: "What happens in the free audit?", a: "A specialist reviews your analytics, ad accounts and site performance, then sends a written document covering what is broken, what it is likely costing you each month, and what we would fix first and in what order. Turnaround is five working days. There is no presentation and no sales deck. You keep the findings whether or not we work together." },
      { q: "How do we know if we are the right fit for you?", a: "We work best with businesses spending at least $3,000 a month on media, or budgeting at least $6,500 for a build. Below that there is not enough volume to optimize against and you would get more from a good freelancer. We also turn down work where the product is the problem rather than the marketing, and where tracking is broken and the client will not let us fix it first." },
      { q: "What do you need from us to begin?", a: "Admin access to Google Analytics, Search Console, Google Ads and Meta if you run them, plus access to your hosting and CMS. If you do not have some of these, we will set them up under your ownership rather than ours. We also want thirty minutes with whoever knows the sales process best." },
      { q: "How quickly can you start?", a: "Usually within one to two weeks of signing. Audits are faster and can often begin the same week. Larger builds get scheduled against current capacity, and we will tell you the honest start date rather than book you in and stall." },
      { q: "Do you work with businesses outside your timezone?", a: "Most of our clients are in the US, UK and Gulf. We hold at least four hours of daily overlap with every account and run everything else asynchronously in a shared Slack channel, so nothing waits a full day for an answer." }
    ]
  },
  {
    category: "Pricing and contracts",
    id: "pricing",
    faqs: [
      { q: "How much do your services cost?", a: "Retainers start at $3,200 a month and scale with the number of channels and developer hours. Fixed scope builds start at $6,500 for WordPress and $11,000 for WooCommerce. One off projects range from $950 to $3,400. You always get a written scope with a fixed monthly figure before anything starts." },
      { q: "Is ad spend included in the retainer?", a: "No. Management fees and media budget are separate. Your media is billed directly to your own card on your own ad accounts, and we never mark it up, resell it or take a commission from platforms." },
      { q: "What are your contract terms?", a: "Three month minimum on retainers so there is enough time to show something, then rolling with thirty days notice. No twelve month lock in and no cancellation penalty. Fixed scope projects have no ongoing term at all." },
      { q: "What happens to our accounts if we leave?", a: "You keep everything, because it was always yours. Ad accounts sit under your billing from day one, code lives in your repository, analytics is in your name. On exit you get full documentation, dashboard ownership and a handover call." },
      { q: "Do you offer refunds or performance guarantees?", a: "We do not guarantee specific rankings or a specific return, because nobody controls the auction or the algorithm. What we do guarantee is the scope, the deliverables and the reporting cadence in writing. If we fail to deliver what the scope says, we fix it or credit the month." },
      { q: "Can we change or pause our plan?", a: "Yes. Scope changes are agreed in writing and take effect from the following month. Pauses are available for genuine seasonality, typically up to two months, provided the account is not mid build." }
    ]
  },
  {
    category: "SEO",
    id: "seo",
    faqs: [
      { q: "How long before we see results from SEO?", a: "Long tail and low competition terms usually move in eight to twelve weeks. Competitive head terms take six to nine months. Technical fixes can produce faster gains, sometimes within weeks. The audit tells you which category your site is in before you commit anything." },
      { q: "Do you guarantee first page rankings?", a: "No. We forecast the traffic and revenue range we expect based on current search volume, your competitors and the site's starting position. A guarantee of position one is either for a keyword nobody searches or a promise nobody can keep." },
      { q: "Where do your backlinks come from?", a: "Digital PR, data led outreach, unlinked mention reclamation and resource placements. Every link is reported with the domain, its traffic and the method used. We do not buy from marketplaces, use private blog networks, or run link exchanges." },
      { q: "Is content writing included in SEO?", a: "Yes. Two pieces a month on the Local plan, four on Growth, six or more on the ecommerce plan. Written in house by people who research the subject rather than paraphrasing the top three results." },
      { q: "Can you recover a site that lost traffic after a Google update?", a: "Often, though it depends what caused it. We start by isolating whether the drop is technical, content quality, link related, or simply a change in how results are laid out. Recovery is usually a three to six month engagement." }
    ]
  },
  {
    category: "Paid media",
    id: "paid",
    faqs: [
      { q: "What is the minimum ad budget you work with?", a: "Around $3,000 a month across paid channels. Below that there is not enough conversion data for the platforms to optimize, and you will spend more on management than on reaching people." },
      { q: "How quickly do paid campaigns start working?", a: "Four to six weeks for meaningful movement, assuming tracking is clean when we start. The first two weeks are usually learning phase and data collection. We tell you upfront what the first month is expected to look like." },
      { q: "Do you write the ad creative?", a: "Copy, yes, on every plan. Static and motion creative production is included on the Scale package and available as an add on otherwise. For user generated content we brief and direct it rather than filming it ourselves." },
      { q: "Will you work with our existing ad account or start fresh?", a: "We work with what you have wherever possible, because account history has real value in the auction. We restructure inside it rather than starting over, unless the account is genuinely unsalvageable." },
      { q: "Do you handle Performance Max and Shopping?", a: "Yes, including product feed setup and optimization, which is where most Shopping performance actually comes from. On Performance Max we structure it so it stops absorbing your brand traffic and claiming credit for sales you were getting anyway." }
    ]
  },
  {
    category: "Development and WordPress",
    id: "dev",
    faqs: [
      { q: "Do you use page builders like Elementor or Divi?", a: "No. They are the main reason a WordPress site loads in four seconds. We build custom themes with a library of around twelve ACF flexible content blocks, which gives your team the same page building freedom without the performance cost." },
      { q: "Can our team edit the site without a developer?", a: "Yes, that is the point of the block library. Once handed over, your marketing team can build new pages from existing blocks. We include editor training and written documentation." },
      { q: "How long does a WordPress build take?", a: "Six to ten weeks for a typical marketing site, eight to fourteen for WooCommerce. Larger catalogs and custom integrations extend that. You get a phased timeline with milestones at the start." },
      { q: "Will a rebuild hurt our rankings?", a: "Not if it is done properly. URL mapping, redirect strategy, pre launch checks and a monitored cutover are standard on every migration. A short dip in the first fortnight is normal, a sustained drop is not." },
      { q: "Do you offer hosting and ongoing maintenance?", a: "We do not resell hosting, but we will recommend and configure it. Maintenance runs through our care plans from $180 a month, covering updates tested on staging, daily backups, security hardening and included development hours." }
    ]
  },
  {
    category: "Working together",
    id: "working",
    faqs: [
      { q: "Who will actually be working on our account?", a: "The people on your kickoff call. You get a named strategist, a media buyer and a developer, all in house, and you can message all three directly in a shared Slack channel. We do not sell with seniors and deliver with juniors." },
      { q: "What does reporting look like?", a: "A live Looker Studio dashboard you can open any time, plus a written monthly summary that leads with revenue and cost per acquisition. Monthly review calls run forty five minutes on retainers." },
      { q: "How quickly do you respond to messages?", a: "Within one working day for anything in Slack or email, usually much faster during overlap hours. Site down or campaign spending incorrectly is treated as urgent and handled immediately." },
      { q: "Can you work alongside our in house marketing team?", a: "Often the better setup. We usually take the channels or the development work your team does not have capacity for, and hand back documentation as we go so the knowledge stays with you." },
      { q: "What if we are not happy with the work?", a: "Tell us early rather than at renewal. Every account has a monthly review specifically so problems surface while they are still fixable. If something is genuinely not working we will change the approach or the team member." }
    ]
  }
];

export function FaqLayout() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState(faqData[0].id);

  const filteredData = useMemo(() => {
    if (!query.trim()) return faqData;
    const lowerQuery = query.toLowerCase();
    
    return faqData.map(group => {
      const filteredFaqs = group.faqs.filter(
        faq => faq.q.toLowerCase().includes(lowerQuery) || faq.a.toLowerCase().includes(lowerQuery)
      );
      return { ...group, faqs: filteredFaqs };
    }).filter(group => group.faqs.length > 0);
  }, [query]);

  const totalMatches = filteredData.reduce((acc, curr) => acc + curr.faqs.length, 0);

  // Auto-update active tab on scroll could be added, but for simplicity we rely on click navigation
  useEffect(() => {
    const handleScroll = () => {
      if (query) return; // Disable scroll spy during search
      const sections = faqData.map(g => document.getElementById(g.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(faqData[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [query]);

  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      
      {/* Hero & Search */}
      <section className="pt-28 pb-16 lg:pt-28 lg:pb-24 px-5 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Everything clients ask <span className="text-cyan-400">before</span> they sign.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Pricing, contracts, timelines and how we actually work. If the answer is not here, ask us directly and we will add it.
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, for example 'refunds' or 'SEO timeline'" 
              className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-full py-4 pl-14 pr-12 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-base"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 items-center text-sm text-slate-500 dark:text-slate-400">
            <span className="mr-2">Popular:</span>
            {["Pricing", "Contracts", "Timelines", "WordPress", "Reporting"].map((term) => (
              <button 
                key={term} 
                onClick={() => setQuery(term)}
                className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[250px_1fr] gap-12 lg:gap-24 items-start">
          
          {/* Sidebar */}
          <aside className="sticky top-24 hidden lg:block space-y-8">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-1">
                {faqData.map((group) => (
                  <li key={group.id}>
                    <a 
                      href={`#${group.id}`}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${activeTab === group.id && !query ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-white'}`}
                      onClick={() => { setActiveTab(group.id); setQuery(""); }}
                    >
                      {group.category}
                      <span className={`text-xs ${activeTab === group.id && !query ? 'text-cyan-500' : 'text-slate-600'}`}>{group.faqs.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-xl p-6 border border-slate-100 dark:border-white/5">
              <strong className="block text-slate-900 dark:text-white font-bold mb-2">Still stuck?</strong>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Email a specialist directly. We reply within one working day.</p>
              <Link href="/services/contact" className="inline-block border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-white hover:text-slate-900 transition-colors">
                Email us
              </Link>
            </div>
          </aside>

          {/* FAQ List */}
          <div>
            {query && (
              <p className="text-cyan-400 text-sm font-semibold mb-8">
                {totalMatches === 1 ? '1 question matches' : `${totalMatches} questions match`} "{query}"
              </p>
            )}

            {filteredData.length === 0 ? (
              <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-12 text-center border border-slate-100 dark:border-white/5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Nothing matched that search.</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">Try a shorter phrase, or ask us directly and we will answer within one working day.</p>
                <Link href="/services/contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-full px-6 py-3 hover:bg-slate-200 transition-colors">
                  Ask a specialist
                </Link>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredData.map((group) => (
                  <div key={group.id} id={group.id} className="scroll-mt-32">
                    <div className="flex items-baseline gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{group.category}</h2>
                      {!query && <span className="text-sm text-slate-500">{group.faqs.length} questions</span>}
                    </div>
                    
                    <div className="space-y-3">
                      {group.faqs.map((faq, i) => (
                        <details key={i} open={query.length > 0} className="group bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 font-semibold text-base text-slate-900 dark:text-white">
                            <span className="pr-6">{faq.q}</span>
                            <span className="relative flex-shrink-0 w-5 h-5 text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 md:px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            {faq.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-white/5 bg-slate-100 dark:bg-[#080b12]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-cyan-400 font-semibold text-sm mb-3 uppercase tracking-wider">Still not answered</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Three ways to get a real answer from a real person.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Email a specialist</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">Straight to the team, not a shared inbox that nobody reads. Reply within one working day.</p>
              <a href="mailto:hello@qodeclicks.com" className="text-cyan-400 font-bold text-sm hover:underline">hello@qodeclicks.com</a>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Book a 20 minute call</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">No deck, no discovery script. Tell us the problem and we will tell you whether we can help.</p>
              <Link href="/services/contact" className="text-blue-400 font-bold text-sm hover:underline">Pick a time</Link>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Get the free audit</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">The fastest way to a specific answer about your account rather than a general one.</p>
              <Link href="/services/contact" className="text-emerald-400 font-bold text-sm hover:underline">Request an audit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#05070d]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-50" />
            <p className="text-blue-100 font-bold text-sm mb-4 uppercase tracking-wider relative z-10">Free audit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Your question is probably about your account, not ours.</h2>
            <p className="text-blue-50 text-sm md:text-base mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Send us the site and a specialist will reply with what is actually worth fixing first, in order, with what it would cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link href="/services/contact" className="bg-blue-50 text-blue-600 dark:bg-white dark:text-blue-600 font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
                Request my free audit
              </Link>
              <Link href="/#projects" className="bg-transparent text-slate-900 dark:text-white border-2 border-white/30 font-bold px-8 py-3.5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                See our results
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
