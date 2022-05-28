import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import { wrapper } from "@Redux/store";
import ModalContainer from "@Modal/ModalContainer";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContainer />
      <Toaster />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};
export default wrapper.withRedux(TILogApp);
