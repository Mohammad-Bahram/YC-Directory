import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co"],
  },
};

export default nextConfig;
