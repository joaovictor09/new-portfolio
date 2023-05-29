/** @type {import('next').NextConfig} */
const nextConfig = {
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
  env: {
    EMAIL_JS_SERVICE_ID: 'service_xb9td8u',
    EMAIL_JS_TEMPLATE_ID: 'template_33n7uut',
  },
}

module.exports = nextConfig
