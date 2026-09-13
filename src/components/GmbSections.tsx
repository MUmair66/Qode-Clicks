"use client";

import { motion } from "framer-motion";
import { 
  MapPin, CheckCircle, Clock, Image as ImageIcon, Map, FileCode2,
  MessageSquare, Star, Tags, MessageCircle, Phone, ShieldAlert
} from "lucide-react";

export function GmbHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-28 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-200 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-6 uppercase tracking-wider">Google Business Profile, formerly GMB</p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            The listing that{" "}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 font-serif italic pr-2"
            >
              rings your phone
            </motion.span>{" "}
            not the one that looks tidy.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
            Most GMB work stops at filling in fields. We optimise for the three things Google actually ranks on, then measure it with a geo-grid so you can see visibility across your whole service area rather than from wherever you happen to be standing.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 dark:bg-slate-900 dark:bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-900 dark:text-white dark:text-slate-950 transition hover:bg-slate-800 dark:hover:bg-cyan-300">
              Get a free grid report
            </a>
            <a href="#geo" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-slate-900 dark:text-white transition hover:bg-slate-50 dark:hover:bg-white/5">
              See the geo-grid
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 pt-8 border-t border-slate-200 dark:border-white/10">
            <div>
              <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">+310%</strong>
              <span className="text-sm text-slate-500 dark:text-slate-400">Median calls from search, 6 months</span>
            </div>
            <div>
              <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">16.7 to 6.1</strong>
              <span className="text-sm text-slate-500 dark:text-slate-400">Median grid position shift</span>
            </div>
            <div>
              <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">40+</strong>
              <span className="text-sm text-slate-500 dark:text-slate-400">Profiles under management</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="quote" className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free geo-grid report</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">We run a 7 by 7 grid across your service area and send you a map showing where you rank, where you disappear, and who is beating you in each square.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">Your name</label>
              <input type="text" placeholder="Priya Raman" className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">Work email</label>
              <input type="email" placeholder="priya@company.com" className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">Business name</label>
              <input type="text" placeholder="Raman Plumbing" className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">City or service area</label>
              <input type="text" placeholder="Dallas TX, or Manchester" className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">Main search term you want to win</label>
              <input type="text" placeholder="emergency plumber, dental implants" className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">Number of locations</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white text-sm outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 appearance-none">
                <option>1 location</option>
                <option>2 to 5 locations</option>
                <option>6 to 20 locations</option>
                <option>More than 20 locations</option>
              </select>
            </div>
            <button className="w-full mt-4 bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold py-4 rounded-xl transition hover:opacity-90">
              Send me the grid report
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">Back within three working days. Yours to keep either way.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function GmbLogos() {
  const logos = ["Kestrel Health", "Miravel", "Northbeam", "Onwardly", "Verdea"];
  return (
    <div className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 flex flex-wrap items-center gap-x-12 gap-y-6">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Managing profiles for</p>
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          {logos.map(logo => (
            <span key={logo} className="font-serif text-xl font-bold tracking-tight text-slate-500">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GmbProblems() {
  const probs = [
    { title: "You rank at your own address and nowhere else", desc: "Search from the office and you are position one. Drive two miles and you vanish. Without a grid nobody notices, because everyone checks from the same place." },
    { title: "Wrong primary category", desc: "The single highest leverage field on the profile, and the one most often set to something vaguely related rather than the term people actually search." },
    { title: "Reviews have stalled", desc: "Forty reviews from three years ago reads as a business that stopped. Recency and velocity matter, not just the total and the star average." },
    { title: "Fake competitors in your map pack", desc: "Virtual offices, keyword stuffed names and lead generation listings taking positions that should be yours. They can be reported and removed." },
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">What we usually find</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Four reasons a profile looks fine and still produces nothing.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            All four show up in the free grid report, and usually more than one at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {probs.map((p, i) => (
            <div key={i} className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 ml-2">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GmbIncluded() {
  const foundations = [
    {
      icon: <CheckCircle className="w-5 h-5 text-slate-900 dark:text-white" />,
      title: "Claim, verify and secure",
      desc: "Getting ownership back where it has been lost, verified where it never was, and locked down so an ex employee or old agency cannot edit it.",
      items: ["Ownership recovery and transfer", "Video or postcard verification handled", "Duplicate listings merged or removed", "Access audited and cleaned up"],
      foot: "The most common blocker we inherit",
      color: "border-slate-900 dark:border-white",
      bg: "bg-slate-100 dark:bg-white/10"
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Categories and services",
      desc: "Primary category researched against what actually ranks for your money terms, not what sounds closest. Secondary categories chosen to widen reach without diluting relevance.",
      items: ["Competitor category analysis", "Primary and secondary category set", "Every service listed with descriptions", "Products populated where relevant"],
      foot: "Single highest leverage change on most profiles",
      color: "border-blue-600 dark:border-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10"
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Hours, attributes and details",
      desc: "Opening hours including special and holiday hours, service area definition, and every attribute Google offers for your category filled in.",
      items: ["Regular, special and holiday hours", "Service area or address strategy", "All available attributes completed", "Business description written for search"],
      foot: "Attributes appear as filters in Maps",
      color: "border-blue-600 dark:border-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10"
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Photos and video",
      desc: "Geotagged, correctly named, covering the categories Google surfaces: exterior, interior, team, work in progress and completed jobs.",
      items: ["Photo audit and gap analysis", "Shot list for you to capture", "Correct naming and metadata", "Ongoing monthly uploads"],
      foot: "Profiles with recent photos get more actions",
      color: "border-blue-600 dark:border-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10"
    },
    {
      icon: <Map className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "NAP consistency and citations",
      desc: "Name, address and phone matched across every directory that mentions you. Inconsistency is a trust problem Google notices even when customers do not.",
      items: ["Citation audit across major directories", "Inconsistencies corrected at source", "Core citations built where missing", "Data aggregator submissions"],
      foot: "Boring, unglamorous, and it matters",
      color: "border-blue-600 dark:border-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10"
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Local landing pages and schema",
      desc: "A real page on your site for each location or service area, with LocalBusiness schema matching your profile exactly. The profile and the site have to agree.",
      items: ["Location or service area pages built", "LocalBusiness and Service schema", "Embedded map and consistent NAP", "Internal linking from service pages"],
      foot: "Built by our developers, not handed to yours",
      color: "border-blue-600 dark:border-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10"
    }
  ];

  const ongoing = [
    {
      icon: <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Review generation",
      desc: "A workflow that actually gets used, built into how your team already works rather than a link nobody sends. Volume and recency both matter.",
      items: ["Request workflow via SMS or email", "QR codes and in person prompts", "Target velocity set per month", "Reporting on requests versus reviews"],
      foot: "Reviews now feed your LSA ranking too",
      color: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Review responses",
      desc: "Every review answered, including the bad ones, within a day. Responses are public and prospects read them more carefully than the reviews themselves.",
      items: ["All reviews answered within 24 hours", "Negative review response strategy", "Fake review reporting and removal", "Sentiment themes fed back to you"],
      foot: "How you answer a one star sells more than five stars",
      color: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <Tags className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Posts and offers",
      desc: "Weekly posts tied to what you actually want to sell, with tracked links so you can see which ones produced anything.",
      items: ["Weekly post schedule", "Offers, events and product posts", "UTM tagged links throughout", "Performance reviewed monthly"],
      foot: "Posts expire, so this genuinely has to be ongoing",
      color: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Questions and answers",
      desc: "The most ignored section on the profile. We seed the questions customers actually ask, answer them properly, and monitor for anyone else answering wrongly.",
      items: ["Question set seeded from real enquiries", "Answers written and upvoted", "Monitoring for competitor interference", "Monthly review of new questions"],
      foot: "Anyone can answer. Often they answer badly",
      color: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Calls, messaging and booking",
      desc: "Call tracking that does not break your NAP consistency, messaging enabled and monitored, and booking links wired to your actual calendar.",
      items: ["Call tracking with correct configuration", "Messaging enabled and response monitored", "Booking and appointment links", "Call recording and quality review"],
      foot: "Half of local leads never visit the website",
      color: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
      title: "Spam fighting",
      desc: "Reporting fake listings, virtual offices, keyword stuffed business names and lead generation companies occupying positions that belong to real businesses.",
      items: ["Competitor listing audit", "Redressal forms filed and tracked", "Keyword stuffed names reported", "Escalation where reports are ignored"],
      foot: "Often the fastest way into the top three",
      color: "border-rose-500",
      bg: "bg-rose-50 dark:bg-rose-500/10"
    }
  ];

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#05070d]" id="included">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Twelve things, split into setup and the part that never stops.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            The foundations are a one time job done properly. Everything in the second group is the ongoing work that actually moves you up the grid.
          </p>
        </div>

        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 tracking-wide">Foundations, done once and done right</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {foundations.map((c, i) => (
            <div key={i} className={`bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col border-t-4 ${c.color} transition hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${c.bg}`}>
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{c.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{c.desc}</p>
              <ul className="space-y-3 mb-8">
                {c.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
                {c.foot}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 tracking-wide mt-24">Ongoing, because the map pack rewards activity</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoing.map((c, i) => (
            <div key={i} className={`bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col border-t-4 ${c.color} transition hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${c.bg}`}>
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{c.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{c.desc}</p>
              <ul className="space-y-3 mb-8">
                {c.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
                {c.foot}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
