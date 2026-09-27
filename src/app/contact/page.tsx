"use client";

import { ContactHero, ContactMain, ContactSteps } from "@/components/ContactSections";
import { ContactTeam, ContactOffices, ContactDepartments, ContactFaq } from "@/components/ContactSections2";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white min-h-screen">
      <ContactHero />
      <ContactMain />
      <ContactSteps />
      <ContactTeam />
      <ContactOffices />
      <ContactDepartments />
      <ContactFaq />
    </div>
  );
}
