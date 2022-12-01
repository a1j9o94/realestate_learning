/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
          port: '',
          pathname: '/image/**',
        },
      ],
    },
  }
