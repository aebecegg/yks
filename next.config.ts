import type { NextConfig } from 'next';

const assetPrefix = process.env.ASSET_PREFIX?.replace(/\/+$/, '');

const nextConfig: NextConfig = {
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),  // Uncomment and add 'import path from "path"' if needed
  /* config options here */
  assetPrefix,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix ?? '',
  },
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
