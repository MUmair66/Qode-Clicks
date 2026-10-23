"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import type { ServicePageData, FormField } from "@/lib/service-page";
import { serviceJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { LeadForm } from "./LeadForm";
import { JsonLd } from "./JsonLd";
import { FaqSection } from "./FaqSection";
import { CtaBanner } from "./CtaBanner";
import { MobileStickyCta } from "./SeoMobileCta";

const field = "w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors";
const optionClass = "bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white";
const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

function slug(path: string) {
  return path.split("/").filter(Boolean).join("-");
}

function Field({ f, prefix }: { f: FormField; prefix: string }) {
  const id = `${prefix}-${f.name}`;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {f.label}{f.required ? <span className="text-cyan-600 dark:text-cyan-400"> *</span> : null}
      </label>
      {f.type === "select" ? (
        <select id={id} name={f.name} required={f.required} defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled className={optionClass}>{f.placeholder ?? "Choose one"}</option>
          {f.options?.map((o) => <option key={o} className={optionClass}>{o}</option>)}
        </select>
      ) : f.type === "textarea" ? (
        <textarea id={id} name={f.name} required={f.required} rows={3} placeholder={f.placeholder} className={field} />
      ) : (
        <input id={id} name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} className={field} />
      )}
    </div>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg">{intro}</p>
    </div>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const prefix = slug(data.path);
  const { hero, form, problems, offerings, process, pricing, tools, related } = data;

  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      <JsonLd data={serviceJsonLd({ name: data.name, description: data.meta.description, path: data.path })} />

      {/* Hero with lead form */}
      <section className="relative pt-28 pb-14 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#05070d] border-b border-slate-100 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10 mb-8">
          <Breadcrumbs items={data.hub.path === data.path ? [data.hub] : [data.hub, { name: data.name, path: data.path }]} />
        </div>
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-12 items-start relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-cyan-700 dark:text-cyan-400 font-bold text-sm mb-6 uppercase tracking-wider">{hero.eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              {hero.title}{" "}
              <span className="inline-block text-cyan-600 dark:text-cyan-400 font-serif italic pr-2">{hero.accent}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">{hero.intro}</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#quote" className="rounded-full bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition-colors text-lg">
                {hero.primaryLabel}
              </Link>
              <Link href="#pricing" className="rounded-full border-2 border-slate-200 dark:border-white/10 px-8 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-lg">
                See pricing
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{s.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} id="quote" className="scroll-mt-24">
            <div className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{form.title}</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">{form.description}</p>
              <LeadForm source={form.source} className="space-y-5 relative z-10">
                <Field prefix={prefix} f={{ name: "name", label: "Your name", type: "text", required: true, placeholder: "Your name" }} />
                <Field prefix={prefix} f={{ name: "email", label: "Work email", type: "email", required: true, placeholder: "you@company.com" }} />
                {form.fields.map((f) => <Field key={f.name} prefix={prefix} f={f} />)}
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl px-4 py-4 transition-colors mt-4 text-lg">
                  {form.submitLabel}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">{form.note}</p>
              </LeadForm>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
        <div className="mx-auto max-w-7xl">
          <SectionHead {...problems} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.items.map((p) => (
              <motion.div key={p.title} {...reveal} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 border-l-4 border-l-orange-500 rounded-r-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">{p.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <SectionHead {...offerings} />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {offerings.items.map((item) => (
              <div key={item.title} className="flex gap-4 border-b border-slate-200 dark:border-white/10 pb-8">
                <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  {item.href ? (
                    <Link href={item.href} className="mt-3 inline-flex min-h-[44px] items-center gap-1 text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
        <div className="mx-auto max-w-7xl">
          <SectionHead {...process} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.steps.map((s, i) => (
              <motion.div key={s.title} {...reveal} className="relative bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 border-t-4 border-t-cyan-500">
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-xs text-slate-500 mb-6 font-medium uppercase tracking-wider">{s.time}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow="Pricing" title={pricing.title} intro={pricing.intro} />
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.plans.map((p) => (
              <div key={p.name} className={`bg-slate-50 dark:bg-[#0a0d14] rounded-3xl p-8 flex flex-col relative ${p.popular ? "border-2 border-cyan-500 lg:scale-105 shadow-2xl z-10" : "border border-slate-200 dark:border-white/10"}`}>
                {p.popular ? (
                  <div className="absolute -top-4 left-6 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most popular</div>
                ) : null}
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{p.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 lg:min-h-[40px]">{p.target}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">{pricing.unit}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 items-start">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#quote" className={`w-full py-4 rounded-xl text-center font-bold transition-colors ${p.popular ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400" : "bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"}`}>
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools / platforms */}
      {tools ? (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] text-center">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10">{tools.title}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.items.map((t) => (
                <span key={t} className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Works well with */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3">Works well with</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{related.title}</h2>
            <p className="text-slate-500 dark:text-slate-400">{related.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.items.map((s) => (
              <div key={s.href} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-xl p-6 flex flex-col h-full">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <Link href={s.href} className="text-cyan-700 dark:text-cyan-400 font-bold text-sm hover:text-cyan-600 dark:hover:text-cyan-300 mt-auto inline-flex min-h-[44px] items-center">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={data.faqs} title={`${data.name} questions, answered`} />

      <CtaBanner
        title={data.cta.title}
        description={data.cta.description}
        primary={{ label: hero.primaryLabel, href: "#quote" }}
        secondary={{ label: "Book a call", href: "/contact#contact-form" }}
      />

      <MobileStickyCta href="#quote" label={hero.primaryLabel} />
    </div>
  );
}
