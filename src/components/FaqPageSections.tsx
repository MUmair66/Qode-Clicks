"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, X, Mail, Phone, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE } from "@/lib/site";

export type FaqItem = { q: string; a: string; link?: { label: string; href: string } };
export type FaqGroup = { category: string; id: string; faqs: FaqItem[] };

export function FaqLayout({ data: faqData }: { data: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState(faqData[0].id);

  const filteredData = useMemo(() => {
    if (!query.trim()) return faqData;
    const lowerQuery = query.toLowerCase();
    
    return faqData.map(group => {
      const filteredFaqs = group.faqs.filter(
        faq => group.category.toLowerCase().includes(lowerQuery) || faq.q.toLowerCase().includes(lowerQuery) || faq.a.toLowerCase().includes(lowerQuery)
      );
      return { ...group, faqs: filteredFaqs };
    }).filter(group => group.faqs.length > 0);
  }, [query, faqData]);

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
  }, [query, faqData]);

  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      
      {/* Hero & Search */}
      <section className="pt-28 pb-16 lg:pt-28 lg:pb-16 px-5 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} className="mb-8 flex justify-center" />
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">FAQ</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Everything clients ask <span className="text-cyan-700 dark:text-cyan-400">before</span> they sign.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Pricing, contracts, timelines and how we actually work. If the answer is not here, ask us directly and we will add it.
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input name="faq_search"
              type="search"
              aria-label="Search frequently asked questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, for example 'refunds' or 'SEO timeline'" 
              className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-full py-4 pl-14 pr-12 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-base"
            />
            {query && (
              <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 items-center text-sm text-slate-500 dark:text-slate-400">
            <span className="mr-2">Popular:</span>
            {["Pricing", "Contract", "How long", "WordPress", "Reporting"].map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => setQuery(term)}
                className="min-h-[44px] px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[250px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Sidebar */}
          <aside className="sticky top-24 hidden lg:block space-y-8">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-1">
                {faqData.map((group) => (
                  <li key={group.id}>
                    <a 
                      href={`#${group.id}`}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${activeTab === group.id && !query ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
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
              <a href={`mailto:${SITE.email}`} className="inline-block border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-white hover:text-slate-900 transition-colors">
                Email us
              </a>
            </div>
          </aside>

          {/* FAQ List */}
          <div>
            {query && (
              <p className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold mb-8">
                {totalMatches === 1 ? '1 question matches' : `${totalMatches} questions match`} "{query}"
              </p>
            )}

            {filteredData.length === 0 ? (
              <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-12 text-center border border-slate-100 dark:border-white/5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Nothing matched that search.</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">Try a shorter phrase, or ask us directly and we will answer within one working day.</p>
                <Link href="/contact#contact-form" className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 font-bold rounded-full px-6 py-3 hover:bg-cyan-400 transition-colors">
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
                      {group.faqs.map((faq) => (
                        <details key={faq.q} open={query.length > 0} className="group bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 font-semibold text-base text-slate-900 dark:text-white">
                            <span className="pr-6">{faq.q}</span>
                            <span className="relative flex-shrink-0 w-5 h-5 text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 md:px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            <p>{faq.a}</p>
                            {faq.link ? (
                              <Link href={faq.link.href} className="mt-3 inline-block text-cyan-700 dark:text-cyan-400 font-semibold hover:underline">
                                {faq.link.label} &rarr;
                              </Link>
                            ) : null}
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
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-white/5 bg-slate-100 dark:bg-[#080b12]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3 uppercase tracking-wider">Still not answered</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Three ways to get a real answer from a real person.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Email a specialist</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">Straight to the team, not a shared inbox that nobody reads. Reply within one working day.</p>
              <a href={`mailto:${SITE.email}`} className="text-cyan-700 dark:text-cyan-400 font-bold text-sm hover:underline">{SITE.email}</a>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Book a 20 minute call</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">No deck, no discovery script. Tell us the problem and we will tell you whether we can help.</p>
              <Link href={SITE.bookingUrl} className="text-cyan-700 dark:text-cyan-400 font-bold text-sm hover:underline">Pick a time</Link>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-8 border border-slate-100 dark:border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Get the free audit</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">The fastest way to a specific answer about your account rather than a general one.</p>
              <Link href="/contact#contact-form" className="text-cyan-700 dark:text-cyan-400 font-bold text-sm hover:underline">Request an audit</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Your question is probably about your account, not ours."
        description="Send us the site and a specialist will reply with what is actually worth fixing first, in order, with what it would cost."
        primary={{ label: "Request my free audit", href: "/contact#contact-form" }}
        secondary={{ label: "See pricing", href: "/#pricing" }}
      />

    </div>
  );
}
