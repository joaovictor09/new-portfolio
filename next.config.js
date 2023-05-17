/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
