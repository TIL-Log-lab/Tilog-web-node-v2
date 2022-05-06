import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { AccessTokenProvider } from "@Hooks/context/AccessToken";
import OHeader from "@Organisms/Header";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AccessTokenProvider>
        <OHeader>
          <Component {...pageProps} />
        </OHeader>
      </AccessTokenProvider>
    </QueryClientProvider>
  );
};

export default TILogApp;
