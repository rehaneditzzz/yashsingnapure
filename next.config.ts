// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ allows Cloudinary-hosted images
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint errors from blocking build on Vercel
  },
};

export default nextConfig;
