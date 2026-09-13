"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white/75 dark:bg-slate-950/75 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5 lg:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="QodeClick home">
          <img src="/logo.png" alt="QodeClick Logo" className="w-auto h-8 invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all" />
        </Link>

        <div className="hidden items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex gap-1">
          <Link href="/services/about-us" className="rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white">
            About
          </Link>
          
          <div className="relative group">
            <Link href="/services" className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white">
              Services <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-2 shadow-xl shadow-black/50 backdrop-blur-xl flex flex-col gap-1">
                <Link href="/services" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  All Services
                </Link>
                <div className="h-px bg-slate-200 dark:bg-white/10 mx-2 my-1" />
                <Link href="/services/seo" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  SEO
                </Link>
                <Link href="/services/google-ads" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  Google Ads
                </Link>
                <Link href="/google-guarantee" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  Local Services Ads
                </Link>
                <Link href="/services/custom-wordpress-development" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  WordPress Development
                </Link>
                <Link href="/services/gmb-optimization" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white transition-colors">
                  GMB Optimization
                </Link>
              </div>
            </div>
          </div>

          <Link href="/faq" className="rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-white">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/services/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-2.5 text-sm font-semibold transition hover:bg-cyan-500 dark:hover:bg-cyan-300"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
