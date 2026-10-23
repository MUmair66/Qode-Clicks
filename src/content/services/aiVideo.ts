import type { ServicePageData } from "@/lib/service-page";

export const aiVideo: ServicePageData = {
  path: "/video-production/ai-video",
  hub: { name: "Video Production", path: "/video-production" },
  name: "AI Video Production",
  meta: {
    title: "AI Video Production for Ads and Social | Qode Clicks",
    description: "AI avatars, text-to-video ads, AI voiceover and multilingual dubbing, scripted and edited by people. From $450 per video. Get a free AI video quote today.",
  },

  hero: {
    eyebrow: "AI Video Production",
    title: "AI video at the speed of your ads,",
    accent: "with people in charge of quality.",
    intro: "We use AI video, avatar and voice tools to produce ad creatives, social videos and dubbed versions in days rather than weeks. Our team writes the scripts, edits every cut and checks it against your brand before anything goes live.",
    primaryLabel: "Get a free AI video quote",
    stats: [
      { value: "3 to 7 days", label: "Typical single video turnaround" },
      { value: "5+", label: "Ad variations per creative pack" },
      { value: "100%", label: "Human script, edit and brand review" },
    ],
  },

  form: {
    title: "Free AI video quote",
    description: "Tell us what you want to make and where it will run. We reply within one business day with an approach, the tools we would use and a fixed price.",
    source: "AI video quote",
    fields: [
      { name: "ai_video_type", label: "What do you need?", type: "select", required: true, placeholder: "Choose a video type", options: ["AI avatar or spokesperson video", "Text-to-video ad", "AI voiceover or dubbing", "UGC style ads", "Ad creative variations", "Monthly AI content"] },
      { name: "languages", label: "Languages needed", type: "text", placeholder: "e.g. English, Spanish, German" },
      { name: "ad_platforms", label: "Where will it run?", type: "select", placeholder: "Choose a platform", options: ["Meta (Facebook and Instagram)", "TikTok", "YouTube", "Website or landing page", "Several platforms"] },
    ],
    submitLabel: "Request my AI video quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most AI video looks like AI video.",
    intro: "The tools are powerful. Used without a script, an editor and a brand check, they produce content people scroll straight past.",
    items: [
      { title: "Uncanny, off-brand output", desc: "Raw generations with warped hands, odd motion and colors that look nothing like your brand." },
      { title: "No story, just clips", desc: "Pretty AI shots strung together with no hook, no offer and no reason to act." },
      { title: "Licensing left unchecked", desc: "Tools used on plans that do not allow commercial use, or avatars built from a likeness nobody consented to." },
      { title: "Ads flagged or rejected", desc: "Platforms now require AI disclosure labels, and missing them can mean rejected ads or lost trust." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "AI video for marketing, done properly.",
    intro: "AI handles the heavy lifting. Our team handles the script, the edit and the judgment calls.",
    items: [
      { title: "AI avatars and spokespersons", desc: "Presenter videos with a stock avatar or a custom avatar of your own spokesperson, recorded with their written consent." },
      { title: "Text-to-video ads", desc: "Short ads built from generated scenes, product shots and motion graphics, edited to a tight hook and offer." },
      { title: "AI voiceover and dubbing", desc: "Natural voiceovers and translated, lip-synced versions of existing videos for new markets, reviewed by fluent speakers where possible." },
      { title: "AI-enhanced UGC style ads", desc: "Creator style ads that mix real product footage with AI voice, captions and b-roll, labeled as required by each platform." },
      { title: "Rapid creative variations", desc: "One concept turned into 5 or more versions with different hooks, offers and formats for ad testing." },
      { title: "Human edit and brand review", desc: "Every video finished in Premiere Pro, checked for artifacts, brand fit, claims and platform rules before delivery." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From brief to tested creatives in four steps.",
    intro: "AI speeds up production, not decision making. You approve the script and test shots before we scale up.",
    steps: [
      { title: "Brief and script", time: "Days 1 to 2", desc: "We agree the audience, offer and platforms, then write scripts and hooks for your approval." },
      { title: "Test generations", time: "Days 2 to 3", desc: "Sample shots, avatar and voice options so you can approve the look and sound before full production." },
      { title: "Generate and edit", time: "Days 3 to 6", desc: "Scenes generated, voiced and edited by our team, with captions, branding and music added." },
      { title: "Review and deliver", time: "Days 5 to 7", desc: "Brand, claims and artifact checks, one revision round, then every cut and aspect ratio with AI disclosure guidance." },
    ],
  },

  pricing: {
    title: "Three ways to use AI video.",
    intro: "Fixed prices, agreed before we start. Custom avatar setup and premium voice clones are quoted separately if needed.",
    unit: "per video",
    plans: [
      { name: "Single video", target: "Brands testing AI video for one ad, explainer or social post.", price: "From $450", features: ["Up to 60 seconds", "Script written by our team", "Stock avatar or AI visuals", "AI voiceover in one language", "Captions and 3 aspect ratios", "One revision round"] },
      { name: "Ad creative pack", target: "Paid social teams that need fresh creatives to test every month.", price: "From $1,200", popular: true, features: ["5 video variations", "Different hooks and offers", "Meta, TikTok and YouTube formats", "AI voice and captions", "Brand and claims review", "Testing notes for your ad team"] },
      { name: "Monthly AI content", target: "Brands publishing video every week across ads and social.", price: "From $2,200/mo", features: ["Monthly video quota agreed upfront", "Content calendar and scripts", "Multilingual dubbing options", "Custom avatar with consent on file", "Monthly performance review", "Cancel with 30 days notice"] },
    ],
  },

  tools: {
    title: "AI and editing tools we use",
    items: ["Runway", "Google Veo", "OpenAI Sora", "Kling", "HeyGen", "Synthesia", "ElevenLabs", "Midjourney", "Adobe Firefly", "Adobe Premiere Pro", "CapCut"],
  },

  related: {
    title: "AI video works best with a plan behind it.",
    intro: "These are the services we most often run alongside AI video production.",
    items: [
      { title: "Social media ads", desc: "Campaign management that tests your AI creatives and scales the winners.", href: "/ppc/social-media-ads" },
      { title: "Social media marketing", desc: "Organic content calendars that keep AI videos on brand and on schedule.", href: "/digital-marketing/social-media-marketing" },
      { title: "2D animation", desc: "A fully crafted explainer when you need a hero video, not a test.", href: "/video-production/2d-animation" },
      { title: "Video production", desc: "Compare every video format we offer, from AI to 3D.", href: "/video-production" },
    ],
  },

  faqs: [
    { question: "How fast can you deliver an AI video?", answer: "A single video usually takes 3 to 7 business days from approved brief. An ad creative pack of 5 variations takes 1 to 2 weeks, and monthly content runs on an agreed calendar." },
    { question: "What is included in the price?", answer: "Script, AI generation, voiceover, human editing, captions, brand review, one revision round and delivery in 16:9, 9:16 and 1:1. Tool subscriptions are covered by us. Custom avatars and voice clones are quoted separately." },
    { question: "Can we use these videos commercially?", answer: "Yes. We only use AI tools on plans that permit commercial use, keep a record of the tools used for each video, and avoid prompts that imitate real people, brands or copyrighted characters." },
    { question: "Can you make an avatar of our CEO or spokesperson?", answer: "Yes, with their signed consent. We record source footage with them, use it only for your brand, and the avatar is removed from the platform at the end of the engagement if you ask." },
    { question: "Do AI videos need to be labeled?", answer: "Often, yes. Meta, TikTok and YouTube require disclosure for realistic AI generated content. We tell you which videos need a label and how to apply it on each platform." },
  ],

  cta: {
    title: "Ready to test more creatives, faster?",
    description: "Tell us what you are selling and where. We will send a fixed price scope within one business day.",
  },
};
