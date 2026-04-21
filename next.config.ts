import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // On désactive l'optimisation des polices pour éviter le crash serveur
  experimental: {
    optimizeFonts: false,
  },
};

export default nextConfig;