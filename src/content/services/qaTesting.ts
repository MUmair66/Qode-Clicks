import type { ServicePageData } from "@/lib/service-page";

export const qaTesting: ServicePageData = {
  path: "/website-development/qa-testing",
  hub: { name: "Web Development", path: "/website-development" },
  name: "QA and Test Automation",
  meta: {
    title: "QA Testing and Test Automation Services | Qode Clicks",
    description: "Manual QA and test automation with Playwright, Cypress and Selenium, plus API, accessibility and performance testing. QA audits from $900. Get a quote.",
  },

  hero: {
    eyebrow: "Manual QA and Automation Testing",
    title: "Ship releases with confidence,",
    accent: "not crossed fingers.",
    intro: "We test websites and web apps by hand and with automated suites that run on every pull request. Functional, regression, cross-browser, accessibility, API and performance testing, with clear bug reports your developers can act on straight away.",
    primaryLabel: "Get a free QA quote",
    stats: [
      { value: "1 to 2 wks", label: "Typical QA audit timeline" },
      { value: "Every PR", label: "Automated tests run in CI" },
      { value: "100%", label: "Test code you own" },
    ],
  },

  form: {
    title: "Free QA and testing quote",
    description: "Tell us what you are building and how it is tested today. We reply within one business day with a test plan outline and fixed price.",
    source: "QA testing quote",
    fields: [
      { name: "app_url", label: "Website or app URL", type: "text", placeholder: "app.yourcompany.com" },
      { name: "testing_need", label: "What do you need?", type: "select", required: true, placeholder: "Choose a service", options: ["One-off QA audit", "Test automation setup", "Ongoing QA for releases", "Accessibility testing", "Performance or load testing", "Not sure yet"] },
      { name: "tech_stack", label: "Tech stack", type: "text", placeholder: "React, Next.js, WordPress, Node API..." },
      { name: "release_frequency", label: "How often do you release?", type: "select", placeholder: "Choose one", options: ["Daily", "Weekly", "Every few weeks", "Monthly or less"] },
    ],
    submitLabel: "Request my QA quote",
    note: "Fixed price quotes. No obligation.",
  },

  problems: {
    eyebrow: "The usual problem",
    title: "Why bugs keep reaching your users.",
    intro: "Most teams test. The problem is what gets tested, when and by whom.",
    items: [
      { title: "Developers testing their own work", desc: "The person who built a feature checks the happy path on their own laptop, and edge cases slip straight through." },
      { title: "Regressions on every release", desc: "A fix in one place breaks checkout, login or a form somewhere else, and nobody notices until a customer does." },
      { title: "Flaky or abandoned test suites", desc: "Automated tests were written once, started failing at random, and now the team ignores them or skips them in CI." },
      { title: "Only tested in Chrome on desktop", desc: "Safari, Firefox, older phones and screen readers are never checked, so real users hit layout and accessibility bugs." },
    ],
  },

  offerings: {
    eyebrow: "What we do",
    title: "Manual testing and automation, under one roof.",
    intro: "Use us as a one-off audit, an automation project or your ongoing QA team.",
    items: [
      { title: "Functional and regression testing", desc: "Test cases written from your requirements and run before every release, so existing features keep working." },
      { title: "Exploratory testing", desc: "Experienced testers try to break your product the way real users do, and log what they find with clear steps to reproduce." },
      { title: "Cross-browser and device testing", desc: "Chrome, Safari, Firefox and Edge on real iOS and Android devices and desktop, using BrowserStack for wide coverage." },
      { title: "Accessibility testing", desc: "Manual and automated checks against WCAG 2.2 AA, including keyboard and screen reader testing with NVDA and VoiceOver." },
      { title: "UAT support", desc: "Test scripts, sessions and bug triage that help your stakeholders sign off releases quickly and with evidence." },
      { title: "End-to-end automation", desc: "Playwright, Cypress or Selenium suites that cover your critical user journeys, written to be stable and easy to maintain.", href: "/website-development/custom-web-apps" },
      { title: "API and CI testing", desc: "API tests with Postman and code-based suites, wired into GitHub Actions so every pull request is checked automatically." },
      { title: "Visual and performance testing", desc: "Visual regression snapshots, Lighthouse audits and k6 load tests to catch layout shifts and slowdowns before launch." },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From first audit to tested releases in four steps.",
    intro: "Fixed scope, a shared bug board and weekly updates on coverage and open issues.",
    steps: [
      { title: "Discovery", time: "Week 1", desc: "We learn your product, users, tech stack and release process, and agree which journeys and devices matter most." },
      { title: "Test plan and audit", time: "Weeks 1 to 2", desc: "Test plan and cases written, then a full manual pass with every bug logged in Jira, Linear or GitHub Issues." },
      { title: "Automation", time: "Weeks 2 to 5", desc: "Critical journeys automated in Playwright or Cypress, API tests added, and the suite connected to your CI pipeline." },
      { title: "Ongoing QA", time: "Every release", desc: "Regression runs, new feature testing and test maintenance each sprint, with a short quality report every month." },
    ],
  },

  pricing: {
    title: "Three ways to work with our QA team.",
    intro: "Fixed prices agreed before we start. Paid tools such as BrowserStack are billed to you directly or included at cost.",
    unit: "starting price",
    plans: [
      { name: "QA audit", target: "Teams preparing for a launch or wanting an honest view of current quality.", price: "$900 one-off", features: ["Manual test of key user journeys", "Cross-browser and mobile checks", "Accessibility spot check", "Prioritized bug report", "Walkthrough call with your team"] },
      { name: "Automation setup", target: "Products with regular releases that need a reliable regression safety net.", price: "From $2,400", popular: true, features: ["Test plan and test cases", "Playwright or Cypress suite for core journeys", "API tests with Postman or code", "GitHub Actions CI integration", "Visual regression snapshots", "Handover docs and training"] },
      { name: "Ongoing QA", target: "Teams shipping every week or two that want a dedicated QA function.", price: "From $1,200/mo", features: ["Testing for every release", "Regression and exploratory testing", "Automation suite maintenance", "Accessibility and performance checks", "Bug triage with your developers", "Monthly quality report"] },
    ],
  },

  tools: {
    title: "Frameworks and tools we use",
    items: ["Playwright", "Cypress", "Selenium", "Postman", "GitHub Actions", "BrowserStack", "k6", "Lighthouse", "axe DevTools", "Jira", "Percy", "TestRail"],
  },

  related: {
    title: "Testing works best alongside good builds.",
    intro: "These are the services we most often pair with QA and test automation.",
    items: [
      { title: "Custom web apps", desc: "Web apps and portals built with tests from the first sprint.", href: "/website-development/custom-web-apps" },
      { title: "Website redesign", desc: "Redesigns tested across browsers and devices before relaunch.", href: "/website-development/website-redesign" },
      { title: "E-commerce websites", desc: "Online stores with checkout and payment flows tested end to end.", href: "/website-development/ecommerce-website" },
      { title: "Website maintenance", desc: "Care plans that keep your site updated, backed up and secure.", href: "/website-development/website-maintenance" },
    ],
  },

  faqs: [
    { question: "How long does it take to get started?", answer: "A QA audit usually takes 1 to 2 weeks. An automation setup for core journeys takes 3 to 5 weeks, and ongoing QA can start within a week of agreeing scope." },
    { question: "What is included in the price?", answer: "Each plan lists its deliverables: test plans, manual testing, automation code, CI setup and reports as relevant. Paid device clouds and test management tools are billed at cost or to your own account." },
    { question: "Should we use Playwright, Cypress or Selenium?", answer: "For most new web projects we recommend Playwright for its speed and cross-browser support. Cypress suits teams already using it, and Selenium suits existing Java or Python suites. We can also extend a suite you already have." },
    { question: "Do you test accessibility?", answer: "Yes. We combine automated scans with manual keyboard and screen reader testing against WCAG 2.2 AA, and report each issue with the affected element and a suggested fix." },
    { question: "Who owns the test code?", answer: "You do. Test suites live in your repository, run in your CI and are documented so your developers can keep them going if you stop working with us." },
  ],

  cta: {
    title: "Ready to ship with fewer bugs?",
    description: "Tell us about your product and release process. We will send a test plan outline and fixed price within one business day.",
  },
};
