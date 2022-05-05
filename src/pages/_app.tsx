import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

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
