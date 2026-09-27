"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, Zap, Shield, Smartphone, Server, CheckCircle2, SplitSquareHorizontal } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";

export default function WebsiteDevelopmentParentPage() {
  const webServices = [
    {
      id: "custom-dev",
      title: "Custom Web Apps & Portals",
      description: "Enterprise-grade web applications built from scratch using React, Next.js, and Node.js. Ideal for complex workflows, customer portals, PaaS platforms, and highly scalable digital products.",
      icon: Code2,
      href: "/services/custom-development",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      features: ["Next.js & React Architecture", "Custom API Development", "SaaS & Web Portals", "Advanced Security"]
    },
    {
      id: "wordpress",
      title: "Custom WordPress Development",
      description: "Lightning-fast, highly secure WordPress themes built entirely from scratch with ZERO bloated page builders. The perfect blend of a powerful headless CMS experience and ultimate marketing flexibility.",
      icon: LayoutDashboard,
      href: "/services/custom-wordpress-development",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      features: ["No Page Builders", "Advanced Custom Fields (ACF)", "Core Web Vitals Optimized", "Technical SEO Ready"]
    }
  ];

  return (
    <div className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%)]" />
        
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 mb-6 uppercase tracking-wider">
              Web Engineering Excellence
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Websites engineered for <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 font-serif italic pr-2"
              >
                speed and scale.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We don't do templates. We engineer high-performance web experiences from the ground up—whether you need a conversion-focused WordPress platform or a complex custom web application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#architectures" className="rounded-full bg-cyan-400 px-8 py-4 text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2">
                Explore Architectures <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-200 dark:border-white/20 bg-transparent px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Discuss Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Architectures Grid */}
      <section id="architectures" className="py-24 px-5 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">OUR DISCIPLINES</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Two distinct development paths.</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Depending on your specific business requirements, we leverage the perfect tech stack to ensure your digital product performs flawlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl flex flex-col h-full"
              >
                <div className={`w-20 h-20 rounded-3xl ${service.bgColor} ${service.color} flex items-center justify-center mb-8`}>
                  <service.icon className="w-10 h-10" />
                </div>
                
                <h4 className="text-3xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-lg flex-1">
                  {service.description}
                </p>
                
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
                
                {/* Subtle background decoration */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${service.bgColor} blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guide / Methodology */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">THE ARCHITECTURE DILEMMA</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Which approach is right for you?</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Choosing the wrong tech stack is a costly mistake. If you just need a beautiful, fast marketing site that your content team can easily update, WordPress is the answer. If you are building a product with unique user dashboards, complex databases, or multi-tenant architecture, you need a Custom Web App.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <SplitSquareHorizontal className="w-8 h-8 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">We never force a solution</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">During our discovery call, our technical directors will map out your specific business requirements and recommend the architecture that provides the highest ROI without accumulating technical debt.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 border-b-2 border-cyan-400 pb-1 font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                  Speak with a Technical Director <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10" />
              <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-8">Included in every build:</h4>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold">Lightning Fast Load Times</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect Core Web Vitals guaranteed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold">Flawless Responsiveness</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Engineered pixel-perfect for every device.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold">Hardened Security</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Protection against vulnerabilities out-of-the-box.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold">Clean Code Architecture</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Scalable codebases that other developers actually want to work with.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA Section */}
      <section className="py-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10 flex items-center justify-center gap-4">
              <Code2 className="w-10 h-10 text-cyan-400" /> Ready to build your digital asset?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Whether you need a bespoke WordPress marketing site or a highly complex Next.js web application, our engineering team is ready to execute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20">
                Get a Technical Estimate
              </Link>
              <Link href="/contact" className="bg-blue-700 text-white border border-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-colors">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
