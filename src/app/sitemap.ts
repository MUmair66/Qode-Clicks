import type { MetadataRoute } from "next";
import { SITE, SERVICES, NAV_GROUPS } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about-us", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  ...NAV_GROUPS.map((g) => ({ path: g.href, priority: 0.8 })),
  ...SERVICES.map((s) => ({ path: s.href, priority: 0.9 })),
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
