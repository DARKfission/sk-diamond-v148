/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
    ],
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
}

export default nextConfig
