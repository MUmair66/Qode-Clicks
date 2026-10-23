import type { ServicePageData } from "@/lib/service-page";

export const ecommerceWebsite: ServicePageData = {
  path: "/website-development/ecommerce-website",
  hub: { name: "Web Development", path: "/website-development" },
  name: "E-commerce Website Development",
  meta: {
    title: "E-commerce Website Development Services | Qode Clicks",
    description: "Online stores on Shopify, WooCommerce or headless, with payments, shipping, tax and tracking set up right. Stores from $2,400. Get a free store quote.",
  },

  hero: {
    eyebrow: "E-commerce Website Development",
    title: "Online stores built on the right platform,",
    accent: "for how you actually sell.",
    intro: "We build e-commerce websites on Shopify, WooCommerce and headless setups, and help you choose between them before anything is built. Catalog, payments, shipping, tax, subscriptions and tracking are set up properly, so the store is ready to take orders on day one.",
    primaryLabel: "Get a free store quote",
    stats: [
      { value: "4 to 12 wks", label: "Typical store build timeline" },
      { value: "90+", label: "Lighthouse performance target" },
      { value: "100%", label: "Store, data and code you own" },
    ],
  },

  form: {
    title: "Free e-commerce store quote",
    description: "Tell us what you sell and how. We reply within one business day with a platform recommendation, scope and fixed price.",
    source: "E-commerce quote",
    fields: [
      { name: "current_site", label: "Current store or website", type: "text", placeholder: "yourstore.com" },
      { name: "preferred_platform", label: "Preferred platform", type: "select", required: true, placeholder: "Choose a platform", options: ["Shopify", "WooCommerce", "Headless or custom", "Not sure, help me choose"] },
      { name: "sales_model", label: "How do you sell?", type: "select", placeholder: "Choose one", options: ["Direct to consumer", "B2B or wholesale", "Subscriptions", "Mix of these"] },
      { name: "product_count", label: "Number of products", type: "select", placeholder: "Choose a range", options: ["Under 50", "50 to 500", "500 to 5,000", "5,000+"] },
    ],
    submitLabel: "Request my store quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why online stores struggle after launch.",
    intro: "Most store problems start with a decision made too early or a setting nobody checked.",
    items: [
      { title: "The wrong platform", desc: "A platform picked because a friend used it, then outgrown within a year when B2B pricing, subscriptions or multiple markets arrive." },
      { title: "Shipping and tax surprises", desc: "Rates that do not match real costs and tax rules set up by guesswork, which eat margin or scare shoppers away at checkout." },
      { title: "A catalog that is hard to manage", desc: "Variants, bundles and product data in a mess, so every update takes hours and marketplace feeds keep getting rejected." },
      { title: "Sales nobody can measure", desc: "Analytics, ad platforms and the store report different revenue, so nobody knows which channel is really working." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Every part of an online store, set up properly.",
    intro: "Start with a platform recommendation or hand us the full build.",
    items: [
      { title: "Platform selection", desc: "An honest comparison of Shopify, WooCommerce and headless for your catalog, budget, team and growth plans." },
      { title: "Shopify stores", desc: "Theme setup, custom themes and Shopify Plus builds for brands that want a hosted, low-maintenance platform.", href: "/website-development/shopify" },
      { title: "WooCommerce stores", desc: "Flexible WordPress stores with full content control, from $3,900 for a custom build.", href: "/website-development/wordpress" },
      { title: "Headless commerce", desc: "Next.js storefronts on top of Shopify or another commerce backend, for speed and complete design freedom.", href: "/website-development/custom-web-apps" },
      { title: "Catalog, payments and checkout", desc: "Products, variants, collections, Stripe, PayPal, Apple Pay and Shop Pay configured and tested end to end." },
      { title: "Shipping, tax and subscriptions", desc: "Carrier rates, zones, local pickup, sales tax or VAT rules, and subscription billing with tools like Recharge." },
      { title: "B2B and marketplace feeds", desc: "Wholesale pricing and accounts, plus product feeds for Google Merchant Center, Amazon and Meta catalogs." },
      { title: "Tracking that matches", desc: "GA4 ecommerce events, Meta Conversions API and Google Ads conversions set up and reconciled with store orders.", href: "/ppc/google-ads" },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From platform choice to first order in four steps.",
    intro: "Fixed scope, weekly updates and a private preview store you can click through as it comes together.",
    steps: [
      { title: "Discovery and platform choice", time: "Weeks 1 to 2", desc: "We map your catalog, sales channels, shipping and integrations, then recommend a platform and agree scope." },
      { title: "Design", time: "Weeks 2 to 4", desc: "Home, collection, product, cart and account pages designed in Figma for desktop and mobile." },
      { title: "Build and integrate", time: "Weeks 3 to 9", desc: "Store development, product import, payments, shipping, tax, apps, feeds and tracking on a staging store." },
      { title: "Launch and tune", time: "Weeks 9 to 12", desc: "Test orders, device QA, redirects and go live, then 30 days of fixes and conversion tweaks." },
    ],
  },

  pricing: {
    title: "Three ways to launch an online store.",
    intro: "Fixed prices, agreed before we start. Platform subscriptions, payment fees and paid apps or plugins are billed to you directly. WooCommerce builds start from $3,900.",
    unit: "one-off",
    plans: [
      { name: "Starter store", target: "New brands that need a credible store quickly on a proven theme.", price: "From $2,400", features: ["Premium Shopify or WooCommerce theme", "Up to 50 products imported", "Payments, shipping and taxes", "GA4 and Meta pixel", "Launch checklist and training"] },
      { name: "Growth store", target: "Growing brands that want a custom design and stronger integrations.", price: "From $6,500", popular: true, features: ["Custom Figma design", "Custom theme build", "Up to 500 products migrated", "Subscriptions, reviews and email apps", "Google Merchant Center feed", "30 days of post-launch support"] },
      { name: "Custom or headless", target: "High volume, B2B or multi-market brands with complex requirements.", price: "From $12,000", features: ["Everything in Growth store", "Headless Next.js storefront option", "B2B and wholesale pricing", "Multi-currency and markets", "ERP or inventory integration", "Dedicated project lead"] },
    ],
  },

  tools: {
    title: "Platforms and tools we work with",
    items: ["Shopify", "Shopify Plus", "WooCommerce", "Next.js", "Hydrogen", "Stripe", "PayPal", "Recharge", "ShipStation", "Avalara", "Klaviyo", "Google Merchant Center"],
  },

  related: {
    title: "Get the store in front of buyers.",
    intro: "These are the services we most often run alongside an e-commerce build.",
    items: [
      { title: "Shopify development", desc: "Settled on Shopify? See our dedicated Shopify services.", href: "/website-development/shopify" },
      { title: "WordPress and WooCommerce", desc: "WooCommerce stores and WordPress sites built to be edited easily.", href: "/website-development/wordpress" },
      { title: "Google Ads", desc: "Shopping and Performance Max campaigns fed by a clean product feed.", href: "/ppc/google-ads" },
      { title: "Social media ads", desc: "Meta and TikTok campaigns that bring buyers to product launches.", href: "/ppc/social-media-ads" },
    ],
  },

  faqs: [
    { question: "Should I use Shopify, WooCommerce or headless?", answer: "Shopify suits most brands that want a hosted, low-maintenance store. WooCommerce suits businesses that need content flexibility or already run WordPress. Headless suits larger brands that need top speed and full design control. We recommend one based on your catalog, team and budget." },
    { question: "How long does an e-commerce website take?", answer: "A starter store usually takes 4 to 5 weeks, a growth store 8 to 10 weeks, and custom or headless builds 10 to 16 weeks depending on integrations and product data." },
    { question: "What is included in the price?", answer: "Design, development, product import, payments, shipping, tax setup, tracking and post-launch support as listed in each plan. Platform subscriptions, payment fees, paid apps and plugins are billed to you directly." },
    { question: "Can you migrate my existing store?", answer: "Yes. We move products, customers, order history and content between platforms, and map every old URL to a 301 redirect so you keep your search rankings." },
    { question: "Who owns the store and its data?", answer: "You do. The store accounts are set up in your name, and the design files, theme and any custom code are yours once the project is paid." },
  ],

  cta: {
    title: "Ready to build a store that sells?",
    description: "Tell us what you sell and how. We will send a platform recommendation and fixed price scope within one business day.",
  },
};
