"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_GROUPS } from "@/lib/site";

// Short labels keep all four dropdowns on one line at the lg breakpoint.
const SHORT_LABELS: Record<string, string> = {
  "Digital Marketing": "Marketing",
  "Paid Advertising": "Paid Ads",
  "Web Development": "Web Dev",
  "Video Production": "Video",
};

const topLink = "rounded-full px-3 xl:px-4 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-cyan-600 dark:hover:text-cyan-400";
const dropdownLink = "px-3 py-2 rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors";
const mobileTopLink = "px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors";
const mobileSubLink = "px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors";
// Visible in both themes (the old chevrons inherited white text and vanished in light mode).
const chevronClass = "px-4 py-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 dark:text-slate-200";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const close = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white/75 dark:bg-slate-950/75 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5 lg:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Qode Clicks home">
          <img src="/logo.webp" alt="Qode Clicks logo" width={131} height={32} className="w-auto h-8 invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex gap-0.5">
          <Link href="/about-us" className={topLink}>About</Link>

          {NAV_GROUPS.map((group) => (
            <div key={group.name} className="relative group">
              <Link href={group.href} className={`flex items-center gap-1 ${topLink}`}>
                {SHORT_LABELS[group.name] ?? group.name}
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-xl shadow-black/50 backdrop-blur-xl flex flex-col gap-1 min-w-[240px]">
                  <Link href={group.href} className={`${dropdownLink} font-semibold text-slate-900 dark:text-white`}>All {group.name}</Link>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLink}>{item.name}</Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Link href="/faq" className={topLink}>FAQ</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-2.5 text-sm font-semibold transition hover:bg-cyan-600 dark:hover:bg-cyan-300"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            className="lg:hidden p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
            id="mobile-menu"
            className="absolute left-3 right-3 top-[92px] max-h-[calc(100vh-110px)] overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl shadow-black/20 backdrop-blur-xl lg:hidden flex flex-col gap-2"
          >
            <Link href="/about-us" className={mobileTopLink} onClick={close}>About</Link>

            <div className="flex flex-col gap-1">
              {NAV_GROUPS.map((group) => {
                const expanded = openGroup === group.name;
                return (
                  <div key={group.name} className="flex flex-col">
                    <div className="flex items-center justify-between w-full rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                      <Link href={group.href} className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200 flex-1 text-left hover:text-cyan-600 dark:hover:text-cyan-400" onClick={close}>
                        {group.name}
                      </Link>
                      <button
                        className={chevronClass}
                        onClick={() => setOpenGroup(expanded ? null : group.name)}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${group.name} menu`}
                        aria-expanded={expanded}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {expanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-1 px-4 overflow-hidden">
                          <div className="flex flex-col gap-1 mb-2 mt-1">
                            {group.items.map((item) => (
                              <Link key={item.href} href={item.href} onClick={close} className={mobileSubLink}>{item.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <Link href="/faq" className={mobileTopLink} onClick={close}>FAQ</Link>

            <Link
              href="/contact"
              className="mt-2 px-4 py-3 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-between transition-colors"
              onClick={close}
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
