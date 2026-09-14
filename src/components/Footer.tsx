"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About Us", href: "/about-us" },
    { name: "All Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/services/contact" }
  ],
  Services: [
    { name: "SEO", href: "/services/seo" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Local Services Ads", href: "/google-guarantee" },
    { name: "WordPress Development", href: "/services/custom-wordpress-development" },
    { name: "GMB Optimization", href: "/services/gmb-optimization" },
    { name: "AEO & GEO Services", href: "/services/aeo-geo" },
    { name: "Content Writing", href: "/services/content-writing" }
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-5 py-14 sm:px-6 lg:px-8 text-slate-900 dark:text-white z-10 relative">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_1.5fr]">
        <div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/logo.png" alt="QodeClick Logo" className="w-auto h-10 invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all" />
            </Link>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
            Professional web design, SEO, paid ads, and growth systems for brands that need a premium digital presence.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
              hello@qodeclick.com
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
              Serving clients worldwide
            </span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 dark:text-white">{heading}</h3>
              <div className="mt-5 grid gap-3">
                {links.map((link) => (
                  <Link key={link.name} href={link.href} className="text-sm text-slate-500 dark:text-slate-400 transition hover:text-cyan-600 dark:hover:text-cyan-300">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-slate-200 dark:border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 QodeClick. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/services/contact" className="transition hover:text-cyan-600 dark:hover:text-cyan-300">Privacy Policy</Link>
          <Link href="/services/contact" className="transition hover:text-cyan-600 dark:hover:text-cyan-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
