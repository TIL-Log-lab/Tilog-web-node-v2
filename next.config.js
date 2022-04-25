/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TILOG_API: process.env.TILOG_API,
    COOKIE_NAME: process.env.COOKIE_NAME,
    COOKIE_PASSWORD: process.env.COOKIE_PASSWORD,
  },
};

const withTM = require("next-transpile-modules")(["@til-log.lab/tilog-api"]);

module.exports = withTM({
  nextConfig,
});
