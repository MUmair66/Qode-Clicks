import type { ServicePageData } from "@/lib/service-page";

export const socialMediaMarketing: ServicePageData = {
  path: "/digital-marketing/social-media-marketing",
  hub: { name: "Digital Marketing", path: "/digital-marketing" },
  name: "Social Media Marketing",
  meta: {
    title: "Social Media Marketing Agency: Organic Growth | Qode Clicks",
    description: "Organic social media for Instagram, LinkedIn, TikTok and more: strategy, content calendars, Reels and community care. From $850/mo. Get a free plan.",
  },

  hero: {
    eyebrow: "Social Media Marketing",
    title: "Social media that sounds like you,",
    accent: "and shows up every week.",
    intro: "We plan, create and publish organic content for the channels your customers actually use, then reply to comments and report on what is working. Consistent posting, short-form video and real conversations, without your team losing a day a week to it.",
    primaryLabel: "Get a free social plan",
    stats: [
      { value: "2 wks", label: "From kickoff to first scheduled posts" },
      { value: "30 days", label: "Content calendar planned ahead" },
      { value: "100%", label: "Accounts, files and content you own" },
    ],
  },

  form: {
    title: "Free social media plan",
    description: "Tell us where you post today and who you want to reach. We reply within one business day with a recommended channel mix, content plan and monthly price.",
    source: "Social media marketing quote",
    fields: [
      { name: "social_handle", label: "Main social profile or website", type: "text", placeholder: "@yourbrand or yourbrand.com" },
      { name: "main_platform", label: "Which platform matters most?", type: "select", required: true, placeholder: "Choose a platform", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube Shorts", "Pinterest", "Not sure yet"] },
      { name: "content_need", label: "What do you need?", type: "select", placeholder: "Choose one", options: ["Full management", "Content creation only", "Short-form video", "Community management", "Strategy and audit"] },
    ],
    submitLabel: "Request my social plan",
    note: "Month-to-month after the first 3 months. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most brand accounts stall.",
    intro: "Posting is easy. Posting the right things, consistently, on the right channels is a real job.",
    items: [
      { title: "Posting in bursts", desc: "Three posts one week, nothing for a month. The algorithm and your followers both lose interest." },
      { title: "Every channel, same post", desc: "One graphic is pushed to Instagram, LinkedIn and TikTok unchanged, so it fits none of them." },
      { title: "No video", desc: "Reels, TikTok and Shorts get most of the reach now, but nobody has time to plan, film and edit them." },
      { title: "Comments left unanswered", desc: "Questions and DMs sit for days, and potential customers quietly go to a competitor who replied." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Everything organic social needs, handled.",
    intro: "Choose the channels and the pieces you need, or hand us the whole calendar.",
    items: [
      { title: "Social strategy and audit", desc: "We review your accounts and competitors, pick the right channels, and set content pillars, tone and monthly targets." },
      { title: "Content calendars", desc: "A month of posts planned in advance and shared for approval, tied to launches, seasons and offers." },
      { title: "Post design", desc: "On-brand graphics, carousels and story templates sized for each platform, built in Canva so your team can reuse them." },
      { title: "Short-form video", desc: "Reels, TikToks and YouTube Shorts scripted, edited in CapCut and captioned, from your footage or a planned shoot.", href: "/video-production" },
      { title: "Copywriting", desc: "Captions, hooks and hashtags written for each platform, in your brand voice and checked before anything goes live." },
      { title: "Community management", desc: "Replies to comments and DMs on business days, with clear escalation for complaints, leads and support questions." },
      { title: "Influencer and UGC coordination", desc: "Creator shortlists, briefs, usage rights and product seeding, plus customer content reshared with permission." },
      { title: "LinkedIn for B2B", desc: "Company page content and founder or leadership posts that build trust with buyers and recruits." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From audit to a steady calendar in four steps.",
    intro: "You approve every month of content before it goes out, and you get a clear report at the end of it.",
    steps: [
      { title: "Audit and strategy", time: "Week 1", desc: "We review your accounts, audience and competitors, then agree channels, content pillars and monthly targets." },
      { title: "Brand kit and calendar", time: "Weeks 1 to 2", desc: "Templates, tone of voice notes and the first 30-day calendar prepared and sent for your approval." },
      { title: "Publish and engage", time: "Week 2 onward", desc: "Posts and videos scheduled in Meta Business Suite or Later, with comments and DMs handled on business days." },
      { title: "Report and refine", time: "Monthly", desc: "A monthly report on reach, engagement, follower growth and clicks, plus what we will change next month." },
    ],
  },

  pricing: {
    title: "Three levels of social media management.",
    intro: "Monthly retainers with a 3 month starting term, then month to month. Paid ads, influencer fees and stock footage are billed separately.",
    unit: "per month",
    plans: [
      { name: "Starter", target: "Small businesses that need a consistent, professional presence on two channels.", price: "$850", features: ["2 platforms", "12 posts per month", "Content calendar and post design", "Captions and hashtags", "Comment replies on business days", "Monthly report"] },
      { name: "Growth", target: "Brands ready to grow reach with short-form video and more channels.", price: "$1,600", popular: true, features: ["3 platforms", "20 posts per month", "4 short-form videos per month", "Community management for comments and DMs", "Quarterly strategy review", "Monthly report and call"] },
      { name: "Brand", target: "Established brands that want social run as a full channel.", price: "$2,900", features: ["Up to 5 platforms", "30 posts per month", "8 short-form videos per month", "Influencer and UGC coordination", "LinkedIn leadership content", "Dedicated social lead"] },
    ],
  },

  tools: {
    title: "Platforms and tools we work with",
    items: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube Shorts", "X", "Pinterest", "Meta Business Suite", "Canva", "Later", "Hootsuite", "CapCut"],
  },

  related: {
    title: "Organic reach goes further with support.",
    intro: "These are the services we most often run alongside social media management.",
    items: [
      { title: "Social media ads", desc: "Put paid budget behind the posts that already work and retarget your followers.", href: "/ppc/social-media-ads" },
      { title: "Video production", desc: "Planned shoots and brand videos that give your social calendar stronger footage.", href: "/video-production" },
      { title: "Content writing", desc: "Blog posts and guides that give your social channels something worth sharing.", href: "/digital-marketing/content-writing" },
      { title: "AI video", desc: "Fast, low-cost video variations for testing hooks and formats.", href: "/video-production/ai-video" },
    ],
  },

  faqs: [
    { question: "How long until we see results from social media?", answer: "Posting starts within about 2 weeks. Engagement usually improves in the first 1 to 2 months as content becomes consistent, while steady follower growth and inbound leads tend to build over 3 to 6 months." },
    { question: "What is included in the monthly price?", answer: "Strategy, the content calendar, post design, captions, scheduling, community management on business days and a monthly report. Growth and Brand plans add short-form video. Ad spend and influencer fees are not included." },
    { question: "Do we get to approve posts before they go live?", answer: "Yes. Each month's calendar is shared for approval about a week ahead, and nothing is published until you sign off. Timely or reactive posts are checked with you first too." },
    { question: "Do you film the videos or do we?", answer: "Either works. Many clients send phone footage and we script, edit and caption it. For stronger content we can plan a shoot through our video production team, quoted separately." },
    { question: "Who owns the accounts and content?", answer: "You do. We work inside your accounts as a partner or admin, and all designs, templates and videos are yours to keep if you ever move on." },
  ],

  cta: {
    title: "Ready for social media that runs every week?",
    description: "Tell us your channels and goals. We will send a content plan and monthly price within one business day.",
  },
};
