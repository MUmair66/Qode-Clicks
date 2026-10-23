import { GmbHero, GmbLogos, GmbProblems, GmbIncluded } from "@/components/GmbSections";
import { GmbBand, GmbGeoGrid, GmbGeoFencing } from "@/components/GmbSections2";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/SeoMobileCta";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Google Business Profile optimization measured with a 49 point geo-grid: categories, reviews, photos, citations and spam fighting. Get a free grid report.";

export const metadata = pageMetadata({
  title: "Google Business Profile Optimization Services | Qode Clicks",
  description,
  path: "/digital-marketing/google-business-profile",
});

const faqs = [
  {
    question: "What is a geo-grid report?",
    answer:
      "We search your main keyword from 49 points in a 7 by 7 grid across your service area and record where your profile ranks at each one. It shows where you hold the map pack, where you drop off, and which competitor wins each square.",
  },
  {
    question: "How long does Google Business Profile optimization take to work?",
    answer:
      "Fixes like the primary category, ownership and duplicate listings can move rankings within weeks. Wider gains from reviews, citations, photos and local pages usually build over 3 to 6 months.",
  },
  {
    question: "Can you remove fake competitor listings?",
    answer:
      "We report listings that break Google's guidelines, such as virtual offices and keyword stuffed names, through the official redressal process and track each report. Google makes the final decision, so we cannot promise removal.",
  },
  {
    question: "Do you write or buy reviews?",
    answer:
      "No. Fake or incentivized reviews break Google's policies and put the profile at risk. We build a request workflow so real customers leave reviews more often, and we answer every review on your behalf.",
  },
  {
    question: "Do you manage multi-location businesses?",
    answer:
      "Yes. Each location gets its own optimized profile, a matching location page on your site with LocalBusiness schema, and its own geo-grid tracking so you can compare locations month to month.",
  },
];

export default function GmbOptimizationPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd
        data={serviceJsonLd({
          name: "Google Business Profile Optimization",
          description,
          path: "/digital-marketing/google-business-profile",
        })}
      />
      <GmbHero />
      <GmbLogos />
      <GmbProblems />
      <GmbIncluded />
      <GmbBand />
      <GmbGeoGrid />
      <GmbGeoFencing />

      <FaqSection faqs={faqs} title="Google Business Profile questions" />

      <CtaBanner
        title="Find out where you really rank on the map."
        description="Get a free 49 point geo-grid report for your main keyword. Back within three working days, and yours to keep either way."
        primary={{ label: "Get my free grid report", href: "#audit" }}
        secondary={{ label: "Talk to us", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="#audit" label="Get a free grid report" />
    </div>
  );
}
