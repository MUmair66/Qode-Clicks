import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, NAV_GROUPS } from "@/lib/site";

const footerLinks: Record<string, { name: string; href: string }[]> = {
  Company: [
    { name: "About Us", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" }
  ],
  ...Object.fromEntries(NAV_GROUPS.map((g) => [g.name, g.items.map((i) => ({ name: i.name, href: i.href }))])),
};

const linkClass = "inline-flex min-h-[44px] items-center text-sm text-slate-500 dark:text-slate-400 transition hover:text-cyan-600 dark:hover:text-cyan-300";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-5 py-14 sm:px-6 lg:px-8 text-slate-900 dark:text-white z-10 relative">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2.6fr]">
        <div>
          <div className="flex items-center gap-3">
            <Link href="/" aria-label={`${SITE.name} home`}>
              <img src="/logo.webp" alt={`${SITE.name} logo`} width={164} height={40} className="w-auto h-10 invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all" />
            </Link>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
            {SITE.tagline}
          </p>
          <div className="mt-4 flex flex-col text-sm text-slate-600 dark:text-slate-300">
            <a href={`mailto:${SITE.email}`} className="inline-flex min-h-[44px] items-center gap-2 transition hover:text-cyan-600 dark:hover:text-cyan-300">
              <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
              {SITE.email}
            </a>
            {SITE.phone ? (
              <a href={`tel:${SITE.phoneHref}`} className="inline-flex min-h-[44px] items-center gap-2 transition hover:text-cyan-600 dark:hover:text-cyan-300">
                <Phone className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                {SITE.phone}
              </a>
            ) : null}
            <span className="inline-flex min-h-[44px] items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
              Serving clients worldwide
            </span>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 dark:text-white">{heading}</p>
              <div className="mt-3 flex flex-col">
                {links.map((link) => (
                  <Link key={link.name} href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-slate-200 dark:border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>
          <Link href="/terms-of-service" className={linkClass}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
