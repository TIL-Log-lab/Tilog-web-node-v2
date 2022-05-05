import "../../styles/globals.css";
import { getIronSession } from "iron-session";
import type { AppContext, AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { cookieConfig } from "@Iron/cookieConfig";
import { AccessTokenProvider } from "@Hooks/context/AccessToken";

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

export default TILogApp;
