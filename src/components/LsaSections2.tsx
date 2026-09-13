"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export function LsaEligibility() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]" id="eligibility">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">Eligibility</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Google decides by category and location, and the list changes.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            The US covers eight category groups. The UK currently covers two. Some US categories are further restricted to particular states, so the honest answer always depends on your exact trade and area.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">United States, eight groups</h3>
            <p className="text-slate-500 text-sm mb-6">Home, Business, Health, Learning, Care, Wellness, Beauty, Automotive</p>
            <div className="flex flex-wrap gap-2">
              {["Plumber", "Electrician", "HVAC", "Roofing", "Locksmith", "Garage door", "Pest control", "House cleaning", "Landscaper", "Moving services", "Water damage", "Junk removal", "Personal injury lawyer", "Family lawyer", "Immigration lawyer", "Real estate agent", "Financial planner", "Tax specialist", "Dentist", "Dermatologist", "Optometrist", "Physical therapist", "Primary care", "Tutor", "Preschool", "Driving instructor", "Child care", "Veterinarian", "Pet grooming", "Yoga studio", "Personal trainer", "Acupuncturist", "Hair salon", "Barber shop", "Nail salon", "Auto repair", "Tire shop", "Towing"].map((t, i) => (
                <span key={i} className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md px-2.5 py-1.5">{t}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">United Kingdom, two groups</h3>
            <p className="text-slate-500 text-sm mb-6">Home services and Business services only</p>
            <div className="flex flex-wrap gap-2">
              {["Plumbing", "Electrical", "HVAC", "Roofing", "Carpentry", "Flooring", "Fencing", "Garage door", "General contracting", "Handyman", "Home improvement", "House cleaning", "Carpet cleaning", "Window cleaning", "Pest control", "Landscaping", "Lawn care", "Tree surgeon", "Snow removal", "Moving", "Junk removal", "Water damage", "Appliance repair", "Pool cleaning", "Estate agents", "Personal injury lawyer", "Family lawyer", "Immigration lawyer", "Property lawyer", "Employment lawyer", "Criminal lawyer", "Tax lawyer"].map((t, i) => (
                <span key={i} className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md px-2.5 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-slate-500 mt-8 max-w-4xl">
          Not exhaustive. Beauty and Automotive groups plus several US home services sub categories have had state level restrictions. Send us your trade and city and we will give you the current answer rather than a general one.
        </p>
      </div>
    </section>
  );
}

export function LsaBanner() {
  return (
    <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-500/30 rounded-3xl p-10 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <p className="text-emerald-400 font-bold text-sm mb-4 uppercase tracking-wider">24 hour answer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Find out if your category is covered before you spend anything.
            </h2>
            <p className="text-emerald-100/80 mb-6 leading-relaxed">
              Tell us your trade and your city. We confirm whether the category exists in your market, which badge applies there, what documents Google will ask for, and roughly what a lead costs in your area. If you are not eligible we say so immediately and there is no setup fee.
            </p>
            <ul className="flex flex-wrap gap-4 text-emerald-200 text-sm font-semibold">
              <li>✓ Answer in 24 hours</li>
              <li>✓ Lead cost range for your area</li>
              <li>✓ Full document list upfront</li>
              <li>✓ No fee if ineligible</li>
            </ul>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4 w-full lg:w-auto min-w-[250px]">
            <Link href="#quote" className="bg-emerald-50 text-emerald-900 dark:bg-white dark:text-emerald-900 font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-50 transition-colors">
              Check my eligibility
            </Link>
            <Link href="#pricing" className="bg-transparent text-emerald-100 border-2 border-emerald-500/50 font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-900/50 transition-colors">
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LsaProcess() {
  const steps = [
    { num: 1, title: "Eligibility check", desc: "Category, service area and applicable badge confirmed for your market before you spend anything." },
    { num: 2, title: "Document pack", desc: "Licence, insurance certificate, business registration and identity documents assembled and submitted correctly first time." },
    { num: 3, title: "Screening", desc: "Background and business checks run through Google's third party provider. We chase it, you do not." },
    { num: 4, title: "Profile build", desc: "Services, service areas, hours, photos, booking and messaging configured, and your Business Profile brought up to standard." },
    { num: 5, title: "Live and managed", desc: "Budget pacing, weekly lead disputes, response time monitored, review generation kept running." },
  ];
  
  const rankings = [
    { title: "Proximity", desc: "How close you are to the searcher. The one factor you cannot optimise, which is why service area strategy matters so much." },
    { title: "Reviews", desc: "Score and volume, now pulled from your Google Business Profile rather than a separate LSA review system." },
    { title: "Responsiveness", desc: "How fast you answer and how often you miss calls. This is an operational problem, not a marketing one." },
    { title: "Business hours", desc: "You will not show outside the hours you set, and emergency categories reward wider availability." },
    { title: "Complaints", desc: "Complaints registered against your business reduce visibility and can suspend the account entirely." },
    { title: "Budget pacing", desc: "Running out mid month removes you from the auction during the days you most wanted to be in it." },
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]" id="process">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 dark:border-white/10 shadow-xl">
          <p className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4">Verification</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Getting you verified and live.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl leading-relaxed mb-16">
            Verification is the part that stalls most applications, usually because documents go in wrong or incomplete and the whole thing restarts. We assemble the pack upfront and chase the process so you do not have to.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-slate-200 dark:border-white/10 pt-10 mb-20">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="absolute -top-[47px] left-0 w-3 h-3 rounded-full bg-cyan-400" />
                <p className="text-cyan-400 text-xs font-bold mb-2">Step {s.num}</p>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">What actually decides your ranking</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {rankings.map((r, i) => (
              <div key={i} className="bg-white dark:bg-[#11131a] border border-slate-100 dark:border-white/5 rounded-2xl p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{r.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Two operational changes worth knowing</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#11131a] border border-slate-100 dark:border-white/5 rounded-2xl p-8">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-3 block">From 1 October 2026</span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Missed calls become billable</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Google's updated call policy makes some missed calls and qualifying follow up calls billable. Answering the phone is now a direct cost control measure as well as a ranking factor. We include call handling recommendations in every engagement because of this.
              </p>
            </div>
            <div className="bg-white dark:bg-[#11131a] border border-slate-100 dark:border-white/5 rounded-2xl p-8">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-3 block">Since mid 2025</span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Reviews come from your Business Profile</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                There is no separate LSA review system any more. Your Google Business Profile reviews are your LSA reviews, which means review generation and profile management are now part of the same job rather than two.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LsaCompare() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]" id="compare">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">Comparison</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Local Services Ads or standard Google Ads.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Most eligible clients end up running both. LSAs capture the top of the page for the queries they serve, Search covers everything else.
          </p>
        </div>
        
        <div className="overflow-x-auto bg-slate-50 dark:bg-[#0a0d14] rounded-2xl border border-slate-200 dark:border-white/10 mt-10">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="p-6 font-semibold text-slate-500 dark:text-slate-400 text-sm"></th>
                <th className="p-6 font-bold text-slate-900 dark:text-white bg-blue-900/20">Local Services Ads</th>
                <th className="p-6 font-bold text-slate-900 dark:text-white">Standard Google Ads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">You pay for</td>
                <td className="p-6 text-emerald-400 font-bold bg-blue-900/10">Leads, calls and messages</td>
                <td className="p-6 text-slate-500 dark:text-slate-400">Clicks</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Position on the page</td>
                <td className="p-6 text-emerald-400 font-bold bg-blue-900/10">Above search ads and the map pack</td>
                <td className="p-6 text-slate-500 dark:text-slate-400">Below Local Services Ads</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Who can use it</td>
                <td className="p-6 text-slate-500 bg-blue-900/10">Eligible categories only, US and UK</td>
                <td className="p-6 text-emerald-400 font-bold">Any business, any market</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Verification required</td>
                <td className="p-6 text-slate-600 dark:text-slate-300 bg-blue-900/10">Yes, including background and licence checks</td>
                <td className="p-6 text-emerald-400 font-bold">None</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Trust badge</td>
                <td className="p-6 text-emerald-400 font-bold bg-blue-900/10">Google Verified, or Guaranteed and Screened in the UK</td>
                <td className="p-6 text-slate-500">None</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Keyword control</td>
                <td className="p-6 text-slate-500 bg-blue-900/10">None, Google matches by category</td>
                <td className="p-6 text-emerald-400 font-bold">Full control</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Landing page</td>
                <td className="p-6 text-slate-500 bg-blue-900/10">Your Google profile, not your site</td>
                <td className="p-6 text-emerald-400 font-bold">Any page you choose</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Bad leads</td>
                <td className="p-6 text-emerald-400 font-bold bg-blue-900/10">Disputable for a credit</td>
                <td className="p-6 text-slate-500">Paid for regardless</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Setup time</td>
                <td className="p-6 text-slate-600 dark:text-slate-300 bg-blue-900/10">2 to 6 weeks including verification</td>
                <td className="p-6 text-emerald-400 font-bold">Days</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                <td className="p-6 font-semibold text-slate-900 dark:text-white">Best used for</td>
                <td className="p-6 text-slate-600 dark:text-slate-300 bg-blue-900/10">Urgent local service demand</td>
                <td className="p-6 text-slate-600 dark:text-slate-300">Everything else, including non local and ecommerce</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-6">
          One thing people assume wrongly: Local Services Ads appear on Google Search, not inside Google Maps. Advertising on the map itself runs through location assets and store goal campaigns, which is covered on the <Link href="/services/google-ads" className="text-blue-400 hover:underline">Google Ads page</Link>.
        </p>
      </div>
    </section>
  );
}

export function LsaPricing() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-500 font-semibold text-sm mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Setup once, then managed monthly.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Your lead budget is paid directly to Google on your own account. We never mark it up or take commission on it.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Setup Only */}
          <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col border border-slate-200 dark:border-white/10">
            <div className="h-7 mb-4"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Setup only</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 h-10">We get you verified and live, then hand it over for you to run yourself.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">$650</span>
              <span className="text-slate-500 text-sm ml-2">one off</span>
            </div>
            
            <div className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs py-2 px-4 rounded-lg mb-8">
              No fee at all if your category turns out to be ineligible
            </div>
            
            <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">Includes</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Eligibility and category mapping", "Full document pack assembled", "Screening and verification chased", "Profile, services and service areas built", "Booking and messaging configured", "Handover call and written guide"].map((feat, j) => (
                <li key={j} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 items-start">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#quote" className="w-full py-4 rounded-xl text-center font-bold transition-colors bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10">
              Get started
            </Link>
          </div>

          {/* Managed */}
          <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col border-2 border-blue-500 scale-105 shadow-2xl relative z-10">
            <div className="absolute -top-4 left-6 bg-blue-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most clients</div>
            <div className="h-7 mb-4"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Managed</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 h-10">Setup included, then run monthly with disputes filed and reviews kept coming.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">$900</span>
              <span className="text-slate-500 text-sm ml-2">per month</span>
            </div>
            
            <div className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs py-2 px-4 rounded-lg mb-8">
              Lead budget up to $8,000 per month, setup fee waived
            </div>
            
            <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">Includes</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Everything in Setup only", "Budget pacing and bid management", "Weekly bad lead disputes filed", "Google Business Profile optimisation", "Review generation workflow", "Dashboard and monthly review call"].map((feat, j) => (
                <li key={j} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 items-start">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className={j === 0 ? "font-semibold text-slate-800 dark:text-slate-200" : ""}>{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#quote" className="w-full py-4 rounded-xl text-center font-bold transition-colors bg-blue-600 text-slate-900 dark:text-white hover:bg-blue-500">
              Request a proposal
            </Link>
          </div>

          {/* Multi location */}
          <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col border border-slate-200 dark:border-white/10">
            <div className="h-7 mb-4"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Multi location</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 h-10">Separate accounts per market, for franchises and multi site operators.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">From $2,400</span>
              <span className="text-slate-500 text-sm ml-2">per month</span>
            </div>
            
            <div className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs py-2 px-4 rounded-lg mb-8">
              Covers up to 10 locations, then $180 per additional location
            </div>
            
            <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">Everything in Managed, plus</div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Separate LSA account per market", "Verification managed per location", "Service area strategy across locations", "Location level budgets and reporting", "Call handling and response monitoring", "Fortnightly review calls"].map((feat, j) => (
                <li key={j} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 items-start">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#quote" className="w-full py-4 rounded-xl text-center font-bold transition-colors bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10">
              Talk to us
            </Link>
          </div>
        </div>
        
        <p className="text-sm text-slate-500 mt-10">
          Running standard Google Ads too? Take the combined retainer on the <Link href="/services/google-ads" className="text-blue-400 hover:underline">Google Ads page</Link> instead of paying for both separately. Three month minimum, then rolling with thirty days notice.
        </p>
      </div>
    </section>
  );
}

export function LsaResult() {
  return (
    <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-blue-500 font-semibold text-sm mb-2">Result</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Kestrel Health, nine clinics.</h2>
        </div>
        
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-10 lg:p-12 border border-slate-200 dark:border-white/10 grid lg:grid-cols-2 gap-12 items-center shadow-xl">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 block">Healthcare, multi location, US</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Verified in six markets, paying per booking instead of per click</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Nine clinics, six of them in markets where the category was eligible. We ran verification for each location separately, split the service areas so they stopped competing, and rebuilt the phone handling because response time was the actual constraint on ranking.
            </p>
            <Link href="#casestudies" className="inline-flex rounded-full border-2 border-slate-300 dark:border-white/20 px-6 py-3 font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
              Read the full case study
            </Link>
          </div>
          
          <div className="grid gap-4">
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-5 flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Cost per booked visit</span>
              <div className="flex gap-4 items-center">
                <span className="text-slate-500 line-through text-sm">$184</span>
                <span className="text-emerald-400 font-bold text-xl">$71</span>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-5 flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Lead response time</span>
              <div className="flex gap-4 items-center">
                <span className="text-slate-500 line-through text-sm">6 hrs</span>
                <span className="text-emerald-400 font-bold text-xl">11 min</span>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-5 flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Leads credited back monthly</span>
              <div className="flex gap-4 items-center">
                <span className="text-slate-500 line-through text-sm">0</span>
                <span className="text-emerald-400 font-bold text-xl">14%</span>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-5 flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Locations verified</span>
              <div className="flex gap-4 items-center">
                <span className="text-slate-500 line-through text-sm">0</span>
                <span className="text-emerald-400 font-bold text-xl">6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LsaWorksWellWith() {
  const rel = [
    { title: "Google Ads", desc: "Covers the queries LSAs do not serve, plus Maps and Performance Max.", link: "/services/google-ads" },
    { title: "Local SEO", desc: "Ranking in the map pack is the organic equivalent of LSAs.", link: "/services/seo" },
    { title: "Conversion rate", desc: "For the clicks that land on your site instead of your profile.", link: "/services/cro" },
    { title: "WordPress builds", desc: "Fast, custom builds that pass Core Web Vitals.", link: "/services/custom-wordpress-development" },
    { title: "Analytics", desc: "Clean attribution so you know which channel drove the sale.", link: "/services/analytics" }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-blue-500 font-semibold text-sm mb-3">Works well with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What we run alongside Local Services Ads.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {rel.map((s, i) => (
            <Link key={i} href={s.link} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-xl p-6 flex flex-col h-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors shadow-lg group">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <span className="text-blue-400 font-bold text-sm group-hover:text-blue-300 mt-auto inline-flex items-center">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
