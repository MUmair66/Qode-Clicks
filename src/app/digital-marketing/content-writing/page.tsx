import { ContentHero, ContentProblems, ContentCategories, ContentAIPolicy } from "@/components/ContentWritingSections";
import { ContentProcess, ContentRefreshing, ContentPricing, ContentResult } from "@/components/ContentWritingSections2";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/SeoMobileCta";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Content writing that ranks and converts: SEO articles, service and location pages, landing page, email and ad copy. Plans from $520/mo. Free content audit.";

export const metadata = pageMetadata({
  title: "Content Writing Services That Rank and Convert | Qode Clicks",
  description,
  path: "/digital-marketing/content-writing",
});

const faqs = [
  {
    question: "How much do your content writing services cost?",
    answer:
      "Monthly plans start at $520 for four pieces, with Growth at $1,150 and Authority at $2,400. Every price includes research, a brief you approve, a separate editor, fact checking, meta and schema, and one revision round.",
  },
  {
    question: "Do you use AI to write the content?",
    answer:
      "We use AI for research support such as clustering keywords and summarizing what ranks. The words you publish are written by a person and edited by a second person, and we never charge writer rates for AI output.",
  },
  {
    question: "How long does a piece take to turn around?",
    answer:
      "A standard piece usually takes 3 to 6 working days from approved brief to final draft, including editing and fact checking.",
  },
  {
    question: "Will new content rank straight away?",
    answer:
      "Usually not. New content typically takes 3 to 6 months to compound in search. Refreshing pages that already have history and links is often faster, which is why refreshes are part of every plan above Starter.",
  },
  {
    question: "Can you publish directly to our website?",
    answer:
      "Yes. We can publish to WordPress and most common CMS platforms with meta, schema and internal links in place, or hand over the files for your team to publish.",
  },
];

export default function ContentWritingPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd
        data={serviceJsonLd({ name: "Content Writing Services", description, path: "/digital-marketing/content-writing" })}
      />
      <ContentHero />
      <ContentProblems />
      <ContentCategories />
      <ContentAIPolicy />
      <ContentProcess />
      <ContentRefreshing />
      <ContentPricing />
      <ContentResult />

      <FaqSection faqs={faqs} title="Content writing questions" />

      <CtaBanner
        title="Find out which content is worth fixing first."
        description="Get a free content audit: which pages to rewrite, merge or delete, and what is actually worth commissioning new."
        primary={{ label: "Get a free content audit", href: "#audit" }}
        secondary={{ label: "Talk to us", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="#audit" label="Get a free content audit" />
    </div>
  );
}
