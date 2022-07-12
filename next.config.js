/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TILOG_API: process.env.TILOG_API,
    TILOG_INFO_COOKIE: process.env.TILOG_INFO_COOKIE,
  },
  images: {
    //TODO: Input Your Image Server Domain
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
