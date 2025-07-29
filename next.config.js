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
//   experimental: {
//     serverComponentsExternalPackages: [],
//   },
//   trailingSlash: false,
//   swcMinify: true,

//   output: 'standalone'
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
  // Minimal config to avoid routes manifest issues
  trailingSlash: false,
  swcMinify: true,
}

module.exports = nextConfig