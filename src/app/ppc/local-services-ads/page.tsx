import { LsaHero, LsaReasons, LsaBadges, LsaStickyCta } from "@/components/LsaSections";
import { LsaEligibility, LsaBanner, LsaProcess, LsaCompare, LsaPricing, LsaWorksWellWith } from "@/components/LsaSections2";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const title = "Local Services Ads Agency (Google Verified) | Qode Clicks";
const description =
  "Get verified and live on Local Services Ads with the Google Verified badge. Pay per lead, not per click. Setup from $650, managed plans from $900/mo.";

export const metadata = pageMetadata({ title, description, path: "/ppc/local-services-ads" });

const faqs = [
  {
    question: "Is Google Guaranteed still available?",
    answer:
      "Not in the US. In October 2025 Google merged Google Guaranteed, Google Screened and License Verified into a single Google Verified badge for Local Services Ads, and the money back guarantee was discontinued. The UK still shows the older badges while it transitions.",
  },
  {
    question: "How long does Local Services Ads verification take?",
    answer:
      "Typically 2 to 6 weeks, depending on your category and how quickly background, license and insurance checks clear. Once live, most businesses get first leads within 2 to 4 weeks and a stable cost per lead around weeks 4 to 6.",
  },
  {
    question: "What does a Local Services Ads lead cost?",
    answer:
      "It depends on your trade and city. We give you a lead cost range for your area during the free eligibility check. You pay Google per qualifying lead, and since 1 October 2026 some missed calls are billable too, so answering quickly matters.",
  },
  {
    question: "Can we get refunds for bad leads?",
    answer:
      "Yes. Spam, wrong number, out of area and wrong service leads can be disputed for a credit. On our managed plan we review and file disputes every week.",
  },
  {
    question: "What does Local Services Ads management cost?",
    answer:
      "Setup only is $650 one-off, with no fee if your category turns out to be ineligible. Managed plans are $900/mo including setup, and multi-location plans start from $2,400/mo. Your lead budget is paid directly to Google.",
  },
];

export default function LsaPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "Local Services Ads Management (Google Verified)", description, path: "/ppc/local-services-ads" })} />
      <LsaHero />
      <LsaReasons />
      <LsaBadges />
      <LsaEligibility />
      <LsaBanner />
      <LsaProcess />
      <LsaCompare />
      <LsaPricing />
      <LsaWorksWellWith />
      <FaqSection faqs={faqs} title="Local Services Ads questions" />
      <CtaBanner
        title="Check your Local Services Ads eligibility."
        description="Tell us your trade and your city. We confirm within a day whether your category is covered, which badge applies and what Google will ask for."
        primary={{ label: "Check my eligibility", href: "#quote" }}
        secondary={{ label: "Talk to us", href: "/contact#contact-form" }}
      />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <LsaStickyCta />
    </div>
  );
}
