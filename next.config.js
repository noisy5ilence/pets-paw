/** @type {import('next').NextConfig} */
const withSVGR = require('next-plugin-svgr');
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

module.exports = withSVGR(nextConfig);
