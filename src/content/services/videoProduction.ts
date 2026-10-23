import type { ServicePageData } from "@/lib/service-page";

export const videoProduction: ServicePageData = {
  path: "/video-production",
  hub: { name: "Video Production", path: "/video-production" },
  name: "Video Production",
  meta: {
    title: "Video Production for Marketing and Ads | Qode Clicks",
    description: "2D animation, 3D animation and AI video for ads, social and product pages, cut to every format you run. AI video from $450. Get a free video quote today.",
  },

  hero: {
    eyebrow: "Video Production",
    title: "Marketing videos made to be watched,",
    accent: "and made to work hard.",
    intro: "We script, animate, edit and deliver videos for ads, social feeds, landing pages and product launches. Pick 2D animation, 3D animation or AI video, and get every cut in the aspect ratios your channels need.",
    primaryLabel: "Get a free video quote",
    stats: [
      { value: "1 to 6 wks", label: "Typical delivery timeline" },
      { value: "3 formats", label: "16:9, 9:16 and 1:1 cuts as standard" },
      { value: "100%", label: "Final files and usage rights you own" },
    ],
  },

  form: {
    title: "Free video production quote",
    description: "Tell us what the video is for and where it will run. We reply within one business day with a format recommendation, timeline and fixed price.",
    source: "Video production quote",
    fields: [
      { name: "video_type", label: "What kind of video?", type: "select", required: true, placeholder: "Choose a video type", options: ["2D animation or explainer", "3D animation or product video", "AI video or AI avatar", "Social video edits", "Ad creatives for testing", "Not sure yet"] },
      { name: "video_length", label: "Approximate length", type: "select", placeholder: "Choose a length", options: ["Under 15 seconds", "15 to 30 seconds", "30 to 90 seconds", "Over 90 seconds", "A series of videos"] },
      { name: "website_url", label: "Your website", type: "text", placeholder: "yourbrand.com" },
      { name: "deadline", label: "When do you need it?", type: "text", placeholder: "e.g. product launch on March 3" },
    ],
    submitLabel: "Request my video quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most marketing videos never earn their budget back.",
    intro: "Getting a video made is easy. Getting one that people watch to the end and act on is the hard part.",
    items: [
      { title: "No hook in the first seconds", desc: "The logo and a slow intro come first, so most viewers scroll past before the actual message appears." },
      { title: "One cut for every channel", desc: "A single 16:9 file gets cropped badly in Reels, Shorts and Stories, with captions and products cut off." },
      { title: "Made without a brief", desc: "Nobody agreed who the video is for or what it should make them do, so the edit drifts and the call to action is weak." },
      { title: "Too slow to test", desc: "One expensive video takes months, which leaves no room to test hooks, offers and angles in paid campaigns." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Every kind of marketing video, from one team.",
    intro: "Start with one format or let us plan a full video library for your funnel.",
    items: [
      { title: "2D animation", desc: "Explainers, motion graphics, character animation and animated ads that make a complex offer simple to follow.", href: "/video-production/2d-animation" },
      { title: "3D animation", desc: "Product visualization, CGI ads, 3D explainers and architectural walkthroughs rendered to a premium finish.", href: "/video-production/3d-animation" },
      { title: "AI video production", desc: "AI avatars, text-to-video ads and multilingual dubbing, with human scripting, editing and brand review.", href: "/video-production/ai-video" },
      { title: "Social video edits", desc: "Your raw footage cut into Reels, TikToks and Shorts with captions, hooks and on-brand graphics." },
      { title: "Ad creatives", desc: "Short video ads built for Meta, TikTok and YouTube, delivered in variations so you can test hooks and offers." },
      { title: "Explainer videos", desc: "60 to 90 second videos that explain what you do, who it is for and why it is worth trying." },
      { title: "Product videos", desc: "Feature demos, launch videos and looping product clips for store pages, Amazon listings and ads." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From brief to final cut in four steps.",
    intro: "Every project has a fixed scope, agreed revision rounds and a shared review link, so feedback stays in one place.",
    steps: [
      { title: "Brief and script", time: "Week 1", desc: "We agree the audience, message, channels and call to action, then write the script for your approval." },
      { title: "Storyboard and style", time: "Weeks 1 to 2", desc: "Style frames, storyboard or AI test shots approved before full production starts, so there are no surprises." },
      { title: "Production", time: "Weeks 2 to 5", desc: "Animation, rendering or AI generation, plus voiceover, music and sound design, shared as a first cut." },
      { title: "Revisions and delivery", time: "Weeks 4 to 6", desc: "Two rounds of revisions, then final files in every aspect ratio with captions and subtitle files." },
    ],
  },

  pricing: {
    title: "Three starting points for video.",
    intro: "Fixed prices per video, agreed before we start. Stock footage, licensed music and premium voice talent are quoted upfront if needed.",
    unit: "per video",
    plans: [
      { name: "AI video", target: "Brands that need fast, affordable videos for social and ad testing.", price: "From $450", features: ["Script written or polished by our team", "AI visuals, avatar or voiceover", "Human edit and brand review", "Captions included", "16:9, 9:16 and 1:1 cuts"] },
      { name: "2D animation", target: "Businesses that need to explain a product or service clearly.", price: "From $1,200", popular: true, features: ["Script and storyboard", "Custom illustrated style", "Professional voiceover and music", "Two revision rounds", "All aspect ratios and subtitle files", "Source project files on request"] },
      { name: "3D animation", target: "Product brands and developers that need a premium, photoreal look.", price: "From $3,500", features: ["3D modeling and texturing", "Lighting, camera moves and rendering", "Studio or environment scenes", "Music and sound design", "Two revision rounds", "Stills rendered from the same scenes"] },
    ],
  },

  tools: {
    title: "Software and platforms we use",
    items: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator", "Blender", "Cinema 4D", "Unreal Engine", "Runway", "HeyGen", "ElevenLabs", "DaVinci Resolve", "Figma"],
  },

  related: {
    title: "A video needs somewhere to run.",
    intro: "These are the services we most often pair with video production.",
    items: [
      { title: "Social media ads", desc: "Meta, TikTok and YouTube campaigns that put your new videos in front of buyers.", href: "/ppc/social-media-ads" },
      { title: "Social media marketing", desc: "Organic content plans and posting that keep your videos working after launch.", href: "/digital-marketing/social-media-marketing" },
      { title: "Google Ads", desc: "YouTube and Performance Max campaigns that use video alongside search.", href: "/ppc/google-ads" },
      { title: "Website redesign", desc: "Landing pages built around your explainer or product video.", href: "/website-development/website-redesign" },
    ],
  },

  faqs: [
    { question: "How long does a marketing video take to produce?", answer: "AI videos usually take 3 to 7 business days. A 2D explainer takes 3 to 5 weeks, and 3D product videos take 4 to 8 weeks depending on modeling and render time." },
    { question: "What is included in the price?", answer: "Scripting, production, voiceover, music, two revision rounds, captions and delivery in 16:9, 9:16 and 1:1. Premium voice talent, stock footage or extra languages are quoted before we start." },
    { question: "Which type of video should I choose?", answer: "2D suits explaining services and software, 3D suits physical products and spaces, and AI video suits fast, high volume content for social and ad testing. We recommend a format after the brief." },
    { question: "Can you edit footage we already have?", answer: "Yes. We cut existing footage into social clips, ads and product videos, and can add motion graphics, captions and voiceover." },
    { question: "Who owns the finished videos?", answer: "You do. Final videos and usage rights are yours once the project is paid, and licensed music and stock are cleared for the channels we agree." },
  ],

  cta: {
    title: "Ready for videos that pull their weight?",
    description: "Tell us what the video needs to do and where it will run. We will send a fixed price scope within one business day.",
  },
};
