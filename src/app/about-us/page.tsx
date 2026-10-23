import { AboutHero, AboutStats, AboutValues, AboutStory } from "@/components/AboutSections";
import { AboutLocations, AboutCareers } from "@/components/AboutSections2";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Qode Clicks | Web, SEO and Paid Media Team",
  description: "Meet Qode Clicks: a remote-first team of developers, SEO specialists and media buyers in Frisco and Lahore who build websites and campaigns for revenue.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutLocations />
      <AboutCareers />
      <FaqSection />
      <CtaBanner
        title="Ready to scale your business?"
        description="Whether you need a fast WordPress build, SEO that compounds or Google Ads that pay for themselves, tell us where you are and we will map the first step."
        primary={{ label: "Book a strategy call", href: "/contact#contact-form" }}
        secondary={{ label: "View our services", href: "/#services" }}
      />
    </div>
  );
}
