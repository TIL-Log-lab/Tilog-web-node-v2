import { AxiosError } from "axios";
import type { AppContext, AppProps } from "next/app";
import "../styles/globals.css";

import { config } from "@Api/core";
import { getUserInfo } from "@Api/getUserInfo";
import { getAccessToken } from "@Api/getAccessToken";
import { isExceptionMessageInterface } from "@Api/Errors/interface/messageError";
import { NoMessage } from "@Api/Errors/noMessage";
import { NotResponse } from "@Api/Errors/notResponse";

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
    return { pageProps };
  }
  const cookie = headers.cookie;

  if (!cookie) {
    const pageProps = props;
    return { pageProps };
  }
  if (!cookie.includes("refreshToken")) {
    const pageProps = props;
    return { pageProps };
  }

  try {
    const getAccessTokenResponse = await getAccessToken();
    const getUSerInfoResponse = await getUserInfo(
      getAccessTokenResponse.accessToken
    );
    const pageProps = {
      ...props,
      accessToken: getAccessTokenResponse.accessToken,
      userInfo: getUSerInfoResponse,
    };
    return { pageProps };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errorData = axiosError.response.data ?? [];
      const error = isExceptionMessageInterface(errorData)
        ? errorData
        : NoMessage;
      const pageProps = { ...props, error: error };
      return { pageProps };
    } else {
      const pageProps = { ...props, error: NotResponse };
      return { pageProps };
    }
  }
};
export default TILogApp;
