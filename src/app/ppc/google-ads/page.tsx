"use client";

import Link from "next/link";
import { AdsHero, AdsReasons, AdsCampaignTypes, AdsLocalBanner, AdsMaps, AdsAuditCTA } from "@/components/AdsSections";
import { AdsIncluded, AdsPricing, AdsOneOffWork } from "@/components/AdsSections2";
import { AdsProcess } from "@/components/AdsSections3";
import { FaqSection } from "@/components/FaqSection";

export default function AdsPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <AdsHero />
      <AdsReasons />
      <AdsProcess />
      <AdsCampaignTypes />
      <AdsLocalBanner />
      <AdsMaps />
      <AdsAuditCTA />
      <AdsIncluded />
      <AdsPricing />
      <AdsOneOffWork />
      
      {/* FAQs */}
      <FaqSection />

      {/* Bottom Solid CTA */}
      <section className="py-24 px-5 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#05070d]">
        <div className="mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
              Stop funding traffic that never converts.
            </h2>
            <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Book a call with our ads director to discuss your Google Ads account. We'll run a free audit and tell you exactly where you're wasting money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="#audit" className="bg-blue-50 text-blue-600 dark:bg-white dark:text-blue-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform">
                Get a free account audit
              </Link>
              <Link href="/#contact" className="bg-transparent text-slate-900 dark:text-white border-2 border-white/30 font-bold px-8 py-4 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
