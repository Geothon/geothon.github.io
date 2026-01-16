import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  trailingSlash: true, // optional: adds a trailing slash to all routes
};

export default nextConfig;