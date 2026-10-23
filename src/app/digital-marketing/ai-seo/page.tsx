import { AeoGeoHero, AeoGeoTerms, AeoGeoProblems, AeoGeoEvidence } from "@/components/AeoGeoSections";
import { AeoGeoPipeline, AeoGeoBand, AeoGeoWorkstreams, AeoGeoLlmsText } from "@/components/AeoGeoSections2";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/SeoMobileCta";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "AI SEO built on published evidence: get cited in Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini and Claude. Get a free AI visibility report.";

export const metadata = pageMetadata({
  title: "AI SEO Services: Get Cited in AI Search | Qode Clicks",
  description,
  path: "/digital-marketing/ai-seo",
});

const faqs = [
  {
    question: "What is the difference between SEO, AEO and GEO?",
    answer:
      "SEO is ranking in the classic results. AEO (answer engine optimization) is being the source a direct answer quotes. GEO (generative engine optimization) is being cited and recommended when an AI model builds an answer from many sources. They overlap heavily, so we treat AI SEO as an extension of SEO, not a replacement.",
  },
  {
    question: "Which AI platforms do you track?",
    answer:
      "Six surfaces: Google AI Overviews, Google AI Mode, ChatGPT, Perplexity, Gemini and Claude. We run real buying questions from your category on each one every month and report who gets named and cited.",
  },
  {
    question: "Can you guarantee we will be cited in AI answers?",
    answer:
      "No. Nobody controls what an AI model cites, so guaranteed citation rates are not honest. We fix the stages you are failing at, from crawler access to evidence and third party presence, and measure share of model monthly.",
  },
  {
    question: "Do we need an llms.txt file?",
    answer:
      "It does no harm, but almost no major AI platform currently uses llms.txt for crawling or ranking decisions. Crawler access, server-rendered content, structured data and evidence-rich pages matter far more.",
  },
  {
    question: "How long does AI SEO take to show results?",
    answer:
      "Access fixes such as unblocking AI crawlers can show within weeks. Content, evidence and third party coverage usually take 3 to 6 months to compound, in line with ordinary SEO.",
  },
];

export default function AeoGeoPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "AI SEO (AEO and GEO)", description, path: "/digital-marketing/ai-seo" })} />
      <AeoGeoHero />
      <AeoGeoTerms />
      <AeoGeoProblems />
      <AeoGeoEvidence />
      <AeoGeoPipeline />
      <AeoGeoBand />
      <AeoGeoWorkstreams />
      <AeoGeoLlmsText />

      <FaqSection faqs={faqs} title="AI SEO questions, answered" />

      <CtaBanner
        title="Find out what AI says about you."
        description="Get a free AI visibility report: real buying questions from your category, run across six AI surfaces, with every competitor and source named."
        primary={{ label: "Get my visibility report", href: "#audit" }}
        secondary={{ label: "Talk to us", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="#audit" label="Get a free AI visibility report" />
    </div>
  );
}
