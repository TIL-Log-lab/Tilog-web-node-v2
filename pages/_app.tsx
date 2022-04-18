import type { AppContext, AppProps } from "next/app";
import { config } from "api/core";
import "../styles/globals.css";

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

TILogApp.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};

  const headers = ctx.req?.headers;
  config.baseOptions = { headers: headers };
  console.log(Component);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
export default TILogApp;
