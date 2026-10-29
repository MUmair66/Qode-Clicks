import { SeoHero, SeoReasons, SeoPillars, SeoDeliverables } from "@/components/SeoSections";
import { SeoTimeline, SeoPricing } from "@/components/SeoSections2";
import { SeoReporting, SeoNotSell, SeoTools, SeoWorksWellWith } from "@/components/SeoSections3";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/SeoMobileCta";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Revenue-focused SEO services: technical fixes, content and earned links, with developer hours included. Plans from $1,600/mo. Request a free SEO audit.";

export const metadata = pageMetadata({
  title: "SEO Services That Grow Revenue, Not Rankings | Qode Clicks",
  description,
  path: "/digital-marketing/seo",
});

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Technical fixes can show gains within about 30 days. Long tail terms often move in 8 to 12 weeks, and content and links typically take 3 to 6 months to compound. Competitive head terms can take 6 to 9 months.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "No. Nobody controls Google's algorithm, so any guarantee of a position is not honest. We commit to a written scope, agreed targets and transparent reporting on organic revenue and leads.",
  },
  {
    question: "What is included in the monthly SEO fee?",
    answer:
      "Every plan includes technical monitoring and fixes, keyword and intent research, content production, on page optimization, link acquisition, developer hours to implement changes, a live dashboard and a monthly review call. Plans start at $1,600 per month.",
  },
  {
    question: "Do you buy links or sell link packages?",
    answer:
      "No. We earn links through digital PR, data led outreach, unlinked mention reclamation and resource placements. Every link is reported with the domain and the method used.",
  },
  {
    question: "What does the free SEO audit include?",
    answer:
      "A specialist reviews your site and sends a written document within five working days covering what is broken, what it is costing you and what we would fix first. There is no obligation to sign up.",
  },
];

export default function SeoPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "SEO Services", description, path: "/digital-marketing/seo" })} />
      <SeoHero />
      <SeoReasons />
      <SeoPillars />
      <SeoDeliverables />
      <SeoTimeline />
      <SeoPricing />
      <SeoReporting />
      <SeoNotSell />
      <SeoTools />
      <SeoWorksWellWith />

      <FaqSection faqs={faqs} title="SEO questions, answered" />

      <CtaBanner
        title="Ready to grow organic revenue?"
        description="Request a free SEO audit. We will review your site, tell you what is broken, what it is costing you, and what we would fix first. No sales pressure."
        primary={{ label: "Get a free SEO audit", href: "#audit" }}
        secondary={{ label: "Book a call", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="#audit" label="Get a free SEO audit" />
    </div>
  );
}
