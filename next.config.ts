import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Google Guaranteed is now Local Services Ads (Google Verified).
      { source: "/google-guarantee", destination: "/ppc/local-services-ads", permanent: true },
      { source: "/ppc/google-guaranteed", destination: "/ppc/local-services-ads", permanent: true },
      // Legacy /services/* URLs that were linked from older pages.
      { source: "/services/google-ads", destination: "/ppc/google-ads", permanent: true },
      { source: "/services/local-ads", destination: "/ppc/local-services-ads", permanent: true },
      { source: "/services/custom-development", destination: "/website-development/custom-web-apps", permanent: true },
      { source: "/services/custom-wordpress-development", destination: "/website-development/wordpress", permanent: true },
      { source: "/custom-wordpress-development", destination: "/website-development/wordpress", permanent: true },
      { source: "/services/seo", destination: "/digital-marketing/seo", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
