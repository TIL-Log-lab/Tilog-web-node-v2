import "../../styles/globals.css";
import { NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default TILogApp;
