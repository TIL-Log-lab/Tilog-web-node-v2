import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import OHeader from "@Organisms/Header";
import UserInfoProvider from "@Context/user-info/UserInfo";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <OHeader>
          <Toaster />
          <Component {...pageProps} />
        </OHeader>
      </UserInfoProvider>
    </QueryClientProvider>
  );
};

export default TILogApp;
