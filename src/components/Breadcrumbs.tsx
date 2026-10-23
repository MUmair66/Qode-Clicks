import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

// Visible breadcrumb trail plus BreadcrumbList schema. The last crumb is the current page.
export function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-slate-700 dark:text-slate-200">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">{c.name}</Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
