import { ContentHero, ContentProblems, ContentCategories, ContentAIPolicy } from "@/components/ContentWritingSections";
import { ContentProcess, ContentRefreshing, ContentPricing, ContentResult } from "@/components/ContentWritingSections2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | SEO, Creative and Conversion Copy | QodeClicks",
  description: "Content writing that ranks and converts. SEO articles, service and location pages, landing page copy, ad and email copy, brand messaging, case studies and whitepapers.",
};

export default function ContentWritingPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <ContentHero />
      <ContentProblems />
      <ContentCategories />
      <ContentAIPolicy />
      <ContentProcess />
      <ContentRefreshing />
      <ContentPricing />
      <ContentResult />
    </div>
  );
}
