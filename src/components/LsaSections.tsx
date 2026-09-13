"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export function LsaHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-28 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-blue-500 font-bold text-sm mb-6 uppercase tracking-wider">Local Services Ads and Google Verified</p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            The listing that sits{" "}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
            >
              above every other ad
            </motion.span>{" "}
            on Google.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
            Local Services Ads appear at the top of Google Search, above standard Google Ads and above the map pack, carrying a Google verification badge. You pay per lead rather than per click, so a click that never becomes a call costs you nothing. Available in the US and UK for eligible categories only.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="#quote" className="rounded-full bg-blue-600 px-8 py-4 text-slate-900 dark:text-white font-bold hover:bg-blue-700 transition-colors text-lg">
              Check my eligibility
            </Link>
            <Link href="#badges" className="rounded-full bg-transparent border-2 border-slate-200 dark:border-white/10 px-8 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-lg">
              About the badge
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24 hrs</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Eligibility answer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2 to 6 wks</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Typical verification time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Weekly</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Bad lead disputes filed</div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="quote">
          <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 p-8 lg:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Check your eligibility</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              Tell us your trade and your city. We confirm within a day whether your category is covered in your market, which badge applies and what Google will ask for.
            </p>
            
            <form className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Your name</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Priya Raman" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Work email</label>
                <input type="email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="priya@company.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Business name</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Raman Plumbing" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Market</label>
                <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">United States</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">United Kingdom</option>
                  <option className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">Both US and UK</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Trade or category</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Plumber, family lawyer, dentist" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">City or service area</label>
                <input type="text" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Dallas TX, or Manchester" />
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold rounded-xl px-4 py-4 transition-colors mt-4 text-lg">
                Check my eligibility
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">No setup fee if your category is not covered. We will tell you straight away.</p>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function LsaReasons() {
  const reasons = [
    { title: "You pay per lead, not per click", desc: "A click that browses and leaves costs nothing. You are charged when someone calls, messages or books, which changes the maths entirely." },
    { title: "Placement above everything", desc: "Local Services Ads sit above standard Google Ads and above the map pack. On mobile that is most of the first screen." },
    { title: "A Google verification badge", desc: "Your listing shows that Google has checked your business. For a first time customer choosing between strangers, that badge does real work." },
    { title: "Bad leads are disputable", desc: "Spam, wrong number, out of area and wrong service leads can be credited back. Most businesses never claim them." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">Why it matters</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Four things that make this different from normal paid search.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 border-l-4 border-l-emerald-500 rounded-r-2xl p-6 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors shadow-lg">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">{r.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LsaBadges() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]" id="badges">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
          
          <p className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4">The badge</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight max-w-2xl">
            What happened to Google Guaranteed.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-16 max-w-3xl leading-relaxed">
            If you have been told you can get "Google Guaranteed" in the United States, that information is out of date. In October 2025 Google consolidated Google Guaranteed, Google Screened and License Verified into a single Google Verified badge, and the money back guarantee that previously sat behind Google Guaranteed was discontinued at the same time.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-[#11131a] border border-slate-100 dark:border-white/5 rounded-2xl p-8">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4 block">United States</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Google Verified</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                One badge across all categories, replacing the three that existed before. It appears on your Local Services Ad and on your Google Business Profile, alongside details of the specific checks your business passed.
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-[#1a2133] border border-blue-200 dark:border-blue-900/50 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold mb-6">
                <span className="w-4 h-4 rounded-full bg-blue-500 text-slate-900 dark:text-white flex items-center justify-center text-[10px]">✓</span>
                Google Verified
              </div>
              <ul className="space-y-3">
                {["Single badge across all eligible categories", "Shows which verification checks you passed", "Requirements vary by category and location", "May include identity, background, licence and insurance checks", "Reviews route through your Google Business Profile", "No money back guarantee attached any more"].map((item, j) => (
                  <li key={j} className="text-slate-500 dark:text-slate-400 text-sm flex gap-2 border-t border-slate-100 dark:border-white/5 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#11131a] border border-slate-100 dark:border-white/5 rounded-2xl p-8">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4 block">United Kingdom</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Google Guaranteed and Screened</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Google's UK marketing pages still display the older badges. Home services carry Google Guaranteed, legal and property carry Google Screened. UK setup documentation already references Google Verified, so the UK appears to be part way through the same transition.
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-[#1a2133] border border-blue-200 dark:border-blue-900/50 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold mb-6">
                <span className="w-4 h-4 rounded-full bg-blue-500 text-slate-900 dark:text-white flex items-center justify-center text-[10px]">✓</span>
                Google Guaranteed
              </div>
              <ul className="space-y-3">
                {["Home services show the Google Guaranteed badge", "Legal and estate agency show Google Screened", "Licence, insurance and Companies House checks required", "Third party background check required", "Far fewer eligible categories than the US", "Naming likely to change as the rollout completes"].map((item, j) => (
                  <li key={j} className="text-slate-500 dark:text-slate-400 text-sm flex gap-2 border-t border-slate-100 dark:border-white/5 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#11131a] border-l-4 border-l-cyan-400 rounded-xl p-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Why we are explicit about this.</strong> Most agency websites still sell "Google Guaranteed" in markets where that badge no longer exists, which tells you how recently they checked. We confirm the current badge and requirements for your specific market at the eligibility stage rather than quoting from an old page. Verified against Google's own documentation in September 2026.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
