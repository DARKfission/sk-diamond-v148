/** @type {import('next').NextConfig} */
// next.config.js
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
