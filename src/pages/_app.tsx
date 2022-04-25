import type { AppContext, AppProps } from "next/app";
import "../styles/globals.css";
import { getIronSession } from "iron-session";
import { cookieConfig } from "@Constants/cookieConfig";
import { AccessTokenProvider } from "src/context/AccessToken";
import { QueryClient, QueryClientProvider } from "react-query";

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

  if (ctx.req && ctx.res) {
    const session = await getIronSession(ctx.req, ctx.res, cookieConfig);

    const pageProps = session;
    return { pageProps };
  }

  const pageProps = {};
  return { pageProps };
};

export default TILogApp;
