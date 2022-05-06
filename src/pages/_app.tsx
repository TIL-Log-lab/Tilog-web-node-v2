import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import OHeader from "@Organisms/Header";
import UserInfoProvider from "@Hooks/context/user-info/UserInfo";
import { AccessTokenProvider } from "@Hooks/context/access-token/AccessToken";

const queryClient = new QueryClient({});

const TILogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        <AccessTokenProvider>
          <OHeader>
            <Component {...pageProps} />
          </OHeader>
        </AccessTokenProvider>
      </UserInfoProvider>
    </QueryClientProvider>
  );
};

export default TILogApp;
