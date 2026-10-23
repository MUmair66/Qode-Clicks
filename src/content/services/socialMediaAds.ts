import type { ServicePageData } from "@/lib/service-page";

export const socialMediaAds: ServicePageData = {
  path: "/ppc/social-media-ads",
  hub: { name: "Paid Advertising", path: "/ppc" },
  name: "Social Media Ads Management",
  meta: {
    title: "Social Media Ads Management: Meta, TikTok | Qode Clicks",
    description: "Meta, TikTok and LinkedIn ads managed for leads and sales: audiences, creative testing, retargeting and Conversions API. From $750/mo. Free ad audit.",
  },

  hero: {
    eyebrow: "Social Media Ads",
    title: "Paid social that pays its way,",
    accent: "measured in cost per result.",
    intro: "We plan, launch and manage ads on Facebook, Instagram, TikTok, LinkedIn and more, with tracking you can trust and a steady stream of new creative to test. Every decision is tied to cost per lead, cost per purchase and return on ad spend.",
    primaryLabel: "Get a free ad audit",
    stats: [
      { value: "2 to 4 wks", label: "Typical time to first results" },
      { value: "Weekly", label: "Creative tests and budget checks" },
      { value: "100%", label: "Ad accounts and data you own" },
    ],
  },

  form: {
    title: "Free social ads audit",
    description: "Tell us where you advertise today and what a good result looks like. We reply within one business day with findings, a plan and a monthly fee.",
    source: "Social media ads quote",
    fields: [
      { name: "website_url", label: "Website", type: "text", placeholder: "yourcompany.com" },
      { name: "ad_platform", label: "Which platform do you want to run?", type: "select", required: true, placeholder: "Choose a platform", options: ["Meta (Facebook and Instagram)", "TikTok", "LinkedIn", "Pinterest", "Snapchat", "Not sure yet"] },
      { name: "monthly_ad_spend", label: "Monthly ad spend", type: "select", placeholder: "Choose a range", options: ["Under $2,000", "$2,000 to $5,000", "$5,000 to $20,000", "$20,000+"] },
      { name: "campaign_goal", label: "Main goal", type: "select", placeholder: "Choose a goal", options: ["Leads", "Online sales", "App installs", "Brand awareness"] },
    ],
    submitLabel: "Request my ad audit",
    note: "No long-term contracts. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most social ad budgets leak.",
    intro: "Boosting a post is easy. Running paid social that scales without the cost per result climbing is a different job.",
    items: [
      { title: "Tracking that misses sales", desc: "The pixel fires on half the conversions, so the algorithm optimizes on bad data and reports look wrong." },
      { title: "Creative fatigue", desc: "The same three ads run for months. Frequency climbs, costs rise and nobody has new creative ready." },
      { title: "Audiences too broad or too narrow", desc: "Budget goes to people who will never buy, or is squeezed into audiences so small that delivery stalls." },
      { title: "No retargeting plan", desc: "Site visitors and engaged followers never see a follow-up, so warm prospects slip away." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Full paid social management, from pixel to report.",
    intro: "One platform or several, managed by the same team with one set of numbers.",
    items: [
      { title: "Meta Ads (Facebook and Instagram)", desc: "Campaign structure, Advantage+ audiences and placements, built around leads or purchases rather than likes." },
      { title: "TikTok Ads", desc: "Spark Ads, in-feed campaigns and creator-style creative made for the For You feed." },
      { title: "LinkedIn Ads", desc: "B2B targeting by job title, company and industry, with Lead Gen Forms and document ads." },
      { title: "Audience strategy and retargeting", desc: "Prospecting, lookalike and retargeting audiences from site visitors, video viewers and customer lists." },
      { title: "Creative testing", desc: "A steady testing plan for hooks, formats and offers, with new ad variations every month.", href: "/video-production/ai-video" },
      { title: "Lead forms and landing pages", desc: "Instant forms with qualifying questions, or landing pages built to convert paid social traffic." },
      { title: "Catalog and Advantage+ shopping", desc: "Product catalogs, dynamic product ads and Advantage+ shopping campaigns for ecommerce stores." },
      { title: "Tracking and reporting", desc: "Meta Pixel with Conversions API, TikTok Events API and GA4, reported on CPA and ROAS each month." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From audit to stable results in four steps.",
    intro: "Clear targets up front, weekly optimization and a monthly report you can read in five minutes.",
    steps: [
      { title: "Audit and tracking", time: "Week 1", desc: "We review your accounts and past results, fix the pixel, Conversions API and events, and agree CPA or ROAS targets." },
      { title: "Strategy and creative", time: "Weeks 1 to 2", desc: "Audiences, campaign structure, offers and the first round of ad creative and copy planned and approved." },
      { title: "Launch and test", time: "Weeks 2 to 4", desc: "Campaigns go live and creative tests run. First results usually show within 2 to 4 weeks." },
      { title: "Optimize and scale", time: "Week 4 onward", desc: "Cost per result typically settles around weeks 4 to 6, then we shift budget to winners and refresh creative." },
    ],
  },

  pricing: {
    title: "Three levels of paid social management.",
    intro: "Monthly management fees, no long-term contract. Ad spend is paid to the platforms directly and is not included.",
    unit: "per month",
    plans: [
      { name: "Starter", target: "Businesses testing paid social on one platform with a modest budget.", price: "$750", features: ["1 platform", "Ad spend up to $5,000/mo", "Pixel and Conversions API setup", "Prospecting and retargeting campaigns", "Monthly creative refresh", "Monthly report"] },
      { name: "Growth", target: "Brands scaling leads or sales across two platforms.", price: "$1,400", popular: true, features: ["2 platforms", "Ad spend up to $20,000/mo", "Ongoing creative testing plan", "Lead forms or catalog campaigns", "Weekly optimization", "Monthly report and call"] },
      { name: "Scale", target: "Higher budgets that need several platforms and more creative volume.", price: "From $2,800", features: ["Multiple platforms", "Ad spend above $20,000/mo", "Advantage+ shopping and catalog ads", "Advanced audience and funnel strategy", "Server-side tracking review", "Dedicated ads lead"] },
    ],
  },

  tools: {
    title: "Platforms and tools we work with",
    items: ["Meta Ads Manager", "Instagram", "TikTok Ads Manager", "LinkedIn Campaign Manager", "Pinterest Ads", "Snapchat Ads", "Meta Pixel", "Conversions API", "TikTok Events API", "Google Tag Manager", "GA4", "Looker Studio"],
  },

  related: {
    title: "Ads work harder with the right support.",
    intro: "These are the services we most often run alongside paid social.",
    items: [
      { title: "Google Ads", desc: "Catch people searching for what you sell while social builds demand.", href: "/ppc/google-ads" },
      { title: "Social media marketing", desc: "Organic content and community care that make your ads more credible.", href: "/digital-marketing/social-media-marketing" },
      { title: "Video production", desc: "Ad-ready video shot and edited for Reels, TikTok and Stories.", href: "/video-production" },
      { title: "Shopify development", desc: "A fast store and clean product feed for catalog and shopping ads.", href: "/website-development/shopify" },
    ],
  },

  faqs: [
    { question: "How long before social ads start working?", answer: "First results usually show within 2 to 4 weeks of launch while the platforms learn. Cost per result tends to stabilize around weeks 4 to 6, after which we scale what works." },
    { question: "Is ad spend included in the price?", answer: "No. The monthly fee covers strategy, setup, tracking, ad copy, creative testing, optimization and reporting. Ad spend is billed by Meta, TikTok or LinkedIn directly to your card." },
    { question: "Do you make the ad creative?", answer: "We write the copy and produce static and simple video variations as part of management. For filmed ads or larger creative batches, our video production team can quote separately." },
    { question: "How much should we spend on ads?", answer: "It depends on your cost per lead or sale. As a rough guide, we suggest at least $1,500 to $2,000 a month per platform so campaigns get enough data to optimize." },
    { question: "Who owns the ad accounts?", answer: "You do. We work inside your Business Manager and ad accounts as a partner, so all campaigns, audiences, pixel data and history stay with you." },
  ],

  cta: {
    title: "Ready for paid social that pays its way?",
    description: "Tell us your platforms, budget and goals. We will send an audit and plan within one business day.",
  },
};
