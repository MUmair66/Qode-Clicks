import type { ServicePageData } from "@/lib/service-page";

export const websiteRedesign: ServicePageData = {
  path: "/website-development/website-redesign",
  hub: { name: "Web Development", path: "/website-development" },
  name: "Website Redesign",
  meta: {
    title: "Website Redesign Services Without Losing SEO | Qode Clicks",
    description: "Website redesigns that keep your rankings: audit, UX research, content migration, 301 redirects and speed work. Refresh from $1,800. Get a free quote.",
  },

  hero: {
    eyebrow: "Website Redesign",
    title: "A new website that looks better,",
    accent: "without losing what already works.",
    intro: "We redesign existing websites on WordPress, Shopify and Next.js with a plan for every page, every ranking and every form. You get a faster, clearer site that turns more visitors into enquiries, and your search traffic comes along for the move.",
    primaryLabel: "Get a free redesign quote",
    stats: [
      { value: "4 to 10 wks", label: "Typical redesign timeline" },
      { value: "100%", label: "Old URLs mapped to a redirect" },
      { value: "WCAG 2.2", label: "Accessibility target (AA)" },
    ],
  },

  form: {
    title: "Free website redesign quote",
    description: "Share your current site and what is not working. We reply within one business day with an audit summary, scope and fixed price.",
    source: "Website redesign quote",
    fields: [
      { name: "current_url", label: "Current website", type: "text", required: true, placeholder: "yourcompany.com" },
      { name: "platform", label: "Current platform", type: "select", placeholder: "Choose a platform", options: ["WordPress", "Shopify", "Next.js or React", "Wix or Squarespace", "Custom or not sure"] },
      { name: "redesign_scope", label: "What do you need?", type: "select", required: true, placeholder: "Choose a scope", options: ["Visual refresh", "Full redesign", "Redesign and rebuild on a new platform", "Not sure yet"] },
      { name: "main_goal", label: "Main goal for the new site", type: "textarea", placeholder: "More leads, better mobile experience, easier editing..." },
    ],
    submitLabel: "Request my redesign quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why so many redesigns lose traffic and leads.",
    intro: "A redesign is a migration as much as a design project. Most of the damage happens in the details nobody planned for.",
    items: [
      { title: "Rankings drop after launch", desc: "URLs change, pages get merged or deleted and nobody sets up redirects, so years of search equity disappear overnight." },
      { title: "Design by opinion", desc: "The new layout is based on taste instead of how visitors actually use the site, so conversion rates go down, not up." },
      { title: "Content left behind", desc: "Blog posts, case studies and landing pages that brought in traffic are lost or copied over with broken formatting and missing metadata." },
      { title: "Slower than before", desc: "Heavy sliders, page builders and unoptimized images make the shiny new site slower on mobile than the old one." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Everything a safe, worthwhile redesign needs.",
    intro: "We handle research, design, build and migration as one plan, so nothing falls between the cracks.",
    items: [
      { title: "Site and SEO audit", desc: "Crawl of every URL, top landing pages, backlinks, Core Web Vitals and tracking, so we know what must be protected." },
      { title: "UX and conversion research", desc: "Analytics review, heatmaps, session recordings and form drop-off data to find what is stopping visitors from enquiring." },
      { title: "Design in Figma", desc: "Wireframes and full page designs for desktop and mobile, approved before development starts." },
      { title: "Content migration", desc: "Pages, posts, media and metadata moved and cleaned up, with titles, descriptions and headings kept or improved.", href: "/digital-marketing/content-writing" },
      { title: "301 redirect mapping", desc: "Every old URL mapped to its closest new page, tested before and after launch so rankings and backlinks carry over.", href: "/digital-marketing/seo" },
      { title: "Speed and Core Web Vitals", desc: "Lean themes, compressed images and trimmed scripts, with a Lighthouse performance target of 90+ on key templates." },
      { title: "Accessibility", desc: "Color contrast, keyboard navigation, alt text and form labels built to WCAG 2.2 AA." },
      { title: "Platform rebuilds", desc: "Moving to WordPress, Shopify or a Next.js front end when the current platform is holding you back.", href: "/website-development/wordpress" },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From audit to relaunch in four steps.",
    intro: "Fixed scope, a weekly update and a launch plan written before any page is moved.",
    steps: [
      { title: "Audit and research", time: "Weeks 1 to 2", desc: "We crawl the current site, review analytics and search data, and agree goals, sitemap and the pages that must keep their rankings." },
      { title: "Design", time: "Weeks 2 to 4", desc: "Wireframes, then full Figma designs for key templates on desktop and mobile, reviewed with you in two rounds." },
      { title: "Build and migrate", time: "Weeks 4 to 8", desc: "Development on a staging site, content migration, redirect map, tracking and accessibility checks." },
      { title: "Launch and monitor", time: "Weeks 8 to 10", desc: "Redirects go live, Search Console is watched daily, and we fix crawl errors and tweak pages for 30 days after launch." },
    ],
  },

  pricing: {
    title: "Three levels of redesign.",
    intro: "Fixed prices, agreed after a short audit. Hosting, premium themes and paid plugins are billed to you directly.",
    unit: "one-off",
    plans: [
      { name: "Refresh", target: "Sites with good structure and content that need a modern look and faster pages.", price: "From $1,800", features: ["Visual refresh of up to 10 templates", "Mobile layout fixes", "Image and speed optimization", "Basic accessibility fixes", "Launch checklist"] },
      { name: "Full redesign", target: "Businesses whose site no longer reflects them or no longer converts.", price: "From $4,500", popular: true, features: ["SEO and UX audit", "Custom Figma design", "Up to 40 pages migrated", "Full 301 redirect map", "GA4 and conversion tracking", "30 days of post-launch support"] },
      { name: "Redesign + rebuild", target: "Sites moving to a new platform such as WordPress, Shopify or Next.js.", price: "From $9,000", features: ["Everything in Full redesign", "Rebuild on a new platform", "Unlimited page and post migration", "CMS training for your team", "Integrations with CRM and forms", "Dedicated project lead"] },
    ],
  },

  tools: {
    title: "Platforms and tools we use",
    items: ["WordPress", "Shopify", "Next.js", "Figma", "Screaming Frog", "Google Search Console", "GA4", "Hotjar", "Microsoft Clarity", "PageSpeed Insights", "axe DevTools"],
  },

  related: {
    title: "Keep the new site working hard.",
    intro: "These are the services we most often pair with a redesign.",
    items: [
      { title: "SEO", desc: "Build on the relaunch with ongoing technical and content SEO.", href: "/digital-marketing/seo" },
      { title: "Website maintenance", desc: "Care plans that keep the new site updated, backed up and fast.", href: "/website-development/website-maintenance" },
      { title: "WordPress development", desc: "Custom WordPress themes your team can edit without a developer.", href: "/website-development/wordpress" },
      { title: "QA and testing", desc: "Cross-browser, device and accessibility testing before you go live.", href: "/website-development/qa-testing" },
    ],
  },

  faqs: [
    { question: "How long does a website redesign take?", answer: "A refresh usually takes 3 to 5 weeks. A full redesign takes 6 to 10 weeks, and a redesign with a platform rebuild 10 to 14 weeks depending on the amount of content." },
    { question: "Will I lose my Google rankings?", answer: "We plan to keep them. Every old URL is mapped to a 301 redirect, titles and content on ranking pages are kept or improved, and we monitor Search Console after launch. Small short-term movement is normal; lasting drops usually come from missing redirects, which we test for." },
    { question: "What is included in the price?", answer: "Audit, design, development, content migration, redirects, tracking setup and post-launch support as listed in each plan. Hosting, premium themes, plugins and stock images are billed to you directly." },
    { question: "Can you redesign without changing platforms?", answer: "Yes. Most redesigns stay on the current platform. We only recommend a rebuild when the platform itself is causing speed, security or editing problems." },
    { question: "Do you write new content as well?", answer: "We migrate and tidy existing content as standard. New copy for key pages can be added, and our content team can handle larger rewrites." },
  ],

  cta: {
    title: "Ready for a redesign that keeps your traffic?",
    description: "Send us your current site and goals. We will reply within one business day with an audit summary and a fixed price scope.",
  },
};
