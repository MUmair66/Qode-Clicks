import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#05070d] px-5 pt-28 pb-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: title, path }]} className="mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: {updated}</p>
        <div className="mt-10 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-cyan-700 dark:[&_a]:text-cyan-300 [&_a]:underline">
          {children}
        </div>
      </article>
    </div>
  );
}
