import type { ServicePageData } from "@/lib/service-page";

export const websiteMaintenance: ServicePageData = {
  path: "/website-development/website-maintenance",
  hub: { name: "Web Development", path: "/website-development" },
  name: "Website Maintenance",
  meta: {
    title: "Website Maintenance and Care Plans from $180 | Qode Clicks",
    description: "Website care plans with updates, daily backups, uptime and security monitoring, malware cleanup and monthly reports. From $180/mo. Get a free site check.",
  },

  hero: {
    eyebrow: "Website Maintenance",
    title: "Your website, kept updated,",
    accent: "backed up and secure.",
    intro: "Our care plans look after WordPress, Shopify and custom websites every month. Updates are tested before they go live, backups run daily, and if something breaks we are already on it. You get a short report each month instead of surprises.",
    primaryLabel: "Get a free site check",
    stats: [
      { value: "24/7", label: "Uptime and security monitoring" },
      { value: "Daily", label: "Off-site backups on every plan" },
      { value: "1 day", label: "Target response time on Growth" },
    ],
  },

  form: {
    title: "Free website health check",
    description: "Tell us about your site. We run a quick check on updates, backups, speed and security and reply within one business day with a recommended plan.",
    source: "Website maintenance quote",
    fields: [
      { name: "website_url", label: "Website address", type: "text", required: true, placeholder: "yourcompany.com" },
      { name: "platform", label: "Platform", type: "select", required: true, placeholder: "Choose a platform", options: ["WordPress", "WooCommerce", "Shopify", "Next.js or React", "Other or not sure"] },
      { name: "current_issue", label: "Anything urgent?", type: "select", placeholder: "Choose one", options: ["No, just want it looked after", "Site is hacked or showing malware", "Site is slow", "Site is down or broken", "Need a new developer to take over"] },
    ],
    submitLabel: "Request my site check",
    note: "Monthly plans. Cancel any time.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why websites quietly break when nobody is watching.",
    intro: "A website is software. Left alone, it gets slower, less secure and harder to fix.",
    items: [
      { title: "Updates nobody runs", desc: "Plugins, themes and core fall months behind, and the longer they wait the more likely an update is to break something." },
      { title: "Backups that do not exist", desc: "Hosting backups are missing, stored on the same server or never tested, so a bad day becomes a rebuild." },
      { title: "Hacks found by customers", desc: "Malware, spam redirects or a security warning in Chrome are often noticed by visitors before the owner." },
      { title: "Small changes stuck in a queue", desc: "Updating a price, a team photo or opening hours means chasing a freelancer who may or may not reply." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Everything your site needs to stay healthy.",
    intro: "Every plan covers the essentials. Higher plans add more development time and faster response.",
    items: [
      { title: "Core, theme and plugin updates", desc: "Updates tested on a staging copy first, then applied to the live site with a backup taken just before." },
      { title: "Daily off-site backups", desc: "Automatic daily backups stored away from your server, kept for 30 days and test-restored every quarter." },
      { title: "Uptime monitoring", desc: "Your site is checked every few minutes. If it goes down, we are alerted and start investigating straight away." },
      { title: "Security monitoring and hardening", desc: "Firewall, malware scans, login protection and file change alerts to stop most attacks before they start." },
      { title: "Malware cleanup", desc: "If your site is hacked, we clean it, close the hole that let attackers in and request removal from Google blocklists." },
      { title: "Speed checks", desc: "Monthly Core Web Vitals and Lighthouse checks, with fixes for images, caching and scripts when scores slip." },
      { title: "Small content changes", desc: "Text, images, new pages and form tweaks handled by our team from the hours included in your plan.", href: "/digital-marketing/content-writing" },
      { title: "Monthly report", desc: "A plain-language summary of updates, backups, uptime, security events, speed and the work completed." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From handover to hands-off in four steps.",
    intro: "Onboarding takes about a week. After that, the routine runs itself and you hear from us monthly.",
    steps: [
      { title: "Site audit", time: "Days 1 to 3", desc: "We review hosting, access, plugins, backups, security and speed, and list anything that needs fixing first." },
      { title: "Onboarding", time: "Days 3 to 7", desc: "Backups, monitoring, firewall and a staging site are set up, and outdated software is brought up to date safely." },
      { title: "Monthly care", time: "Every month", desc: "Tested updates, backups, scans, speed checks and your content requests, handled by the same small team." },
      { title: "Report and review", time: "Monthly", desc: "You get a short report, and we flag anything coming up such as PHP upgrades, expiring licenses or slow pages." },
    ],
  },

  pricing: {
    title: "Three care plans.",
    intro: "Monthly plans with no long contract. Hosting, domains and premium plugin licenses are billed to you directly.",
    unit: "per month",
    plans: [
      { name: "Essential", target: "Brochure sites that need to stay updated, backed up and secure.", price: "$180", features: ["Weekly tested updates", "Daily off-site backups", "Uptime and security monitoring", "1 hour of small changes", "Monthly report"] },
      { name: "Growth", target: "Business sites that change often and generate leads every day.", price: "$390", popular: true, features: ["Everything in Essential", "3 hours of changes per month", "Malware cleanup included", "Monthly speed checks and fixes", "Staging site for testing", "1 business day response target"] },
      { name: "Priority", target: "Online stores and busy sites where downtime costs real money.", price: "$790", features: ["Everything in Growth", "8 hours of development per month", "Same-day response target", "WooCommerce and checkout testing", "Quarterly backup restore test", "Dedicated developer"] },
    ],
  },

  tools: {
    title: "Platforms and tools we use",
    items: ["WordPress", "WooCommerce", "Shopify", "Next.js", "Cloudflare", "Wordfence", "UpdraftPlus", "ManageWP", "UptimeRobot", "Google Search Console", "PageSpeed Insights"],
  },

  related: {
    title: "When maintenance is not enough.",
    intro: "If your site needs more than looking after, these services pick up where care plans stop.",
    items: [
      { title: "Website redesign", desc: "A modern design and faster pages without losing your rankings.", href: "/website-development/website-redesign" },
      { title: "WordPress development", desc: "New features, custom blocks and themes built properly.", href: "/website-development/wordpress" },
      { title: "QA and testing", desc: "Regression and cross-browser testing for larger sites and apps.", href: "/website-development/qa-testing" },
      { title: "SEO", desc: "Turn a healthy, fast site into one that brings in steady search traffic.", href: "/digital-marketing/seo" },
    ],
  },

  faqs: [
    { question: "What is included in a care plan?", answer: "Every plan includes tested updates, daily off-site backups, uptime and security monitoring, and a monthly report. Growth and Priority add more hours of changes, malware cleanup, speed fixes and faster response. Hosting and plugin licenses are billed separately." },
    { question: "How long does onboarding take?", answer: "About one week. We audit the site, set up backups and monitoring, and bring outdated software up to date before the monthly routine starts." },
    { question: "Do you look after sites you did not build?", answer: "Yes. Most sites we maintain were built by someone else. The first audit tells us what we are working with, and we flag anything risky before we take over." },
    { question: "What happens if my site gets hacked?", answer: "On Growth and Priority, cleanup is included. We remove the malware, restore clean files where needed, close the security gap and request removal from Google warnings. On Essential, cleanup is quoted at a fixed price." },
    { question: "What if I need more hours one month?", answer: "Extra work is billed at a fixed hourly rate agreed in advance, or you can move to a higher plan. Unused hours do not roll over." },
  ],

  cta: {
    title: "Want your website looked after properly?",
    description: "Send us your site address. We will run a free health check and reply within one business day with the right plan.",
  },
};
