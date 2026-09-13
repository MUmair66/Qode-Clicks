"use client";

import { AboutHero, AboutStats, AboutValues, AboutStory, AboutCTA } from "@/components/AboutSections";
import { AboutTeam, AboutLocations, AboutAwards, AboutCareers } from "@/components/AboutSections2";
import { FaqSection } from "@/components/FaqSection";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutAwards />
      <AboutStory />
      <AboutTeam />
      <AboutValues />
      <AboutLocations />
      <AboutCareers />
      <FaqSection />
      <AboutCTA />
    </div>
  );
}
