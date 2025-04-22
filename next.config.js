/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using app router, you might need this
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
