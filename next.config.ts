import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "qxxlzffjeruemlsbfefv.supabase.co",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        // Proxy Supabase storage through Vercel's CDN to use Vercel bandwidth
        // instead of Supabase cached egress. Vercel free tier: 100GB/mo vs Supabase: 5GB/mo
        source: '/media/:path*',
        destination: 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/:path*',
      },
    ];
  },
};

export default nextConfig;
