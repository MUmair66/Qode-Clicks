import type { ServicePageData } from "@/lib/service-page";

export const animation3d: ServicePageData = {
  path: "/video-production/3d-animation",
  hub: { name: "Video Production", path: "/video-production" },
  name: "3D Animation",
  meta: {
    title: "3D Animation and Product Visualization | Qode Clicks",
    description: "3D product videos, CGI ads, architectural walkthroughs and 3D explainers, modeled and rendered in house. From $3,500 per video. Get a free 3D quote today.",
  },

  hero: {
    eyebrow: "3D Animation",
    title: "3D animation that shows your product",
    accent: "better than a camera can.",
    intro: "We model, texture, light and render products, spaces and mechanisms in 3D, then animate them into product videos, CGI ads and walkthroughs. No studio shoot, no prototype needed, and every angle is under control.",
    primaryLabel: "Get a free 3D quote",
    stats: [
      { value: "4 to 8 wks", label: "Typical product video timeline" },
      { value: "4K", label: "Render resolution available" },
      { value: "100%", label: "Final renders and usage rights you own" },
    ],
  },

  form: {
    title: "Free 3D animation quote",
    description: "Tell us what needs to be shown and what files you already have. We reply within one business day with an approach, timeline and fixed price.",
    source: "3D animation quote",
    fields: [
      { name: "project_type", label: "What do you need?", type: "select", required: true, placeholder: "Choose a project type", options: ["Product spin or loop", "3D product video", "CGI ad", "Architectural walkthrough", "3D explainer", "Medical or technical animation", "3D logo reveal"] },
      { name: "source_files", label: "What files do you have?", type: "select", placeholder: "Choose one", options: ["CAD or 3D model files", "Photos and dimensions only", "Architectural drawings", "Nothing yet"] },
      { name: "video_length", label: "Approximate length", type: "select", placeholder: "Choose a length", options: ["Under 15 seconds", "15 to 30 seconds", "30 to 60 seconds", "Over 60 seconds"] },
    ],
    submitLabel: "Request my 3D quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why so much 3D work looks cheap or runs late.",
    intro: "Good 3D looks effortless. Getting there takes careful modeling, lighting and planning.",
    items: [
      { title: "Plastic looking renders", desc: "Flat lighting and generic materials make a premium product look like a toy." },
      { title: "Inaccurate models", desc: "Products modeled from a few photos end up with wrong proportions, and the client spots it straight away." },
      { title: "Endless render loops", desc: "Changes requested after final rendering mean days of extra render time and missed launch dates." },
      { title: "One asset, one use", desc: "The 3D scene is built for a single video, so new angles, stills and ads mean paying for it all again." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "3D animation for products, places and ideas.",
    intro: "Every scene is built so it can be reused for future videos, stills and ads.",
    items: [
      { title: "Product visualization", desc: "Photoreal product spins, loops and hero shots for store pages, Amazon listings and crowdfunding campaigns." },
      { title: "3D product videos", desc: "30 to 60 second videos that show features, materials and how the product works, including exploded views." },
      { title: "CGI ads", desc: "Eye catching CGI spots for social and YouTube, with physics, liquids and effects that would be costly to film." },
      { title: "Architectural walkthroughs", desc: "Animated flythroughs of buildings, interiors and developments, made from your plans before construction starts." },
      { title: "3D explainers", desc: "Mechanisms, processes and internal parts shown clearly in a way live footage cannot." },
      { title: "Medical and technical animation", desc: "Devices, procedures and engineering processes animated accurately with your subject matter experts." },
      { title: "3D logo reveals", desc: "Rendered logo animations for video intros, events and brand films." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From reference files to final render in four steps.",
    intro: "Look, camera and motion are approved before final rendering, so late changes do not blow up the schedule.",
    steps: [
      { title: "Brief and references", time: "Week 1", desc: "We collect CAD files, photos or plans, agree the shots, style and runtime, and write a short script or shot list." },
      { title: "Modeling and look development", time: "Weeks 1 to 3", desc: "Accurate models, textures and materials, approved as lit still frames before any animation." },
      { title: "Animation and previs", time: "Weeks 3 to 5", desc: "Camera moves and animation shared as a low resolution preview so timing is signed off early." },
      { title: "Render and finish", time: "Weeks 5 to 8", desc: "Final rendering, compositing, music and sound design, then delivery in every format and aspect ratio you need." },
    ],
  },

  pricing: {
    title: "Three ways to commission 3D animation.",
    intro: "Fixed prices per video, agreed before we start. Complex modeling from scratch or very long runtimes are quoted after we review your files.",
    unit: "per video",
    plans: [
      { name: "Product spin or loop", target: "Store pages, listings and social posts that need a clean, photoreal product shot.", price: "From $3,500", features: ["One product modeled from CAD or reference", "Studio lighting and materials", "Up to 15 seconds", "Seamless loop or 360 spin", "5 still renders included"] },
      { name: "Product video", target: "Launches and ads that need to show features and how the product works.", price: "From $6,500", popular: true, features: ["30 to 60 seconds", "Script and shot list", "Exploded views and feature callouts", "Animation preview before rendering", "Music and sound design", "16:9, 9:16 and 1:1 renders", "Two revision rounds"] },
      { name: "Full CGI or walkthrough", target: "CGI ads, architectural walkthroughs and complex technical animation.", price: "From $12,000", features: ["Environments and full scenes", "Simulations, liquids or effects", "Up to 4K rendering", "Voiceover and captions", "Reusable 3D scene files", "Dedicated project lead"] },
    ],
  },

  tools: {
    title: "Software we model and render with",
    items: ["Blender", "Cinema 4D", "Autodesk Maya", "Houdini", "Unreal Engine", "Redshift", "Octane Render", "Substance 3D Painter", "ZBrush", "Adobe After Effects", "DaVinci Resolve"],
  },

  related: {
    title: "Get more from every 3D scene.",
    intro: "These are the services we most often run alongside a 3D animation project.",
    items: [
      { title: "Social media ads", desc: "Meta, TikTok and YouTube campaigns that launch your CGI ads to the right buyers.", href: "/ppc/social-media-ads" },
      { title: "Shopify development", desc: "Product pages built to show off your 3D videos and spins.", href: "/website-development/shopify" },
      { title: "2D animation", desc: "Need an illustrated explainer instead? Compare 2D animation here.", href: "/video-production/2d-animation" },
      { title: "AI video production", desc: "Fast AI cutdowns and variations to test alongside your hero 3D video.", href: "/video-production/ai-video" },
    ],
  },

  faqs: [
    { question: "How long does a 3D product video take?", answer: "A product spin or loop usually takes 2 to 3 weeks. A 30 to 60 second product video takes 4 to 8 weeks, and full CGI or walkthrough projects take 8 to 12 weeks depending on scenes and render time." },
    { question: "What is included in the price?", answer: "Modeling, texturing, lighting, animation, rendering, music, two revision rounds and delivery in the aspect ratios you need. Building complex models from scratch or extra scenes are quoted after we see your files." },
    { question: "Do you need CAD files of our product?", answer: "CAD or existing 3D files are the fastest and most accurate route. If you do not have them, we can model from photos, dimensions or a physical sample, which adds time to the modeling stage." },
    { question: "Can we get still images from the same scenes?", answer: "Yes. Once a product is modeled and lit, extra still renders for your store, listings and ads cost far less than a photo shoot." },
    { question: "Who owns the 3D models?", answer: "You do. Final renders are yours once the project is paid, and on the Full CGI plan the reusable scene files are handed over too. On other plans we keep scenes archived so future videos cost less." },
  ],

  cta: {
    title: "Ready to show your product at its best?",
    description: "Send us your product files or plans. We will reply with a fixed price scope within one business day.",
  },
};
