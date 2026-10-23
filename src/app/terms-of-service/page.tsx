import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service | Qode Clicks",
  description: "The terms that apply when you use the Qode Clicks website. Project work is covered by a separate signed proposal or agreement.",
  path: "/terms-of-service",
});

// Template text: the client should have this reviewed before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms-of-service" updated="October 20, 2026">
      <p>These terms apply to your use of qodeclicks.com, operated by {SITE.name}. By using the site you agree to them.</p>

      <h2>Website content</h2>
      <p>Content on this site is for general information. Prices shown are starting points; final scope and pricing are confirmed in a written proposal.</p>

      <h2>Services</h2>
      <p>Any website, SEO, advertising or other service we provide is governed by a separate proposal or agreement signed by both parties. If that agreement conflicts with these terms, the agreement applies.</p>

      <h2>No guarantees</h2>
      <p>Search rankings, ad performance and platform policies are controlled by third parties such as Google and Meta. We do not guarantee specific rankings, traffic or revenue.</p>

      <h2>Intellectual property</h2>
      <p>The text, design and code of this website belong to {SITE.name} unless stated otherwise. You may not copy or reuse them without permission.</p>

      <h2>Acceptable use</h2>
      <p>Do not use the site or its forms to send spam, malicious code or unlawful content.</p>

      <h2>Limitation of liability</h2>
      <p>To the extent allowed by law, {SITE.name} is not liable for indirect or consequential losses arising from use of this website.</p>

      <h2>Privacy</h2>
      <p>How we handle personal information is explained in our <Link href="/privacy-policy">Privacy Policy</Link>.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
