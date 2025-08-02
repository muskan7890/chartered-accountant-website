/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add these for Railway compatibility
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: []
  },
  trailingSlash: false,
  swcMinify: true,
  // Ensure proper routing
  generateEtags: false,
}

module.exports = nextConfig