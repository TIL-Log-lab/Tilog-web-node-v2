import "../../styles/globals.css";
import { getIronSession } from "iron-session";
import type { AppContext, AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { AccessTokenProvider } from "@Hooks/context/AccessToken";

import { cookieConfig } from "@Iron/cookieConfig";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AccessTokenProvider>
        <Component {...pageProps} />
      </AccessTokenProvider>
    </QueryClientProvider>
  );
};

TILogApp.getInitialProps = async (context: AppContext) => {
  const { ctx } = context;

  if (!(ctx.req && ctx.res)) return { pageProps: {} };

  const session = await getIronSession(ctx.req, ctx.res, cookieConfig);
  return { pageProps: session };
};

export default TILogApp;
