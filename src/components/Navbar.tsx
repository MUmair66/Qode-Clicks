"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white/75 dark:bg-slate-950/75 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5 lg:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="QodeClick home">
          <img src="/logo.png" alt="QodeClick Logo" className="w-auto h-8 invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex gap-1">
          <Link href="/about-us" className="rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white">
            About
          </Link>
          
          <div className="relative group">
            <Link href="/services" className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white">
              Services <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-2 shadow-xl shadow-black/50 backdrop-blur-xl flex flex-col gap-1">
                <Link href="/services" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  All Services
                </Link>
                <div className="h-px bg-slate-200 dark:bg-white/10 mx-2 my-1" />
                <Link href="/services/seo" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  SEO
                </Link>
                <Link href="/services/google-ads" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  Google Ads
                </Link>
                <Link href="/google-guarantee" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  Local Services Ads
                </Link>
                <Link href="/services/custom-wordpress-development" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  WordPress Development
                </Link>
                <Link href="/services/gmb-optimization" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  GMB Optimization
                </Link>
                <Link href="/services/aeo-geo" className="px-4 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white transition-colors">
                  AEO & GEO Services
                </Link>
              </div>
            </div>
          </div>

          <Link href="/faq" className="rounded-full px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:text-white">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/services/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-2.5 text-sm font-semibold transition hover:bg-cyan-600 dark:hover:bg-cyan-300"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-3 right-3 top-[92px] p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl shadow-black/20 backdrop-blur-xl lg:hidden flex flex-col gap-2 overflow-hidden"
          >
            <Link 
              href="/about-us" 
              className="px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <div className="flex flex-col">
              <button 
                className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors w-full text-left"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-1 px-4 overflow-hidden"
                  >
                    <div className="h-2" />
                    <Link href="/services" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">All Services</Link>
                    <Link href="/services/seo" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">SEO</Link>
                    <Link href="/services/google-ads" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">Google Ads</Link>
                    <Link href="/google-guarantee" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">Local Services Ads</Link>
                    <Link href="/services/custom-wordpress-development" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">WordPress Development</Link>
                    <Link href="/services/gmb-optimization" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">GMB Optimization</Link>
                    <Link href="/services/aeo-geo" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">AEO & GEO</Link>
                    <div className="h-2" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/faq" 
              className="px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            
            <Link 
              href="/services/contact" 
              className="mt-2 px-4 py-3 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-between transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
