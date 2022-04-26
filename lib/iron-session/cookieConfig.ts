export const cookieConfig = {
  cookieName: !process.env.COOKIE_NAME
    ? "test_user_info"
    : process.env.COOKIE_NAME,
  password: !process.env.COOKIE_PASSWORD
    ? "tilog_test_password_at_least_32_characters_long"
    : process.env.COOKIE_PASSWORD,
};
