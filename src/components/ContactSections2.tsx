import { SITE, PRICING } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export function ContactOffices() {
  return (
    <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Where we work</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mb-8 leading-relaxed">
          Qode Clicks is one team working across the USA and Pakistan.
        </p>
        <div className="flex flex-wrap gap-3">
          {["USA", "Pakistan"].map((country) => (
            <span key={country} className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white">
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactDepartments() {
  const depts = [
    { title: "Existing clients", desc: "Use your shared Slack channel for anything urgent, or email us." },
    { title: "Press and speaking", desc: "Commentary, podcast and conference requests." },
    { title: "Invoices and accounts", desc: "Billing questions and remittance advice." }
  ];

  return (
    <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10">Not a new inquiry?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {depts.map((d) => (
            <div key={d.title}>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{d.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{d.desc}</p>
              <a href={`mailto:${SITE.email}`} className="text-cyan-700 dark:text-cyan-400 text-sm hover:underline">
                {SITE.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactFaqs = [
  {
    question: "Will I get a sales call or an actual answer?",
    answer: "An answer. The first reply comes from a specialist with initial thoughts on your situation, not a calendar link. If a call makes sense we will suggest one, and it runs twenty minutes with no presentation attached."
  },
  {
    question: "What if our budget is too small for you?",
    answer: `We will tell you straight away rather than putting you through a process. For paid campaigns we need roughly ${PRICING.minAdSpendMonthly.replace("/mo", "")} a month in media spend, otherwise there is not enough data to optimize. Websites have no such minimum: WordPress builds start from ${PRICING.wordpressBuild} and care plans from ${PRICING.carePlanMonthly.replace("/mo", "")} a month.`
  },
  {
    question: "How soon will we see results?",
    answer: "Paid ads usually bring first leads in 2 to 4 weeks, with cost per lead settling around weeks 4 to 6. SEO takes 3 to 6 months to compound, although technical fixes can show gains within 30 days."
  },
  {
    question: "Do I have to fill in the budget field?",
    answer: "No. Only your name, email and consent are required. The budget field just speeds things up, because the honest answer to most inquiries depends on the budget and we would otherwise have to ask."
  }
];

export function ContactFaq() {
  return (
    <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <JsonLd data={faqJsonLd(contactFaqs)} />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Before you send</h2>

        <div className="divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
          {contactFaqs.map((faq) => (
            <details key={faq.question} className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer py-6 font-semibold text-slate-900 dark:text-white">
                <span>{faq.question}</span>
                <span className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pr-8">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
