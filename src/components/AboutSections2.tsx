"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Award, Briefcase, Globe, Star } from "lucide-react";

export function AboutTeam() {
  const team = [
    { name: "Julian Carter", role: "Founder & Technical Director", desc: "10+ years in full-stack development and technical SEO. Leads the engineering team." },
    { name: "Priya Raman", role: "Head of Paid Media", desc: "Manages a portfolio of $4M+ in annual ad spend across Search, Shopping, and LSA." },
    { name: "Marcus Thorne", role: "Lead SEO Strategist", desc: "Specializes in enterprise content strategy and international technical SEO." },
    { name: "Elena Rostova", role: "Senior UI/UX Designer", desc: "Turns conversion data into high-performing, accessible, and beautiful interfaces." }
  ];

  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm mb-3 uppercase tracking-wider">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Led by practitioners, not salespeople.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            When you partner with us, your strategy is built and executed by senior specialists who have spent years mastering their craft.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#0a0d14] border border-slate-100 dark:border-white/5 rounded-2xl p-6 hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors group shadow-lg">
              <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 group-hover:scale-105 transition-transform"></div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</h3>
              <p className="text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-4">{t.role}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutLocations() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative z-10">
            <p className="text-blue-500 font-bold text-xs uppercase tracking-wider mb-4">Global Reach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              A distributed team built for modern business.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              We operate completely remotely. By not paying for fancy downtown office spaces with ping-pong tables, we can invest your retainer entirely into elite talent and cutting-edge software.
            </p>
            <ul className="space-y-4">
              {["Serving clients in 14+ countries", "Asynchronous workflow for speed", "24/5 global monitoring coverage"].map((item, j) => (
                <li key={j} className="text-slate-600 dark:text-slate-300 text-sm flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400"><Globe className="w-3 h-3" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-64 lg:h-full min-h-[300px] bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden flex items-center justify-center">
            {/* Abstract World Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-contain bg-no-repeat opacity-10"></div>
            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full"></div>
            
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-blue-500 rounded-full"></div>
            
            <div className="absolute bottom-[40%] left-[45%] w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-[40%] left-[45%] w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function AboutAwards() {
  const logos = [
    { name: "Google Partner", icon: Star },
    { name: "Meta Business Partner", icon: Award },
    { name: "Shopify Experts", icon: Briefcase },
    { name: "Awwwards Nominee", icon: Star }
  ];

  return (
    <section className="py-16 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-100 dark:border-white/5 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="text-slate-500 text-sm font-semibold mb-8 uppercase tracking-wider">Certified & Recognized By</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 grayscale hover:grayscale-0 transition-all cursor-default">
              <l.icon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
              <span className="font-bold text-lg">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCareers() {
  return (
    <section className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white dark:bg-[#11131a] rounded-[2rem] p-10 lg:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between border border-slate-100 dark:border-white/5 shadow-2xl">
          <div className="max-w-2xl">
            <p className="text-emerald-400 font-bold text-sm mb-3 uppercase tracking-wider">Careers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Build the internet with us.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              We are always looking for ruthless problem solvers. If you write clean code, build high-converting ad accounts, or scale organic traffic and hate red tape—we want to talk to you.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Remote First", "Unlimited PTO", "Performance Bonuses", "Learning Budget"].map((pill, i) => (
                <span key={i} className="text-xs font-semibold px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[280px]">
            <Link href="#jobs" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white dark:bg-white dark:text-slate-900 font-bold px-8 py-4 rounded-full text-center hover:scale-105 transition-transform flex justify-center items-center gap-2">
              View open roles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
