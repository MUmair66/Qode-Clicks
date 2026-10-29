"use client";

import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

// Wraps every lead form so FormSubmit gets a page-specific subject, a thank-you redirect
// and a honeypot field that catches spam bots.
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
  return (
    <form id={id} action={SITE.formAction} method="POST" className={className}>
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
