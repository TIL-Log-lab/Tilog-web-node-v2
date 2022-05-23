/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  TILOG_API: process.env.TILOG_API,
};

module.exports = nextConfig;
