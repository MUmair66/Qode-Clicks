import { AdsHubHero, AdsHubPlatforms, AdsHubMethod } from "@/components/AdsHub";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { PRICING } from "@/lib/site";

export const metadata = pageMetadata({
  title: "PPC Management: Google Ads and Local Services | Qode Clicks",
  description:
    "Paid advertising that pays back: Google Ads, Local Services Ads (Google Verified) and Meta campaigns, managed against revenue with transparent reporting.",
  path: "/ppc",
});

const faqs = [
  {
    question: "Which paid channel should we start with?",
    answer:
      "For most service businesses, Google Search comes first because it captures people already looking for you. If your category is eligible, Local Services Ads (Google Verified) usually add the cheapest leads on top. Meta works best once you have proof of what converts and want to create demand.",
  },
  {
    question: "How quickly will paid ads produce leads?",
    answer:
      "Most accounts see first leads within 2 to 4 weeks of launch, and cost per lead usually settles around weeks 4 to 6 once search terms, bids and landing pages have been tuned.",
  },
  {
    question: "How much does PPC management cost?",
    answer: `Google Ads management starts at ${PRICING.googleAdsMonthly} and Local Services Ads setup starts at $650. Your media budget is paid directly to Google or Meta on your own accounts, and we recommend at least ${PRICING.minAdSpendMonthly} in Google Ads spend to get meaningful data.`,
  },
  {
    question: "Do we keep our ad accounts if we leave?",
    answer:
      "Yes. Every account is set up under your ownership and billing from day one. We never mark up or resell media, and you keep the accounts, tracking and data if you stop working with us.",
  },
  {
    question: "Can you fix our conversion tracking?",
    answer:
      "Yes, and we usually start there. We audit GA4, Google Tag Manager and platform conversions, remove duplicates and add server-side events where it helps, so bidding decisions are based on real leads and sales.",
  },
];

export default function AdsParentPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <AdsHubHero />
      <AdsHubPlatforms />
      <AdsHubMethod />
      <FaqSection faqs={faqs} title="Paid advertising questions" />
      <CtaBanner
        title="Ready to win more of your market?"
        description="Get a free audit of your current ad accounts and see where budget is leaking before you spend another dollar."
        primary={{ label: "Claim your free audit", href: "/contact#contact-form" }}
        secondary={{ label: "See Google Ads plans", href: "/ppc/google-ads" }}
      />
    </div>
  );
}
