"use client";

import { motion } from "framer-motion";

export function GmbBand() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#05070d]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-[#0B5F45] rounded-3xl p-10 md:p-14 grid lg:grid-cols-[1.35fr_0.65fr] gap-10 items-center">
          <div>
            <span className="text-yellow-400 font-semibold text-xs tracking-wider uppercase mb-4 block">Free report</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See where you actually rank, not where you think you do.</h2>
            <p className="text-[#BEE0D3] text-base leading-relaxed mb-8 max-w-2xl">
              Searching your own keyword from your own office tells you almost nothing. We run a 7 by 7 grid across your service area and send you the map: where you hold the top three, where you fall off entirely, and which competitor owns each square you are losing.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Three day turnaround", "49 point grid", "Competitor named per square", "Yours to keep"].map(l => (
                <span key={l} className="bg-white/10 text-[#CFE9DF] text-xs font-semibold px-4 py-2 rounded-full border border-white/10">
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#quote" className="inline-flex items-center justify-center bg-white text-[#0B5F45] font-bold py-4 px-8 rounded-full transition hover:bg-yellow-400 hover:text-slate-900">
              Get my grid report
            </a>
            <a href="#geo" className="inline-flex items-center justify-center bg-transparent border-2 border-white/40 text-white font-bold py-4 px-8 rounded-full transition hover:bg-white/10">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GmbGeoGrid() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-white dark:bg-[#05070d] border-t border-slate-200 dark:border-white/10" id="geo">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Geo-grid tracking</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Local ranking is not one position. It is a map.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Your visibility decays with distance from your pin. A geo-grid searches your keyword from 49 separate points across your service area and records where you rank at each one. It is the only honest way to measure local SEO, and it makes the work visible to whoever is paying for it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Before */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-baseline gap-4 mb-6">
              <b className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Before</b>
              <span className="text-sm text-slate-500 dark:text-slate-400">Month 0, 7 by 7 grid across a 5 mile radius</span>
            </div>
            {/* 7x7 Grid */}
            <div className="grid grid-cols-7 gap-1.5 aspect-square">
              {/* Simplification: Just an illustrative pattern like the original */}
              {Array.from({length: 49}).map((_, i) => {
                // Approximate a bad grid (lots of 20+, some 10-15s, maybe a 7-9 in the middle)
                let cls = "bg-slate-200 dark:bg-slate-800 text-slate-500";
                let val = "20+";
                if ([24].includes(i)) { cls = "bg-amber-400 text-amber-950"; val = "7"; }
                else if ([17, 23, 25, 31, 32].includes(i)) { cls = "bg-amber-400/80 text-amber-950"; val = "9"; }
                else if ([16, 18, 22, 26, 30, 33, 38].includes(i)) { cls = "bg-rose-500 text-white"; val = "14"; }
                else if ([8, 9, 10, 11, 15, 21, 27, 29, 37, 39].includes(i)) { cls = "bg-rose-500/80 text-white"; val = "18"; }

                return (
                  <div key={i} className={`${cls} rounded-md flex items-center justify-center font-bold text-[10px] sm:text-xs`}>
                    {val}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-300">Average grid position</span>
              <b className="font-serif text-2xl text-slate-900 dark:text-white">16.7</b>
            </div>
          </div>

          {/* After */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-baseline gap-4 mb-6">
              <b className="font-serif text-2xl font-bold text-slate-900 dark:text-white">After 5 months</b>
              <span className="text-sm text-slate-500 dark:text-slate-400">Same grid, same radius, same tool</span>
            </div>
            {/* 7x7 Grid */}
            <div className="grid grid-cols-7 gap-1.5 aspect-square">
              {Array.from({length: 49}).map((_, i) => {
                let cls = "bg-emerald-600 text-white";
                let val = "1";
                // Inner core
                if ([17,18, 23,24,25, 30,31,32].includes(i)) { cls = "bg-emerald-600 text-white"; val = ["1","2"][i%2]; }
                else if ([9,10,11,12, 16,19, 22,26, 29,33, 37,38,39].includes(i)) { cls = "bg-emerald-400 text-emerald-950"; val = ["3","4","5"][i%3]; }
                else if ([2,3,4, 8,13, 21,27, 36,40].includes(i)) { cls = "bg-yellow-400 text-yellow-950"; val = "7"; }
                else if ([0,1,5,6, 7,14, 20,28, 35,41, 42,48].includes(i)) { cls = "bg-amber-400 text-amber-950"; val = "9"; }
                else { cls = "bg-rose-500 text-white"; val = "12"; }

                return (
                  <div key={i} className={`${cls} rounded-md flex items-center justify-center font-bold text-[10px] sm:text-xs`}>
                    {val}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-300">Average grid position</span>
              <b className="font-serif text-2xl text-slate-900 dark:text-white">6.1</b>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-emerald-600" /> Position 1 to 2</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-emerald-400" /> Position 3 to 5</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-yellow-400" /> Position 6 to 7</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-amber-400" /> Position 8 to 10</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-rose-500" /> Position 11 to 20</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-slate-200 dark:bg-slate-800" /> Outside top 20</span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-16 leading-relaxed max-w-4xl">
          Illustrative of a typical result. The pattern is what matters: before, the business ranked reasonably at its own pin and disappeared past two miles. After, the top three extends across the centre of the service area and the edges hold single figure positions. That expansion is where the extra calls come from.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">49</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Points per scan</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">A 7 by 7 grid across your service area, run on your primary keyword. Bigger grids and additional keywords on request.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Radius set to match how far you actually travel</p>
          </div>
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">Monthly</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Re-scanned on schedule</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Same grid, same keyword, same radius every month, so movement is comparable rather than anecdotal.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Included in every retainer</p>
          </div>
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">Detail</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Competitor named</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Where you are losing a square we tell you who is winning it, which usually explains what to fix next.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Often reveals spam listings worth reporting</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GmbGeoFencing() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#05070d] border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4 uppercase tracking-wider">Geo-fencing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Two different things people call geo-fencing.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Worth separating, because one is free measurement and the other is paid media. Agencies routinely sell the second while describing the first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl border-l-4 border-l-emerald-500">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 block">Organic, measurement</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Geo-grid tracking</h3>
            <p className="text-base text-slate-600 dark:text-slate-300 mb-8">Measuring where your profile ranks across a mapped area. Costs nothing to act on beyond the optimisation work itself, and it is how we prove the retainer is working.</p>
            <ul className="space-y-4">
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it does</strong> — Shows visibility decay by distance from your pin</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it costs</strong> — Included in every plan, no media spend</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it fixes</strong> — Tells you which areas to build citations, content and reviews for</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">Who it suits</strong> — Every local business, without exception</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl border-l-4 border-l-blue-500">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 block">Paid, targeting</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Geo-fenced advertising</h3>
            <p className="text-base text-slate-600 dark:text-slate-300 mb-8">Drawing a boundary on a map and only showing ads to people inside it. A radius around your locations, a custom polygon around a neighbourhood, or an area around a competitor or venue.</p>
            <ul className="space-y-4">
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it does</strong> — Restricts ad delivery to defined areas and excludes the rest</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it costs</strong> — Media spend, billed to your own ad account</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">What it fixes</strong> — Wasted budget outside the area you actually serve</li>
              <li className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white font-semibold">Who it suits</strong> — Multi location, footfall driven, and event or seasonal campaigns</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">01</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Radius and polygon</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Circles rarely match a real service area. We draw polygons around the postcodes and neighbourhoods you actually want, and exclude the ones that generate enquiries you cannot service.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Cuts waste before it improves anything else</p>
          </div>
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">02</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Competitor and venue</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Targeting a boundary around a competitor's location, a trade show, a retail park or a stadium. Effective for footfall businesses, and worth knowing the limits before you plan around it.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Not permitted around sensitive locations</p>
          </div>
          <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-8 rounded-2xl">
            <span className="font-serif text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-4 block">03</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Bid adjustment by area</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">The version most businesses should actually use. Rather than excluding areas outright, bid more where your close rate is higher and less where jobs are marginal.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-white/10">Usually beats hard exclusion on lead volume</p>
          </div>
        </div>
      </div>
    </section>
  );
}
