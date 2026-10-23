import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { WebDevHubContent } from "@/components/WebDevHubContent";
import { pageMetadata } from "@/lib/seo";
import { PRICING } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Development: WordPress and Custom Apps | Qode Clicks",
  description:
    "Website development by Qode Clicks: WordPress sites from $780 and custom web apps from $3,500, built to pass Core Web Vitals and easy for teams to edit.",
  path: "/website-development",
});

const faqs = [
  {
    question: "How long does a new website take?",
    answer:
      "A WordPress template kit build takes 1 to 2 weeks, a premium theme 2 to 4 weeks, a fully custom theme 6 to 10 weeks and headless WordPress 10 to 16 weeks. Custom web apps are scoped individually; most launch a first version in 8 to 16 weeks.",
  },
  {
    question: "Will my team be able to edit the site without a developer?",
    answer:
      "Yes. WordPress sites use a block library built with Advanced Custom Fields, so your team can create and edit pages without touching code. Custom web apps include an admin area for the content and settings you need to manage, and every project ends with recorded training.",
  },
  {
    question: "Do you offer hosting and ongoing support?",
    answer: `Yes. Care plans start from ${PRICING.carePlanMonthly} and cover managed hosting, updates tested on staging, daily backups and monthly development hours. Plans are rolling and can be canceled anytime.`,
  },
  {
    question: "Who owns the code and the website?",
    answer:
      "You do. The domain, hosting account, code repository and analytics are all in your name from day one, so you are free to move to another team at any time.",
  },
  {
    question: "Can you move my existing site without losing search rankings?",
    answer:
      "Yes. Migrations from Wix, Squarespace, Shopify or another host include full URL mapping, 301 redirects, a staging review and daily Search Console monitoring for 14 days after launch.",
  },
];

export default function WebsiteDevelopmentParentPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <WebDevHubContent />
      <FaqSection faqs={faqs} title="Website development questions." />
      <CtaBanner
        title="Ready to plan your new website or web app?"
        description="Tell us what you need to build. We will recommend the right approach and send a fixed-price proposal within 48 hours of our call."
        primary={{ label: "Get a Technical Estimate", href: "/contact#contact-form" }}
        secondary={{ label: "Compare WordPress Options", href: "/website-development/wordpress" }}
      />
    </div>
  );
}
