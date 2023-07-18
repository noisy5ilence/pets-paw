/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const withPWA = require('next-pwa')({
  register: true,
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

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

module.exports = withPlugins([[withSVGR], [withPWA]], nextConfig);
