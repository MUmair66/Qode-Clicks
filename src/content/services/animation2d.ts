import type { ServicePageData } from "@/lib/service-page";

export const animation2d: ServicePageData = {
  path: "/video-production/2d-animation",
  hub: { name: "Video Production", path: "/video-production" },
  name: "2D Animation",
  meta: {
    title: "2D Animation and Explainer Video Studio | Qode Clicks",
    description: "Explainer videos, motion graphics, character animation and animated ads, scripted and voiced for every platform. From $1,200 per video. Get a free quote.",
  },

  hero: {
    eyebrow: "2D Animation",
    title: "2D animation that makes your offer",
    accent: "click in under a minute.",
    intro: "We script, design and animate explainer videos, motion graphics and animated ads that turn a complicated product or service into a simple story. Voiceover, music, subtitles and every aspect ratio are part of the job.",
    primaryLabel: "Get a free animation quote",
    stats: [
      { value: "3 to 5 wks", label: "Typical explainer timeline" },
      { value: "2 rounds", label: "Revision rounds included" },
      { value: "100%", label: "Final videos and artwork you own" },
    ],
  },

  form: {
    title: "Free 2D animation quote",
    description: "Tell us what the video should explain and where it will run. We reply within one business day with a style suggestion, timeline and fixed price.",
    source: "2D animation quote",
    fields: [
      { name: "animation_style", label: "What style do you need?", type: "select", required: true, placeholder: "Choose a style", options: ["Explainer video", "Motion graphics", "Character animation", "Whiteboard animation", "Animated social ad", "Logo animation", "Not sure yet"] },
      { name: "video_length", label: "Approximate length", type: "select", placeholder: "Choose a length", options: ["Up to 30 seconds", "30 to 60 seconds", "60 to 90 seconds", "Over 90 seconds", "A series of videos"] },
      { name: "script_status", label: "Do you have a script?", type: "select", placeholder: "Choose one", options: ["Yes, ready to go", "A rough draft", "No, please write it"] },
    ],
    submitLabel: "Request my animation quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why most explainer videos fail to explain.",
    intro: "Animation can make anything clear. It can also make a confusing pitch look expensive and stay confusing.",
    items: [
      { title: "Too much in one video", desc: "Every feature gets a mention, so the video runs three minutes and viewers remember none of it." },
      { title: "Generic template look", desc: "Stock characters and template scenes look like every other brand, and nothing feels like yours." },
      { title: "Built for one screen", desc: "A widescreen explainer gets reused in vertical feeds, with text cropped off and tiny visuals nobody can read." },
      { title: "No sound-off plan", desc: "Most social video plays muted, and without captions or on-screen text the message disappears." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Every kind of 2D animation, made in house.",
    intro: "From a 6 second logo sting to an explainer series for your whole product line.",
    items: [
      { title: "Explainer videos", desc: "60 to 90 second videos that show the problem, your solution and the next step, for homepages, sales decks and onboarding." },
      { title: "Motion graphics", desc: "Animated type, icons, charts and UI screens that bring data, features and software walkthroughs to life." },
      { title: "Character animation", desc: "Custom illustrated characters, rigged and animated so your story has a face people relate to." },
      { title: "Whiteboard animation", desc: "Hand drawn style videos for training, education and step by step explanations." },
      { title: "Animated ads and social clips", desc: "6 to 30 second animated ads for Meta, TikTok and YouTube, with a hook in the opening seconds." },
      { title: "Logo animation", desc: "Animated logo reveals and stings for video intros, outros and social profiles." },
      { title: "Lottie animations for web", desc: "Lightweight animated icons and illustrations exported as Lottie files for your website or app." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From script to final animation in four steps.",
    intro: "You approve each stage before the next one starts, so nothing is animated until the story is right.",
    steps: [
      { title: "Brief and script", time: "Week 1", desc: "We agree audience, message and call to action, then write a script timed to the target length." },
      { title: "Storyboard and style frames", time: "Weeks 1 to 2", desc: "Illustrated style frames and a full storyboard show every scene, plus voiceover options to choose from." },
      { title: "Animation and sound", time: "Weeks 2 to 4", desc: "Scenes animated in After Effects, voiceover recorded, music and sound effects added, then shared as a first cut." },
      { title: "Revisions and delivery", time: "Weeks 4 to 5", desc: "Two revision rounds, then final files in 16:9, 9:16 and 1:1 with burned-in captions and SRT subtitles." },
    ],
  },

  pricing: {
    title: "Three ways to commission 2D animation.",
    intro: "Fixed prices per video, agreed before we start. Celebrity or union voice talent and extra languages are quoted separately.",
    unit: "per video",
    plans: [
      { name: "Short", target: "Animated ads, social clips and logo animations up to 30 seconds.", price: "$1,200", features: ["Up to 30 seconds", "Script and storyboard", "Motion graphics style", "Licensed music and sound effects", "16:9, 9:16 and 1:1 cuts", "Two revision rounds"] },
      { name: "Explainer", target: "Businesses that need one clear video for their homepage, sales or onboarding.", price: "$2,400", popular: true, features: ["60 to 90 seconds", "Script written by our team", "Custom illustrated style or characters", "Professional voiceover", "Captions and SRT subtitles", "All aspect ratios", "Two revision rounds"] },
      { name: "Series or long form", target: "Product lines, training libraries and videos over 90 seconds.", price: "From $4,500", features: ["Multiple videos or longer runtime", "Shared style guide and character set", "Voiceover in extra languages", "Cutdowns for ads and social", "Source project files included", "Dedicated project lead"] },
    ],
  },

  tools: {
    title: "Software we animate with",
    items: ["Adobe After Effects", "Adobe Illustrator", "Adobe Animate", "Adobe Premiere Pro", "Lottie", "Bodymovin", "Toon Boom Harmony", "Figma", "Adobe Audition", "ElevenLabs"],
  },

  related: {
    title: "Put your animation to work.",
    intro: "These are the services we most often run alongside a 2D animation project.",
    items: [
      { title: "Social media ads", desc: "Meta, TikTok and YouTube campaigns built around your animated ads.", href: "/ppc/social-media-ads" },
      { title: "Social media marketing", desc: "Organic posting plans that get more mileage from every animated clip.", href: "/digital-marketing/social-media-marketing" },
      { title: "3D animation", desc: "Need a photoreal product shot instead of an illustrated look? Compare 3D here.", href: "/video-production/3d-animation" },
      { title: "AI video production", desc: "Fast, lower cost AI videos for high volume ad testing.", href: "/video-production/ai-video" },
    ],
  },

  faqs: [
    { question: "How long does a 2D explainer video take?", answer: "A 60 to 90 second explainer usually takes 3 to 5 weeks from brief to final files. Short ads and logo animations take 1 to 2 weeks, and series projects are scheduled in batches." },
    { question: "What is included in the price?", answer: "Script, storyboard, illustration, animation, voiceover, licensed music, two revision rounds, captions, SRT subtitles and delivery in 16:9, 9:16 and 1:1. Extra languages and premium voice talent are quoted upfront." },
    { question: "Do you write the script?", answer: "Yes, if you want us to. We interview your team, draft the script to the target length and revise it until you approve, before any animation starts." },
    { question: "Can you match our brand guidelines?", answer: "Yes. We build the style frames from your colors, fonts and existing illustrations, so the video feels like part of your brand rather than a template." },
    { question: "Do we get the source files?", answer: "Final videos are always yours. Source After Effects and Illustrator files are included in the Series plan and available on the other plans for a small handover fee." },
  ],

  cta: {
    title: "Ready to explain it in 90 seconds?",
    description: "Tell us what you need people to understand. We will send a fixed price scope within one business day.",
  },
};
