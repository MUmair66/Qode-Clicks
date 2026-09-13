"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

export function ContactHero() {
  return (
    <section className="pt-28 pb-10 lg:pt-28 lg:pb-16 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Tell us what is not working. <span className="text-cyan-400">We will be honest</span> about it.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Every enquiry goes to a specialist, not a sales rep working from a script. If we are not the right fit for the problem, we will say so and point you somewhere better.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Replying within one working day
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactMain() {
  const [btnText, setBtnText] = useState("Send enquiry");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBtnText("Sent. We will reply within one working day.");
    setDisabled(true);
  };

  return (
    <section className="pb-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]" id="form">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-start border-t border-slate-100 dark:border-white/5 pt-16">
        
        {/* Form Area - Simplified, no heavy box */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Send us the details</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed max-w-xl">
            The more you tell us, the more specific the reply. Everything except the message is optional if you would rather keep it short.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Your name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Priya Raman" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Work email</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="priya@company.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Website</label>
                <input type="url" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Phone <span className="text-slate-500 font-normal ml-1">optional</span></label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="+1 555 0100" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">What do you need</label>
                <select className="w-full bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Not sure yet, want the audit first</option>
                  <option>Google Ads</option>
                  <option>SEO</option>
                  <option>Paid social</option>
                  <option>Conversion rate optimization</option>
                  <option>WordPress development</option>
                  <option>WooCommerce build</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Monthly budget / project size</label>
                <select className="w-full bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Under $3,000 per month</option>
                  <option>$3,000 to $10,000 per month</option>
                  <option>$10,000 to $50,000 per month</option>
                  <option>Over $50,000 per month</option>
                  <option>One off project under $10,000</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">When do you want to start</label>
              <select className="w-full bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors">
                <option>As soon as possible</option>
                <option>Within the next month</option>
                <option>In the next quarter</option>
                <option>Just researching for now</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">What is the problem you want solved</label>
              <textarea className="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors min-h-[140px]" placeholder="Leads have been flat for six months. We spend around $8,000 on Google Ads and cannot tell which campaigns are producing anything..."></textarea>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group mt-4">
              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-cyan-400 focus:ring-cyan-400" />
              <span className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                I agree to Qode Clicks contacting me about this enquiry. Read our <Link href="/#contact" className="text-cyan-400 hover:underline">privacy policy</Link>.
              </span>
            </label>

            <div className="pt-4">
              <button type="submit" disabled={disabled} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-white/10 disabled:text-slate-500 text-slate-900 dark:text-white font-semibold rounded-full px-8 py-3.5 transition-colors">
                {btnText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar - Clean list without boxes */}
        <div className="space-y-12">
          
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Reach us directly</h3>
            <div className="space-y-6">
              <a href="mailto:hello@qodeclicks.com" className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <b className="block text-slate-900 dark:text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">hello@qodeclicks.com</b>
                  <span className="text-sm text-slate-500 dark:text-slate-400">New business and general enquiries</span>
                </div>
              </a>
              <a href="tel:+13125550188" className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <b className="block text-slate-900 dark:text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">+1 312 555 0188</b>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Mon to Fri, 9am to 6pm CT</span>
                </div>
              </a>
              <Link href="/#contact" className="flex items-start gap-4 group">
                <Calendar className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <b className="block text-slate-900 dark:text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">Book a 20 minute call</b>
                  <span className="text-sm text-slate-500 dark:text-slate-400">No deck, no discovery script</span>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">When we are available</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Monday to Friday</span>
                <b className="text-slate-900 dark:text-white font-medium">9am to 6pm</b>
              </li>
              <li className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Saturday & Sunday</span>
                <b className="text-slate-900 dark:text-white font-medium">Closed</b>
              </li>
              <li className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>US overlap</span>
                <b className="text-slate-900 dark:text-white font-medium">8am to 12pm CT</b>
              </li>
              <li className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>UK overlap</span>
                <b className="text-slate-900 dark:text-white font-medium">9am to 2pm GMT</b>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-2xl p-6 border border-slate-100 dark:border-white/5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Rather see the work first?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Three case studies with the numbers before and after, including what didn't go to plan.
            </p>
            <Link href="/#projects" className="text-cyan-400 text-sm font-semibold hover:underline">
              Read case studies &rarr;
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export function ContactSteps() {
  const steps = [
    { t: "1 working day", title: "A specialist replies", desc: "Whoever knows your problem best, with first thoughts." },
    { t: "Day 2-3", title: "Twenty minute call", desc: "We ask what we need to understand the account. No pitch." },
    { t: "5 working days", title: "You get the audit", desc: "Written findings on what is broken and how to fix it." },
    { t: "If it fits", title: "Scope and number", desc: "Fixed figure, written scope, or an honest no." }
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Four steps. No sales calls.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-sm">
            What happens after you submit the form. We respect your time and skip the standard agency discovery script.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="pl-6 border-l border-slate-200 dark:border-white/10 relative">
              <div className="absolute top-0 left-0 w-1 h-8 bg-cyan-500 -translate-x-[1px]" />
              <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-wider">{s.t}</p>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
