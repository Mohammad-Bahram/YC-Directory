import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co", "www.gravatar.com"],
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
