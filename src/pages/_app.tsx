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
      <div className="m-auto max-w-[1280px] h-20 mt-20 items-center px-5">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
