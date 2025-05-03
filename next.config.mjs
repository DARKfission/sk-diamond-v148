/** @type {import('next').NextConfig} */
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
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    swcLoader: true, // Enable SWC for font loading
  },
}

export default nextConfig
