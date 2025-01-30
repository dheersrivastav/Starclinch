import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pinimg.com","st4.depositphotos.com","wallpapers.com","cdni.autocarindia.com"], // ✅ Add external image domain
  },
};

export default nextConfig;
