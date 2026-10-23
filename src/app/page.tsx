import { HomeContent } from "@/components/HomeContent";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Web Design, SEO and Google Ads Agency | Qode Clicks",
  description:
    "Qode Clicks builds fast websites and runs SEO, Google Ads and Local Services Ads for service businesses. Packages start at $1,450. Request a proposal.",
  path: "/",
});

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/logo.png`,
    email: SITE.email,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    description: SITE.tagline,
    areaServed: "Worldwide",
    priceRange: "$$",
    knowsAbout: ["Web design", "WordPress development", "SEO", "Google Ads", "Local Services Ads", "Google Business Profile"],
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomeContent />
    </>
  );
}
