import type { ServicePageData } from "@/lib/service-page";

export const shopify: ServicePageData = {
  path: "/website-development/shopify",
  hub: { name: "Web Development", path: "/website-development" },
  name: "Shopify Development",
  meta: {
    title: "Shopify Development Agency: Stores That Sell | Qode Clicks",
    description: "Shopify store setup, custom themes, app integrations and migrations, built for speed and conversion. Theme builds from $2,400. Get a free store quote.",
  },

  hero: {
    eyebrow: "Shopify Development",
    title: "Shopify stores built to sell,",
    accent: "not just to launch.",
    intro: "We set up, design and develop Shopify stores that load fast, are easy for your team to run and make checkout feel effortless. From a first store to a Shopify Plus migration, the work is measured in orders, not page views.",
    primaryLabel: "Get a free store quote",
    stats: [
      { value: "3 to 8 wks", label: "Typical theme build timeline" },
      { value: "90+", label: "Lighthouse performance target" },
      { value: "100%", label: "Code and theme files you own" },
    ],
  },

  form: {
    title: "Free Shopify store quote",
    description: "Tell us what you sell and where your store is today. We reply within one business day with a scope, timeline and fixed price.",
    source: "Shopify quote",
    fields: [
      { name: "store_url", label: "Current store or website", type: "text", placeholder: "yourstore.com" },
      { name: "project_type", label: "What do you need?", type: "select", required: true, placeholder: "Choose a project type", options: ["New Shopify store", "Custom theme or redesign", "Migration to Shopify", "Apps and integrations", "Ongoing Shopify support"] },
      { name: "product_count", label: "Number of products", type: "select", placeholder: "Choose a range", options: ["Under 50", "50 to 500", "500 to 5,000", "5,000+"] },
    ],
    submitLabel: "Request my store quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most Shopify stores leave money on the table.",
    intro: "Shopify makes it easy to open a store. Making it convert is a different job.",
    items: [
      { title: "Too many apps", desc: "Every app adds scripts. Twenty apps later the store takes five seconds to load and nobody knows which ones are still needed." },
      { title: "A theme that fights you", desc: "A bought theme was bent into shape with custom code, and now every small change needs a developer." },
      { title: "Checkout drop-off", desc: "Shipping surprises, slow product pages and no trust signals send shoppers away at the last step." },
      { title: "Data that does not add up", desc: "GA4, Meta and Shopify all report different sales numbers, so nobody trusts the marketing reports." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Everything a Shopify store needs, under one roof.",
    intro: "Pick one piece or hand us the whole store.",
    items: [
      { title: "Store setup and configuration", desc: "Products, collections, payments, shipping zones, taxes and policies set up correctly from day one." },
      { title: "Custom theme development", desc: "Online Store 2.0 themes with sections your team can rearrange without touching code." },
      { title: "Theme customization", desc: "We extend a premium theme properly, keeping it updatable instead of hard-coding changes." },
      { title: "Migration to Shopify", desc: "Products, customers, orders and URLs moved from WooCommerce, Magento, Wix or Squarespace, with 301 redirects so SEO is kept." },
      { title: "Apps and integrations", desc: "ERP, inventory, reviews, subscriptions and email tools connected, plus custom apps when nothing off the shelf fits." },
      { title: "Speed and conversion tuning", desc: "App audit, image and script cleanup, and product page testing to lift conversion rate." },
      { title: "Tracking that matches", desc: "GA4 ecommerce events, Meta pixel and Conversions API, and Google Ads conversions set up and reconciled." },
      { title: "Shopify Plus", desc: "Checkout extensibility, B2B, multi-store and international setups for larger brands." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From brief to first order in four steps.",
    intro: "Every project has a fixed scope and a weekly update, so you always know where things stand.",
    steps: [
      { title: "Discovery", time: "Week 1", desc: "We review your products, competitors and current store, then agree scope, design direction and success measures." },
      { title: "Design", time: "Weeks 1 to 3", desc: "Homepage, collection, product and cart designs approved in Figma before any code is written." },
      { title: "Build", time: "Weeks 2 to 6", desc: "Theme development, product import, apps, tracking and content entry on a private preview store." },
      { title: "Launch and tune", time: "Weeks 6 to 8", desc: "QA on real devices, go live, redirects checked, then two weeks of fixes and conversion tweaks." },
    ],
  },

  pricing: {
    title: "Three ways to build on Shopify.",
    intro: "Fixed prices, agreed before we start. Shopify subscription and paid apps are billed to you directly.",
    unit: "one-off",
    plans: [
      { name: "Theme setup", target: "New brands that need a credible store quickly on a premium theme.", price: "From $2,400", features: ["Premium theme set up and branded", "Up to 50 products imported", "Payments, shipping and taxes", "GA4 and Meta pixel", "Launch checklist and training"] },
      { name: "Custom theme", target: "Growing brands that want a store designed around their products.", price: "From $6,500", popular: true, features: ["Custom Figma design", "Online Store 2.0 theme built from scratch", "Up to 500 products migrated", "Reviews, email and subscription apps", "Speed target of 90+ Lighthouse", "30 days of post-launch support"] },
      { name: "Shopify Plus", target: "High volume, B2B or multi-market stores with complex requirements.", price: "From $12,000", features: ["Everything in Custom theme", "Checkout extensibility", "B2B and wholesale pricing", "Multi-currency and markets", "ERP or inventory integration", "Dedicated project lead"] },
    ],
  },

  tools: {
    title: "Platforms and apps we work with",
    items: ["Shopify", "Shopify Plus", "Liquid", "Hydrogen", "Klaviyo", "Recharge", "Judge.me", "Yotpo", "ShipStation", "GA4", "Meta Conversions API", "Google Merchant Center"],
  },

  related: {
    title: "A store is only half the job.",
    intro: "These are the services we most often run alongside a Shopify build.",
    items: [
      { title: "E-commerce websites", desc: "Comparing Shopify with WooCommerce or a custom build? Start here.", href: "/website-development/ecommerce-website" },
      { title: "Social media ads", desc: "Meta and TikTok campaigns that bring buyers to new product launches.", href: "/ppc/social-media-ads" },
      { title: "Google Ads", desc: "Shopping and Performance Max campaigns fed by a clean product feed.", href: "/ppc/google-ads" },
      { title: "SEO", desc: "Collection and product page SEO so you are not paying for every visit.", href: "/digital-marketing/seo" },
    ],
  },

  faqs: [
    { question: "How long does a Shopify store take to build?", answer: "A premium theme setup usually takes 3 to 4 weeks. A custom theme takes 6 to 8 weeks, and Shopify Plus projects 8 to 12 weeks depending on integrations." },
    { question: "Can you move my store from WooCommerce or another platform?", answer: "Yes. We migrate products, customers, order history and blog content, and map every old URL to a 301 redirect so you keep your search rankings." },
    { question: "Will I be able to edit the store myself?", answer: "Yes. We build with Online Store 2.0 sections, so your team can edit pages, banners and collections in the Shopify editor without code. Training is included." },
    { question: "Do you offer ongoing Shopify support?", answer: "Yes. Our care plans start at $180/mo and cover app updates, theme fixes, small changes and monthly speed checks." },
    { question: "Who owns the theme and code?", answer: "You do. The theme, design files and any custom app code are yours once the project is paid." },
  ],

  cta: {
    title: "Ready for a Shopify store that sells?",
    description: "Tell us about your products and goals. We will send a fixed price scope within one business day.",
  },
};
