import { ArrowRight, Globe } from "lucide-react";
import { SITE } from "@/lib/site";

export function AboutLocations() {
  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12] border-t border-slate-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-slate-50 dark:bg-[#0a0d14] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative z-10">
            <p className="text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4">How we work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              One team, two countries.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Our team works across the USA and Pakistan. One team, one process, no outsourcing.
            </p>
            <ul className="space-y-4">
              {["Shared tools, shared standups, one project board", "Senior specialists on every account"].map((item) => (
                <li key={item} className="text-slate-600 dark:text-slate-300 text-sm flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400"><Globe className="w-3 h-3" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {["USA", "Pakistan"].map((country) => (
              <div key={country} className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
                <span className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{country}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export function AboutCareers() {
  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#080b12]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white dark:bg-[#11131a] rounded-[2rem] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between border border-slate-100 dark:border-white/5 shadow-2xl">
          <div className="max-w-2xl">
            <p className="text-cyan-700 dark:text-cyan-400 font-bold text-sm mb-3 uppercase tracking-wider">Careers</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Build the internet with us.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              We are always glad to hear from strong problem solvers. If you write clean code, build high-converting ad accounts or grow organic traffic, send us your CV and a few examples of your work.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[280px]">
            <a href={`mailto:${SITE.email}?subject=Careers%20at%20Qode%20Clicks`} className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold px-8 py-4 rounded-full text-center hover:bg-cyan-600 dark:hover:bg-cyan-200 transition-colors flex justify-center items-center gap-2">
              Send us your CV <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
