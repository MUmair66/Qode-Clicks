// Single source of truth for brand details and headline figures.
// Every page reads from here so names, numbers and contact details never drift apart.
// Figures marked "verify" are placeholders until the client confirms them.

export const SITE = {
  name: "Qode Clicks",
  url: "https://qodeclicks.com",
  email: "info@qodeclicks.com",
  // Client to supply. Phone links render only when this is set.
  phone: "",
  phoneHref: "",
  formAction: "https://formsubmit.co/info@qodeclicks.com",
  // Google Analytics 4 measurement ID.
  gaId: "G-1TQZGGDFQS",
  // Client to supply a scheduling link (Calendly, Cal.com, etc.). Falls back to the contact form.
  bookingUrl: "/contact#contact-form",
  tagline: "Web design, SEO, paid ads and growth systems for service businesses.",
} as const;

// Canonical "from" prices (client to approve). Service pages hold the detailed tiers;
// the homepage, FAQ and contact copy must quote these same starting points.
export const PRICING = {
  seoMonthly: "$1,600/mo",
  googleAdsMonthly: "$900/mo",
  lsaMonthly: "$900/mo", // managed plan; one-off setup from $650
  contentMonthly: "$520/mo",
  wordpressBuild: "$780", // template kit; premium theme $1,450; custom $4,200; headless $11,000
  wordpressCustom: "$4,200",
  wooCommerce: "$3,900",
  customWebApp: "$3,500",
  carePlanMonthly: "$180/mo",
  minAdSpendMonthly: "$3,000/mo",
  shopifyBuild: "$2,400",
  redesign: "$1,800",
  qaAudit: "$900",
  socialMonthly: "$850/mo",
  socialAdsMonthly: "$750/mo",
  aiVideo: "$450",
  video2d: "$1,200",
  video3d: "$3,500",
} as const;

export const SERVICES = [
  { name: "SEO", href: "/digital-marketing/seo", group: "Digital Marketing" },
  { name: "Google Business Profile", href: "/digital-marketing/google-business-profile", group: "Digital Marketing" },
  { name: "AI SEO", href: "/digital-marketing/ai-seo", group: "Digital Marketing" },
  { name: "Content Writing", href: "/digital-marketing/content-writing", group: "Digital Marketing" },
  { name: "Social Media Marketing", href: "/digital-marketing/social-media-marketing", group: "Digital Marketing" },
  { name: "Google Ads", href: "/ppc/google-ads", group: "Paid Advertising" },
  { name: "Local Services Ads", href: "/ppc/local-services-ads", group: "Paid Advertising" },
  { name: "Social Media Ads", href: "/ppc/social-media-ads", group: "Paid Advertising" },
  { name: "Custom Web Apps", href: "/website-development/custom-web-apps", group: "Web Development" },
  { name: "WordPress Development", href: "/website-development/wordpress", group: "Web Development" },
  { name: "Shopify Development", href: "/website-development/shopify", group: "Web Development" },
  { name: "E-commerce Websites", href: "/website-development/ecommerce-website", group: "Web Development" },
  { name: "Website Redesign", href: "/website-development/website-redesign", group: "Web Development" },
  { name: "Website Maintenance", href: "/website-development/website-maintenance", group: "Web Development" },
  { name: "QA and Test Automation", href: "/website-development/qa-testing", group: "Web Development" },
  { name: "2D Animation", href: "/video-production/2d-animation", group: "Video Production" },
  { name: "3D Animation", href: "/video-production/3d-animation", group: "Video Production" },
  { name: "AI Video", href: "/video-production/ai-video", group: "Video Production" },
] as const;

// Main navigation, grouped. Navbar and Footer both read from this.
export const NAV_GROUPS = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Paid Advertising", href: "/ppc" },
  { name: "Web Development", href: "/website-development" },
  { name: "Video Production", href: "/video-production" },
].map((g) => ({ ...g, items: SERVICES.filter((s) => s.group === g.name) }));
