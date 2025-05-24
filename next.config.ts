// next.config.js or next.config.ts
const isProd = process.env.NODE_ENV === 'production';
const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  output: 'export',
  basePath: isProd && isExport ? '/adityabohra007.github.io' : '',
  assetPrefix: isProd && isExport ? '/adityabohra007.github.io/' : '',
};

export default nextConfig;
