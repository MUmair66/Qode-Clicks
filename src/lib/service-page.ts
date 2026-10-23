// Content model for service pages rendered by <ServicePage />.
// Each new service page is a plain data object, so the design stays identical across pages
// while the copy is written for that specific service.

export type FormField = {
  name: string; // unique snake_case field name sent to FormSubmit
  label: string;
  type: "text" | "email" | "url" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[]; // for selects
};

export type ServicePageData = {
  path: string; // e.g. "/website-development/shopify"
  hub: { name: string; path: string }; // breadcrumb parent
  name: string; // breadcrumb + schema name, e.g. "Shopify Development"
  meta: { title: string; description: string }; // title 50 to 60 chars, description 140 to 155 chars

  hero: {
    eyebrow: string;
    title: string;
    accent: string; // second line, shown in the cyan serif italic accent
    intro: string;
    primaryLabel: string; // button that jumps to the form
    stats: { value: string; label: string }[]; // exactly 3
  };

  form: {
    title: string;
    description: string;
    source: string; // FormSubmit subject prefix, e.g. "Shopify quote"
    fields: FormField[]; // extra fields; name + email are always added first
    submitLabel: string;
    note: string;
  };

  problems: { eyebrow: string; title: string; intro: string; items: { title: string; desc: string }[] };
  offerings: { eyebrow: string; title: string; intro: string; items: { title: string; desc: string; href?: string }[] };
  process: { eyebrow: string; title: string; intro: string; steps: { title: string; time: string; desc: string }[] };
  pricing: {
    title: string;
    intro: string;
    unit: string; // e.g. "per month", "one-off", "per video"
    plans: { name: string; target: string; price: string; features: string[]; popular?: boolean }[];
  };
  tools?: { title: string; items: string[] };
  related: { title: string; intro: string; items: { title: string; desc: string; href: string }[] };
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string };
};
