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

  const props = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  const headers = ctx.req?.headers;
  config.baseOptions = { headers: headers };

  if (!headers) {
    const pageProps = props;
    return pageProps;
  }
  const cookie = headers.cookie;

  if (!cookie) {
    const pageProps = props;
    return pageProps;
  }
  if (!cookie.includes("refreshToken")) {
    const pageProps = props;
    return pageProps;
  }

  const { accessToken } = await getAccessToken();
  const userInfo = await getUserInfo(accessToken);

  const pageProps = {
    ...props,
    accessToken,
    userInfo,
  };

  return { pageProps };
};
export default TILogApp;
