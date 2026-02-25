import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.yimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cleantechnica.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.ilcdn.fi",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
