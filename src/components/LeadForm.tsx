"use client";

import type { FormEvent, ReactNode } from "react";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Wraps every lead form so FormSubmit gets a page-specific subject, a thank-you redirect
// and a honeypot, and GA4 records a generate_lead conversion on submit.
export function LeadForm({
  source,
  className,
  children,
  id,
}: {
  source: string;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // The honeypot is hidden from people; if it has a value a bot filled it in.
    const honey = e.currentTarget.elements.namedItem("_honey") as HTMLInputElement | null;
    if (honey?.value) return;
    window.gtag?.("event", "generate_lead", { form_source: source });
  }

  return (
    <form id={id} action={SITE.formAction} method="POST" className={className} onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={`[${source}] New lead from qodeclicks.com`} />
      <input type="hidden" name="_next" value={`${SITE.url}/thank-you`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="form_source" value={source} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      {children}
    </form>
  );
}
