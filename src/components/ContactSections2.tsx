"use client";

import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function ContactTeam() {
  const team = [
    { inits: "AR", bg: "bg-blue-600", name: "Amina Rahim", role: "Head of performance", desc: "Takes paid media and analytics enquiries. Nine years running Google Ads and Meta accounts." },
    { inits: "TK", bg: "bg-slate-700", name: "Tom Keller", role: "Technical director", desc: "Takes development, migration and performance enquiries. Will tell you when a rebuild is not the answer." },
    { inits: "SM", bg: "bg-emerald-600", name: "Sana Malik", role: "Head of SEO and content", desc: "Takes organic search enquiries, including recovery work after a traffic drop." }
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Who you will speak to
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
            The same people who would run your account. We do not have a separate sales team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((t, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-slate-900 dark:text-white font-bold text-sm tracking-tight shrink-0`}>
                {t.inits}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{t.name}</h3>
                <p className="text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-2">{t.role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactOffices() {
  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10">Where we are</h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="border-t border-slate-200 dark:border-white/10 pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">United States</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frisco, Texas</h3>
              </div>
              <a href="https://maps.google.com/?q=2500+Legacy+Drive+Frisco+TX" target="_blank" rel="noopener" className="text-cyan-700 dark:text-cyan-400 text-sm hover:underline">
                Map
              </a>
            </div>
            <address className="not-italic text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
              2500 Legacy Drive, Suite 220<br/>
              Frisco, TX 75034<br/>
            </address>
            <p className="text-slate-500 text-sm">Client services and new business</p>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10 pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Pakistan</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lahore</h3>
              </div>
              <a href="https://maps.google.com/?q=Arfa+Software+Technology+Park+Lahore" target="_blank" rel="noopener" className="text-cyan-700 dark:text-cyan-400 text-sm hover:underline">
                Map
              </a>
            </div>
            <address className="not-italic text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Arfa Software Technology Park<br/>
              Ferozepur Road, Lahore 54600<br/>
            </address>
            <p className="text-slate-500 text-sm">Delivery, development and media buying</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactDepartments() {
  const depts = [
    { title: "Existing clients", desc: "Use your shared Slack channel for anything urgent.", email: "support@qodeclicks.com" },
    { title: "Careers", desc: "Open roles are listed on the careers page.", email: "careers@qodeclicks.com" },
    { title: "Press and speaking", desc: "Commentary, podcast and conference requests.", email: "press@qodeclicks.com" },
    { title: "Invoices and accounts", desc: "Billing questions and remittance advice.", email: "accounts@qodeclicks.com" }
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10">Not a new enquiry?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {depts.map((d, i) => (
            <div key={i}>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{d.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{d.desc}</p>
              <a href={`mailto:${d.email}`} className="text-cyan-700 dark:text-cyan-400 text-sm hover:underline">
                {d.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFaq() {
  const faqs = [
    {
      q: "Will I get a sales call or an actual answer?",
      a: "An answer. The first reply comes from a specialist with initial thoughts on your situation, not a calendar link. If a call makes sense we will suggest one, and it runs twenty minutes with no presentation attached."
    },
    {
      q: "What if our budget is too small for you?",
      a: "We will tell you straight away rather than putting you through a process. Below roughly $3,000 a month on media, or $6,500 for a build, we are not the right fit and we will usually point you toward a freelancer or a fixed scope project instead."
    },
    {
      q: "Do I have to fill in the budget field?",
      a: "No, nothing in the form is required except a way to reach you and the message. It just speeds things up, because the honest answer to most enquiries depends on the budget and we would otherwise have to ask."
    }
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Before you send</h2>

        <div className="divide-y divide-white/10 border-y border-slate-200 dark:border-white/10">
          {faqs.map((faq, i) => {
            // Internal state for simple FAQ toggle if needed, or use details
            return (
              <details key={i} className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer py-6 font-semibold text-slate-900 dark:text-white">
                  <span>{faq.q}</span>
                  <span className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pr-8">
                  {faq.a}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
