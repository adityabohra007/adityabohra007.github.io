import type { NextConfig } from "next";

  const isProd = process.env.NODE_ENV =='production';

const nextConfig: NextConfig = {
  /* config options here */
  output:"export",
  basePath:isProd ? "/adityabohra007.github.io":"",
  assetPrefix:isProd ? "/adityabohra007.github.io":"",

};

export default nextConfig;
