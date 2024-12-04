import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV === 'development';
const repoName = 'nextjs-app-router';
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isDev ? '' : `/${repoName}`,
  assetPrefix: isDev ? '' : `/${repoName}`,
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
};

export default nextConfig;
