/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static exports like Cloudflare Pages
  images: {
    unoptimized: true, // Needed for static export
  },
  typescript: {
    ignoreBuildErrors: true, // Can be risky; consider fixing errors instead
  },
  eslint: {
    ignoreDuringBuilds: true, // Useful for CI/CD, but fix ESLint locally
  },
  transpilePackages: ['lucide-react'], // Good if you need ESM support
  reactStrictMode: true, // Turn this ON to catch more issues in dev
  swcMinify: true, // Faster builds and smaller bundles
  experimental: {
    swcLoader: true, // Keep if using custom fonts
    typedRoutes: true, // ✅ Improves type safety for `app/` routes
    serverActions: false, // Optional if you don’t use server actions
    urlImports: false // Optional, depending on if you're importing via URLs
  }
}

export default nextConfig
