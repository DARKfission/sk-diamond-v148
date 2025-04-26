/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is crucial for static site generation
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

export default nextConfig
