import "../../styles/globals.css";
import "../../styles/nprogress.css";

import { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "@Components/common/organisms/header";
import useProgressBar from "@Hooks/pages/app/useProgressBar";

const queryClient = new QueryClient({});

const App = ({ Component, pageProps }: AppProps) => {
  useProgressBar();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
