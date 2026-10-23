"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, Zap, Shield, Smartphone, Server, CheckCircle2, SplitSquareHorizontal, ShoppingBag, ShoppingCart, RefreshCw, Wrench, Bug, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/site";

const webServices = [
  {
    id: "custom-dev",
    title: "Custom Web Apps and Portals",
    description: `Web applications built on React, Next.js and Node.js: dashboards, client portals, internal tools, SaaS products and API integrations. Projects start from ${PRICING.customWebApp}.`,
    icon: Code2,
    href: "/website-development/custom-web-apps",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10",
    features: ["Next.js and React architecture", "Custom API development and integrations", "SaaS products and client portals", "Security reviewed before every release"],
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: `Fast, secure WordPress sites your team can edit without a developer. Choose a template kit build from ${PRICING.wordpressBuild}, a premium theme, a fully custom theme from ${PRICING.wordpressCustom} or headless WordPress.`,
    icon: LayoutDashboard,
    href: "/website-development/wordpress",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10",
    features: ["Template, theme or fully custom builds", "Advanced Custom Fields (ACF) blocks", "Built to pass Core Web Vitals", "Technical SEO ready"],
  },
];

const moreServices = [
  { title: "Shopify Development", desc: `Store setup, custom Online Store 2.0 themes, migrations and app integrations. Theme builds from ${PRICING.shopifyBuild}.`, icon: ShoppingBag, href: "/website-development/shopify" },
  { title: "E-commerce Websites", desc: `Online stores on Shopify, WooCommerce or headless, with payments, shipping and tracking done properly. WooCommerce from ${PRICING.wooCommerce}.`, icon: ShoppingCart, href: "/website-development/ecommerce-website" },
  { title: "Website Redesign", desc: `A modern, faster site without losing the rankings and content you already have. Redesigns from ${PRICING.redesign}.`, icon: RefreshCw, href: "/website-development/website-redesign" },
  { title: "Website Maintenance", desc: `Updates, backups, security monitoring and small changes handled every month. Care plans from ${PRICING.carePlanMonthly}.`, icon: Wrench, href: "/website-development/website-maintenance" },
  { title: "QA and Test Automation", desc: `Manual testing across browsers and devices, plus Playwright and Cypress automation in your CI. QA audits from ${PRICING.qaAudit}.`, icon: Bug, href: "/website-development/qa-testing" },
  { title: "Not sure what you need?", desc: "Tell us what the site has to do and we will recommend the simplest option that gets you there.", icon: MessageCircle, href: "/contact#contact-form" },
];

const included = [
  { icon: Zap, title: "Fast load times", desc: "Built to pass Core Web Vitals. We target 90+ Lighthouse performance." },
  { icon: Smartphone, title: "Mobile first", desc: "Designed and tested on real phones and tablets, not just a resized browser." },
  { icon: Shield, title: "Security hardening", desc: "Sensible permissions, login protection and dependencies kept up to date." },
  { icon: Server, title: "Clean, documented code", desc: "Codebases other developers can pick up and extend without starting over." },
];

export function WebDevHubContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-14 lg:pt-28 lg:pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />

        <div className="mx-auto max-w-4xl text-center">
          <Breadcrumbs items={[{ name: "Website Development", path: "/website-development" }]} className="mb-6 flex justify-center" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
              Website Development
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Websites built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 font-serif italic pr-2">
                speed and growth.
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              From conversion-focused WordPress sites to custom web applications, we build fast, secure websites that your team can run and your customers enjoy using.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#architectures" className="rounded-full bg-cyan-500 dark:bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 dark:hover:bg-white transition-colors flex items-center gap-2">
                Compare Options <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Discuss Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="architectures" className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Our services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Everything your website needs.</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              The right choice depends on what the site needs to do. We recommend the simplest option that meets your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 sm:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl flex flex-col h-full"
              >
                <div className={`w-20 h-20 rounded-3xl ${service.bgColor} ${service.color} flex items-center justify-center mb-8`}>
                  <service.icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-lg flex-1">{service.description}</p>

                <div className="space-y-4 mb-12">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-base font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href={service.href} className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 py-4 px-6 rounded-2xl text-sm font-bold text-slate-900 dark:text-white group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors w-full">
                  Explore {service.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm hover:border-cyan-500/30 hover:shadow-xl transition-all"
              >
                <span className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7" />
                </span>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">{service.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 dark:text-cyan-400">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Choosing an approach</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Which approach is right for you?</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                If you need a fast marketing site that your team can update easily, WordPress is usually the answer. If you are building a product with user accounts, dashboards, complex data or multiple customers on one platform, you need a custom web app.
              </p>

              <div className="flex gap-4">
                <SplitSquareHorizontal className="w-8 h-8 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">We never force a solution</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    On the discovery call we map out your requirements and recommend the option with the best return, without building more than you need.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Talk to a developer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10" />
              <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-8">Included in every build:</h3>
                <div className="space-y-6">
                  {included.map((item) => (
                    <div key={item.title} className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
