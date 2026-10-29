import { BuildApproaches, SpecialistWork, BuildComparisonTable, SpeedCTA } from "@/components/WordPressSections";
import { SixPhasesProcess, EightThingsIncluded, WorksWellWith } from "@/components/WordPressSections2";
import { WordPressHero, WordPressHighlights } from "@/components/WordPressContent";
import { MobileStickyCta } from "@/components/CustomAppsContent";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PRICING } from "@/lib/site";

const title = "WordPress Website Development from $780 | Qode Clicks";
const description =
  "WordPress development from template kit builds at $780 to custom themes from $4,200 and headless WordPress. Fast, secure sites your team can easily edit.";

export const metadata = pageMetadata({ title, description, path: "/website-development/wordpress" });

const faqs = [
  {
    question: "How much does a WordPress website cost?",
    answer: `It depends on the build. Template kit builds start from ${PRICING.wordpressBuild}, premium theme builds from $1,450, fully custom themes from ${PRICING.wordpressCustom}, Figma design plus custom build from $5,800 and headless WordPress from $11,000. WooCommerce stores start from ${PRICING.wooCommerce}.`,
  },
  {
    question: "How long does a WordPress build take?",
    answer:
      "Template kit builds go live in 1 to 2 weeks, premium theme builds in 2 to 4 weeks, custom themes in 6 to 10 weeks and headless builds in 10 to 16 weeks. You sign off each phase before the next one starts.",
  },
  {
    question: "Can my team edit the site without a developer?",
    answer:
      "Yes. Custom builds use a block library made with Advanced Custom Fields, so your team assembles pages from ready-made blocks in the normal WordPress editor. Every project ends with a recorded training session and written docs.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: `Yes. Care plans start from ${PRICING.carePlanMonthly} and include managed hosting with CDN and SSL, updates tested on staging, daily backups and monthly development hours. Plans are rolling and you can cancel anytime.`,
  },
  {
    question: "Can you migrate my site from Wix, Squarespace or another host?",
    answer:
      "Yes. Migrations start from $450 and include full URL mapping, 301 redirects, content and media transfer, a side-by-side staging review and daily Search Console monitoring for 14 days after launch. You own the domain, code and hosting account throughout.",
  },
];

export default function WordPressPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "WordPress Website Development", description, path: "/website-development/wordpress" })} />
      <WordPressHero />
      <SpeedCTA />
      <WordPressHighlights />
      <BuildApproaches />
      <BuildComparisonTable />
      <SpecialistWork />
      <SixPhasesProcess />
      <EightThingsIncluded />
      <WorksWellWith />
      <FaqSection faqs={faqs} title="WordPress development questions." />
      <CtaBanner
        title="Not sure which WordPress build fits?"
        description="Tell us about your site and budget. We will recommend the right build and send a fixed-price proposal within 48 hours."
        primary={{ label: "Get an Estimate", href: "#estimate" }}
        secondary={{ label: "Contact Us", href: "/contact#contact-form" }}
      />
      <MobileStickyCta href="#estimate" label="Get an Estimate" />
    </div>
  );
}
