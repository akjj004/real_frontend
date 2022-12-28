/** @type {import('next').NextConfig} */
// In next.config.js
const { createProxyMiddleware } = require("http-proxy-middleware");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
