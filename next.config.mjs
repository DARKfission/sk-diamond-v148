/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ Removed "output: 'export'" to allow dynamic API routes
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
  swcMinify: true, // ✅ This is valid again after removal of output: "export"
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
