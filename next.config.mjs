/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // This will allow the build to succeed even with type errors
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
