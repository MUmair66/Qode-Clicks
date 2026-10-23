import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { CustomAppsHero, CustomAppsSections, MobileStickyCta } from "@/components/CustomAppsContent";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PRICING } from "@/lib/site";

const title = "Custom Web App Development: Portals and SaaS | Qode Clicks";
const description =
  "Custom web apps built on React and Next.js: dashboards, client portals, internal tools and SaaS products, with code you own. Projects start from $3,500.";

export const metadata = pageMetadata({ title, description, path: "/website-development/custom-web-apps" });

const faqs = [
  {
    question: "How much does a custom web app cost?",
    answer: `Projects start from ${PRICING.customWebApp} for a marketing web platform, $8,500 for a custom web app or client portal, and $12,000+ for SaaS and multi-tenant platforms. You get a fixed quote after a scoping call, not an open-ended hourly estimate.`,
  },
  {
    question: "How long does it take to build a custom web app?",
    answer:
      "A marketing web platform usually takes 4 to 8 weeks. Most custom web apps and portals launch a first version in 8 to 16 weeks, and we can phase larger SaaS builds so you start getting value sooner.",
  },
  {
    question: "Who owns the code once the app is built?",
    answer:
      "You do. The code repository, database, hosting account and domain are in your name. You can bring the project in-house or hand it to another team at any time.",
  },
  {
    question: "Can the app connect to the tools we already use?",
    answer:
      "Yes. We integrate with payment providers, CRMs, accounting software, email and SMS platforms and most other tools that offer an API, such as Stripe, HubSpot, QuickBooks and Twilio. We can also migrate data from spreadsheets or a system you are replacing.",
  },
  {
    question: "Do you host and support the app after launch?",
    answer: `Every build includes 30 days of post-launch support. After that, care plans start from ${PRICING.carePlanMonthly} and cover hosting, monitoring, security updates and monthly development hours for improvements.`,
  },
];

export default function CustomDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: "Custom Web App Development", description, path: "/website-development/custom-web-apps" })} />
      <CustomAppsHero />
      <CustomAppsSections />
      <FaqSection faqs={faqs} title="Custom web app questions." />
      <CtaBanner
        title="Ready to scope your web app?"
        description="Book a call with our technical lead to talk through your requirements. We will map out the approach and send a detailed proposal within 48 hours."
        primary={{ label: "Get a Technical Estimate", href: "#estimate" }}
        secondary={{ label: "Contact Us", href: "/contact#contact-form" }}
      />
      <MobileStickyCta href="#estimate" label="Get an Estimate" />
    </div>
  );
}
