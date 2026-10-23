import { ContactHero, ContactMain, ContactSteps } from "@/components/ContactSections";
import { ContactOffices, ContactDepartments, ContactFaq } from "@/components/ContactSections2";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us: Free Marketing Audit and Quote | Qode Clicks",
  description:
    "Contact Qode Clicks for SEO, Google Ads and web development. Teams in Frisco, Texas and Lahore, Pakistan. A specialist replies within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      <ContactHero />
      <ContactMain />
      <ContactSteps />
      <ContactOffices />
      <ContactDepartments />
      <ContactFaq />
    </div>
  );
}
