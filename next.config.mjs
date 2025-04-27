/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // This will completely ignore all TypeScript errors
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable type checking during build
  experimental: {
    typedRoutes: false
  }
}

export default nextConfig
