/** @type {import('next').NextConfig} */
const Joi = require("joi");
const schema = Joi.object({
  NEXT_PUBLIC_TILOG_API: Joi.string().required(),
  NEXT_PUBLIC_TILOG_AUTH: Joi.string().required(),
});

(async function () {
  try {
    await schema.validateAsync({
      NEXT_PUBLIC_TILOG_API: process.env.NEXT_PUBLIC_TILOG_API,
      NEXT_PUBLIC_TILOG_AUTH: process.env.NEXT_PUBLIC_TILOG_AUTH,
    });
  } catch (e) {
    throw Error(e);
  }
})();

const nextConfig = {
  reactStrictMode: true,
  env: {

    TILOG_API: process.env.NEXT_PUBLIC_TILOG_API,
    TILOG_AUTH: process.env.NEXT_PUBLIC_TILOG_AUTH,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
