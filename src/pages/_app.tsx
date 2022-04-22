import type { AppContext, AppProps } from "next/app";
import "../styles/globals.css";
import { config } from "@Api/core";
import { getUserInfo } from "@Api/getUserInfo";
import { getAccessToken } from "@Api/getAccessToken";

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

TILogApp.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};

  const headers = ctx.req?.headers;
  config.baseOptions = { headers: headers };

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!headers) return { pageProps };
  const cookie = headers.cookie;
  if (!cookie || !cookie.includes("refreshToken")) return { pageProps };

  const accessToken = await getAccessToken();
  const userInfo = await getUserInfo(accessToken);
  pageProps = {
    accessToken: accessToken,
    userInfo: userInfo,
  };
  return { pageProps };
};
export default TILogApp;
