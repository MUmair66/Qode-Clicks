const fs = require('fs');

let code = fs.readFileSync('src/app/page.tsx', 'utf-8');

// 1. Update navItems
code = code.replace(
  'const navItems = ["Services", "Process", "Work", "Pricing", "FAQ"];',
  'const navItems = ["About", "Services", "Projects", "Process", "Pricing", "FAQ"];'
);

// 2. Update footerLinks
code = code.replace(
  'Company: ["Services", "Process", "Work", "Pricing"],',
  'Company: ["About", "Services", "Projects", "Process", "Pricing"],'
);
code = code.replace(
  'Resources: ["Growth Audit", "Case Studies", "Reporting", "Contact"],',
  'Resources: ["Growth Audit", "Projects", "Reporting", "Contact"],'
);

// 3. Update Hero Button
code = code.replace(
  'href="#work"\n                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/[0.1]"\n              >\n                <Play className="h-5 w-5" />\n                See the System',
  'href="#projects"\n                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/[0.1]"\n              >\n                <Play className="h-5 w-5" />\n                View Projects'
);

// 4. Add About Section
const aboutSection = `
      <section className="bg-[#05070d] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-6"
            >
              <p className="text-4xl font-semibold tracking-tight text-white">{value}</p>
              <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 bg-[#07111b] px-5 py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">About Us</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Architects of Digital Dominance.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              At QodeClick, we don't just build websites; we engineer comprehensive growth ecosystems. Our team of specialists seamlessly integrates modern <span className="text-white font-medium">WordPress Development</span> with data-driven <span className="text-white font-medium">SEO, Google Ads, and Meta Ads</span> strategies. 
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              By staying ahead of the curve with <span className="text-white font-medium">AEO/GEO optimization</span> and compelling <span className="text-white font-medium">Content Writing</span>, alongside targeted <span className="text-white font-medium">Social Media Marketing</span> and <span className="text-white font-medium">GMB Optimization</span>, we turn your brand into a market leader.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Years Experience", "10+"],
                ["Client Retention", "95%"],
                ["Growth Experts", "20+"],
                ["Ad Spend Managed", "$5M+"],
              ].map(([label, value]) => (
                <div key={label} className="border-l-2 border-cyan-300/50 pl-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative h-full w-full max-lg:max-w-md max-lg:mx-auto">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col gap-4 mt-8">
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2">
                   <Target className="h-10 w-10 text-cyan-300 mb-4" />
                   <h3 className="font-semibold text-white">Precision Targeting</h3>
                   <p className="text-xs text-slate-400 mt-2">Google & Meta Ads</p>
                </div>
                <div className="rounded-2xl bg-slate-900 border border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg transition-transform hover:-translate-y-2">
                   <Code2 className="h-10 w-10 text-amber-300 mb-4" />
                   <h3 className="font-semibold text-white">Flawless Builds</h3>
                   <p className="text-xs text-slate-400 mt-2">Next-gen WordPress</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-slate-900 border border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg transition-transform hover:-translate-y-2">
                   <Compass className="h-10 w-10 text-emerald-300 mb-4" />
                   <h3 className="font-semibold text-white">Search Authority</h3>
                   <p className="text-xs text-slate-400 mt-2">Advanced SEO & AEO/GEO</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-center items-center text-center aspect-square shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2">
                   <PenLine className="h-10 w-10 text-rose-300 mb-4" />
                   <h3 className="font-semibold text-white">Brand Voice</h3>
                   <p className="text-xs text-slate-400 mt-2">Strategic Content & Social</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
`;

code = code.replace(
  /<section className="bg-\[#05070d\] px-5 py-16 sm:px-6 lg:px-8">[\s\S]*?<\/section>/,
  aboutSection.trim()
);


// 5. Replace Work Section with Projects
const projectsSection = `
      <section id="projects" className="bg-[#05070d] px-5 py-24 sm:px-6 lg:px-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Our Projects"
            title="Real growth, engineered for market leaders."
            description="Explore how we blend WordPress development, advanced SEO, and high-converting ad campaigns into cohesive digital powerhouses."
          />
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "FinTech SEO & Lead Gen",
                category: "SEO, AEO & Google Ads",
                metric: "320% Traffic Increase",
                desc: "Dominated generic search terms using AEO optimization and scaled lead volume via targeted Google Ads.",
                gradient: "from-cyan-500/20 to-blue-600/20",
                icon: <Search className="h-6 w-6 text-cyan-300" />
              },
              {
                title: "E-Commerce Replatforming",
                category: "WordPress & Meta Ads",
                metric: "4.8x ROAS",
                desc: "Built a lightning-fast custom WordPress storefront and scaled revenue through creative-tested Meta Ads.",
                gradient: "from-amber-500/20 to-orange-600/20",
                icon: <Code2 className="h-6 w-6 text-amber-300" />
              },
              {
                title: "Local Enterprise Dominance",
                category: "GMB & Content Writing",
                metric: "Top 3 Map Pack",
                desc: "Captured hyper-local search intent through comprehensive GMB optimization and localized service content.",
                gradient: "from-emerald-500/20 to-teal-600/20",
                icon: <MapPin className="h-6 w-6 text-emerald-300" />
              },
              {
                title: "SaaS Brand Activation",
                category: "Social Media & SEO",
                metric: "5M+ Impressions",
                desc: "Established category authority through a cohesive social media strategy and foundational technical SEO.",
                gradient: "from-rose-500/20 to-purple-600/20",
                icon: <Share2 className="h-6 w-6 text-rose-300" />
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-white/20 transition-colors"
              >
                <div className={\`absolute inset-0 bg-gradient-to-br \${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500\`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="rounded-2xl bg-white/[0.08] p-3 backdrop-blur-md">
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
                      {project.metric}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">{project.category}</p>
                    <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-md">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
`;

code = code.replace(
  /<section id="work"[\s\S]*?<\/section>/,
  projectsSection.trim()
);

fs.writeFileSync('src/app/page.tsx', code);
console.log('Patched');
