/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["@til-log.lab/tilog-api"]);

module.exports = withTM({
  nextConfig,
});
