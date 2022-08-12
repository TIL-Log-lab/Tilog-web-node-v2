import "../../styles/globals.css";

import { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "@Components/common/organisms/header";

const queryClient = new QueryClient({});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
