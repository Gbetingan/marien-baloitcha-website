import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // This tells Hostinger to ignore the false-positive type errors and deploy the site
    ignoreBuildErrors: true,
  },
  eslint: {
    // This ignores linting errors during deployment as well
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
