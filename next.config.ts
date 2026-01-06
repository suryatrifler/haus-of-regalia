import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // Allows your Logo
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allows the background photos
      },
    ],
  },
};

export default nextConfig;