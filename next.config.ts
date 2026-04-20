import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Geo page consolidation — kill cannibalization between flat country pages
      // and /locations/<country>/. See IA plan §Redirect & Consolidation Strategy.
      // /india-seo-services stays live until /locations/india/ is built in Phase 1.
      {
        source: '/usa-seo-services',
        destination: '/locations/usa',
        permanent: true,
      },
      {
        source: '/philippines-seo-services',
        destination: '/locations/philippines',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
