import { AdsHero, AdsReasons, AdsCampaignTypes, AdsLocalBanner, AdsMaps, AdsAuditCTA } from "@/components/AdsSections";
import { AdsIncluded, AdsPricing, AdsOneOffWork } from "@/components/AdsSections2";
import { AdsProcess } from "@/components/AdsSections3";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PRICING } from "@/lib/site";

const title = "Google Ads Management Agency, From $900/mo | Qode Clicks";
const description =
  "Google Ads management from $900/mo: Search, Shopping, Performance Max and remarketing, with landing pages built in. Get a free written account audit.";

export const metadata = pageMetadata({ title, description, path: "/ppc/google-ads" });

const faqs = [
  {
    question: "How soon will Google Ads start producing leads?",
    answer:
      "Most accounts see first leads within 2 to 4 weeks of launch. Cost per lead usually stabilizes around weeks 4 to 6, once search terms, negatives, bids and landing pages have had enough data to tune.",
  },
  {
    question: "What does Google Ads management cost?",
    answer: `Management starts at ${PRICING.googleAdsMonthly} for Search-only accounts with up to $8,000 in monthly media, $1,600/mo for multi-campaign accounts, and from $3,200/mo for multi-location. Above $60,000/mo in media, the fee is 10% of spend.`,
  },
  {
    question: "Is there a minimum ad budget?",
    answer: `We recommend at least ${PRICING.minAdSpendMonthly} in media so campaigns gather enough conversion data to optimize. Media is billed directly to your own card on your own account, and we never mark it up.`,
  },
  {
    question: "What is included in the free account audit?",
    answer:
      "A specialist reviews your account structure, search terms, conversion tracking, bidding and landing pages, then sends a written report with wasted spend and the changes we would make first. Turnaround is five working days and the report is yours to keep.",
  },
  {
    question: "Do you lock us into a long contract?",
    answer:
      "There is a three month minimum so changes have time to prove out, then it is rolling with thirty days' notice. Your ad accounts stay in your name and billing the whole time.",
  },
];

export default function AdsPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "Google Ads Management", description, path: "/ppc/google-ads" })} />
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
      <FaqSection faqs={faqs} title="Google Ads questions" />
      <CtaBanner
        title="Stop funding traffic that never converts."
        description="Book a call with our paid media lead to talk through your Google Ads account, or request a free written audit showing exactly where budget is being wasted."
        primary={{ label: "Get a free account audit", href: "#audit" }}
        secondary={{ label: "Book a call with our paid media lead", href: "/contact#contact-form" }}
      />
    </div>
  );
}
