
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig

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
  // Add these configurations to fix the routes manifest issue
  experimental: {
    serverComponentsExternalPackages: [],
  },
  trailingSlash: false,
  swcMinify: true,
  // Force proper routes manifest generation
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Ensure proper output for Railway
  output: 'standalone'
}

module.exports = nextConfig