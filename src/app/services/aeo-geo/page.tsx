import { AeoGeoHero, AeoGeoTerms, AeoGeoProblems, AeoGeoEvidence } from "@/components/AeoGeoSections";
import { AeoGeoPipeline, AeoGeoBand, AeoGeoWorkstreams, AeoGeoLlmsText } from "@/components/AeoGeoSections2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEO and GEO Services | Get Cited in AI Search | QodeClicks",
  description: "Answer Engine and Generative Engine Optimization built on the published evidence rather than the hype. Get cited in AI Overviews, ChatGPT, Perplexity and Gemini.",
};

export default function AeoGeoPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <AeoGeoHero />
      <AeoGeoTerms />
      <AeoGeoProblems />
      <AeoGeoEvidence />
      <AeoGeoPipeline />
      <AeoGeoBand />
      <AeoGeoWorkstreams />
      <AeoGeoLlmsText />
    </div>
  );
}
