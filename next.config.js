/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TILOG_API: "http://localhost",
    TILOG_AUTH: "http://localhost/auth/github/login",
  },
  images: {
    //TODO: Input Your Image Server Domain
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
