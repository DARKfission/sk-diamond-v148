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
}

export default nextConfig
