/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
  },
  transpilePackages: ['lucide-react'],
  compiler: {
    removeConsole: false,
  },
  reactStrictMode: false,
  swcMinify: true,
}

export default nextConfig
