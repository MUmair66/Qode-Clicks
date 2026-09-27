import { GmbHero, GmbLogos, GmbProblems, GmbIncluded } from "@/components/GmbSections";
import { GmbBand, GmbGeoGrid, GmbGeoFencing } from "@/components/GmbSections2";

export default function GmbOptimizationPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <GmbHero />
      <GmbLogos />
      <GmbProblems />
      <GmbIncluded />
      <GmbBand />
      <GmbGeoGrid />
      <GmbGeoFencing />
    </div>
  );
}
