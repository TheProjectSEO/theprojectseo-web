import type { NextConfig } from "next";
import { redirects as redirectTable } from "./src/data/redirects";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return redirectTable;
  },
};

export default nextConfig;
