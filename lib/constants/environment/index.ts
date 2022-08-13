export const TILOG_API = !process.env.TILOG_API
  ? "http://localhost/"
  : process.env.TILOG_API;

export const TILOG_INFO_COOKIE = !process.env.TILOG_INFO_COOKIE
  ? "TILog_Info"
  : process.env.TILOG_INFO_COOKIE;

export const TILOG_AUTH = !process.env.TILOG_AUTH
  ? "http://localhost/auth/github/login"
  : process.env.TILOG_AUTH;
