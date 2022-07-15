import "../../styles/globals.css";
import { NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import MainBox from "@Components/box/MainBox";
import Header from "@Components/organisms/header/Header";
import { wrapper } from "@Redux/store";

type TILogAppContext = NextPageContext & AppContext;

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <MainBox>
        <Header />
        <Component {...pageProps} />
      </MainBox>
    </QueryClientProvider>
  );
};

TILogApp.getInitialProps = wrapper.getInitialPageProps(
  () =>
    ({ ctx, Component }: TILogAppContext) => {
      return !Component.getInitialProps
        ? {}
        : { ...Component.getInitialProps(ctx) };
    }
);
export default wrapper.withRedux(TILogApp);
