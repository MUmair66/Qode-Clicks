import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Qode Clicks",
  description: "How Qode Clicks collects, uses and protects the personal information you share through our website forms, analytics and email.",
  path: "/privacy-policy",
});

// Template text: the client should have this reviewed before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="October 29, 2026">
      <p>This policy explains what personal information {SITE.name} (&quot;we&quot;, &quot;us&quot;) collects when you use qodeclicks.com, how we use it and the choices you have.</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> your name, email address, company, website, phone number and any details you include when you submit a form or email us.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and prepare audits, proposals and quotes.</li>
        <li>To deliver services you have hired us for and send related service messages.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Service providers</h2>
      <p>Form submissions are delivered to our inbox by FormSubmit (formsubmit.co). It processes this data on our behalf under its own privacy terms.</p>

      <h2>How long we keep it</h2>
      <p>We keep inquiry data for up to 24 months after our last contact, and client records for as long as needed to meet contractual, tax and legal obligations.</p>

      <h2>Your rights</h2>
      <p>You can ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Depending on where you live (for example under GDPR or the CCPA), you may have additional rights, including the right to complain to a data protection authority.</p>

      <h2>Cookies</h2>
      <p>We do not use analytics or advertising cookies on this website.</p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>

      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
