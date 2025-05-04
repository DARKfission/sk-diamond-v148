/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  target: 'experimental-serverless-trace',
  webpack: (config, { isServer }) => {
    // Custom webpack config for Workers
    if (isServer) {
      config.target = 'webworker'; // Make sure the server-side code is compatible with Workers
    }
    return config;
  },
}
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['lucide-react'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
