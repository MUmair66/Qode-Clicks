import { FaqLayout, type FaqGroup } from "@/components/FaqPageSections";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { PRICING } from "@/lib/site";

export const metadata = pageMetadata({
  title: "FAQ: Pricing, Contracts, Timelines and Process | Qode Clicks",
  description:
    "Answers on Qode Clicks pricing, contracts, SEO and paid ads timelines, WordPress builds and reporting. Starting prices, minimum ad spend and how we work.",
  path: "/faq",
});

const perMonth = (p: string) => p.replace("/mo", " a month");
const minSpend = PRICING.minAdSpendMonthly.replace("/mo", "");

const faqData: FaqGroup[] = [
  {
    category: "Getting started",
    id: "start",
    faqs: [
      { q: "What happens in the free audit?", a: "A specialist reviews your analytics, ad accounts and site performance, then sends a written document covering what is broken, what it is likely costing you each month, and what we would fix first and in what order. Turnaround is five working days. There is no presentation and no sales deck. You keep the findings whether or not we work together." },
      { q: "How do we know if we are the right fit for you?", a: `For paid campaigns we work best with businesses spending at least ${minSpend} a month on media. Below that there is not enough volume to optimize against and you would get more from a good freelancer. Websites have no such minimum: WordPress builds start from ${PRICING.wordpressBuild}. We also turn down work where the product is the problem rather than the marketing, and where tracking is broken and the client will not let us fix it first.` },
      { q: "What do you need from us to begin?", a: "Admin access to Google Analytics, Search Console and Google Ads if you run them, plus access to your hosting and CMS. If you do not have some of these, we will set them up under your ownership rather than ours. We also want thirty minutes with whoever knows the sales process best." },
      { q: "How quickly can you start?", a: "Usually within one to two weeks of signing. Audits are faster and can often begin the same week. Larger builds get scheduled against current capacity, and we will tell you the honest start date rather than book you in and stall." },
      { q: "Do you work with businesses outside your time zone?", a: "Yes. Qode Clicks is a remote-first team with two hubs: Frisco, Texas works US Central hours (Mon to Fri, 9am to 5pm CT) and our Lahore, Pakistan delivery team works 9am to 6pm PKT. Everything else runs asynchronously in a shared Slack channel, so nothing waits a full day for an answer." }
    ]
  },
  {
    category: "Pricing and contracts",
    id: "pricing",
    faqs: [
      { link: { label: "See pricing", href: "/#pricing" }, q: "How much do your services cost?", a: `SEO starts from ${perMonth(PRICING.seoMonthly)}, Google Ads management from ${perMonth(PRICING.googleAdsMonthly)}, Local Services Ads from ${perMonth(PRICING.lsaMonthly)} and content writing from ${perMonth(PRICING.contentMonthly)}. WordPress builds start from ${PRICING.wordpressBuild} for a template kit, with custom themes from ${PRICING.wordpressCustom} and headless builds from $11,000. WooCommerce stores start from ${PRICING.wooCommerce}, custom web apps from ${PRICING.customWebApp}, and care plans from ${perMonth(PRICING.carePlanMonthly)}. You always get a written scope with a fixed figure before anything starts.` },
      { q: "Is ad spend included in the retainer?", a: "No. Management fees and media budget are separate. Your media is billed directly to your own card on your own ad accounts, and we never mark it up, resell it or take a commission from platforms." },
      { q: "What are your contract terms?", a: "Three month minimum on retainers so there is enough time to show something, then rolling with thirty days notice. No twelve month lock in and no cancellation penalty. Fixed scope projects have no ongoing term at all." },
      { q: "What happens to our accounts if we leave?", a: "You keep everything, because it was always yours. Ad accounts sit under your billing from day one, code lives in your repository, analytics is in your name. On exit you get full documentation, dashboard ownership and a handover call." },
      { q: "Do you offer refunds or performance guarantees?", a: "We do not guarantee specific rankings or a specific return, because nobody controls the auction or the algorithm. What we do commit to in writing is the scope, the deliverables and the reporting cadence. If we fail to deliver what the scope says, we fix it or credit the month." },
      { q: "Can we change or pause our plan?", a: "Yes. Scope changes are agreed in writing and take effect from the following month. Pauses are available for genuine seasonality, typically up to two months, provided the account is not mid build." }
    ]
  },
  {
    category: "SEO",
    id: "seo",
    faqs: [
      { q: "How long before we see results from SEO?", a: "SEO usually takes 3 to 6 months to compound. Long tail and low competition terms tend to move first, while competitive head terms take longer. Technical fixes can show gains within 30 days. The audit tells you which category your site is in before you commit anything." },
      { q: "Do you guarantee first page rankings?", a: "No. We forecast the traffic and revenue range we expect based on current search volume, your competitors and the site's starting position. A guarantee of position one is either for a keyword nobody searches or a promise nobody can keep." },
      { q: "Where do your backlinks come from?", a: "Digital PR, data led outreach, unlinked mention reclamation and resource placements. Every link is reported with the domain, its traffic and the method used. We do not buy from marketplaces, use private blog networks, or run link exchanges." },
      { q: "Is content writing included in SEO?", a: `Yes. SEO retainers include content, with the number of pieces each month set by the plan. Standalone content writing starts from ${perMonth(PRICING.contentMonthly)}. Everything is written in house by people who research the subject rather than paraphrasing the top three results.` },
      { q: "Can you recover a site that lost traffic after a Google update?", a: "Often, though it depends what caused it. We start by isolating whether the drop is technical, content quality, link related, or simply a change in how results are laid out. Recovery is usually a three to six month engagement." }
    ]
  },
  {
    category: "Paid media",
    id: "paid",
    faqs: [
      { q: "What is the minimum ad budget you work with?", a: `Around ${minSpend} a month in media spend. Below that there is not enough conversion data for the platforms to optimize, and you will spend more on management than on reaching people.` },
      { q: "How quickly do paid campaigns start working?", a: "First leads usually arrive within 2 to 4 weeks, assuming tracking is clean when we start. Cost per lead typically stabilizes around weeks 4 to 6, once the learning phase is over and we have enough data to optimize. We tell you upfront what the first month is expected to look like." },
      { q: "Do you write the ad creative?", a: "Copy, yes, on every plan. Static and motion creative production is included on higher tiers and available as an add on otherwise." },
      { q: "Will you work with our existing ad account or start fresh?", a: "We work with what you have wherever possible, because account history has real value in the auction. We restructure inside it rather than starting over, unless the account is genuinely unsalvageable." },
      { q: "Do you handle Performance Max and Shopping?", a: "Yes, including product feed setup and optimization, which is where most Shopping performance actually comes from. On Performance Max we structure it so it stops absorbing your brand traffic and claiming credit for sales you were getting anyway." },
      { q: "Do you run Local Services Ads?", a: `Yes. Local Services Ads (Google Verified) put a verified badge above the regular ads for local service businesses, and you pay per lead rather than per click. Management starts from ${perMonth(PRICING.lsaMonthly)}.`, link: { label: "How we manage Local Services Ads", href: "/ppc/local-services-ads" } }
    ]
  },
  {
    category: "Development and WordPress",
    id: "dev",
    faqs: [
      { q: "Do you use page builders like Elementor or Divi?", a: `Not on custom builds. Heavy page builders are a common reason a WordPress site loads slowly, so custom themes (from ${PRICING.wordpressCustom}) use a library of flexible content blocks that give your team the same page building freedom without the performance cost. Our entry template kit builds (from ${PRICING.wordpressBuild}) are kept lean, and we explain the tradeoffs before you choose.` },
      { q: "Can our team edit the site without a developer?", a: "Yes, that is the point of the block library. Once handed over, your marketing team can build new pages from existing blocks. We include editor training and written documentation." },
      { q: "How long does a WordPress build take?", a: "Six to ten weeks for a typical custom marketing site, eight to fourteen for WooCommerce. Template kit sites are faster. Larger catalogs and custom integrations extend that. You get a phased timeline with milestones at the start." },
      { q: "Will a rebuild hurt our rankings?", a: "Not if it is done properly. URL mapping, redirect strategy, prelaunch checks and a monitored cutover are standard on every migration. A short dip in the first two weeks is normal, a sustained drop is not." },
      { q: "Do you offer hosting and ongoing maintenance?", a: `We do not resell hosting, but we will recommend and configure it. Maintenance runs through our care plans from ${perMonth(PRICING.carePlanMonthly)}, covering updates tested on staging, daily backups, security hardening and included development hours.` }
    ]
  },
  {
    category: "Working together",
    id: "working",
    faqs: [
      { q: "Who will actually be working on our account?", a: "The people on your kickoff call. You get a named strategist, a media buyer and a developer, all on the Qode Clicks team, and you can message all three directly in a shared Slack channel. We do not sell with seniors and deliver with juniors." },
      { q: "What does reporting look like?", a: "A live Looker Studio dashboard you can open any time, plus a written monthly summary that leads with revenue and cost per acquisition. Monthly review calls run forty five minutes on retainers." },
      { q: "How quickly do you respond to messages?", a: "Within one working day for anything in Slack or email, usually much faster during office hours. Site down or campaign spending incorrectly is treated as urgent and handled immediately." },
      { q: "Can you work alongside our in house marketing team?", a: "Often the better setup. We usually take the channels or the development work your team does not have capacity for, and hand back documentation as we go so the knowledge stays with you." },
      { q: "What if we are not happy with the work?", a: "Tell us early rather than at renewal. Every account has a monthly review specifically so problems surface while they are still fixable. If something is genuinely not working we will change the approach or the team member." }
    ]
  }
];

const allFaqs = faqData.flatMap((g) => g.faqs.map((f) => ({ question: f.q, answer: f.a })));

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(allFaqs)} />
      <FaqLayout data={faqData} />
    </>
  );
}
