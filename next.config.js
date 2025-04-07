/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  // Add basePath if your site is not served from the root
  // basePath: '',
  // Ensure clean URLs
  cleanDistDir: true,
  generateBuildId: async () => {
    return 'build'
  }
}

module.exports = nextConfig 