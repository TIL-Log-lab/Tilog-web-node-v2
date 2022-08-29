import "../../styles/globals.css";
import "../../styles/nprogress.css";

import { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import withAuth from "@Components/common/hoc/withAuth";
import { AuthProvider } from "@Hooks/context/auth/AuthProvider";
import useProgressBar from "@Hooks/pages/app/useProgressBar";

const queryClient = new QueryClient({});

const App = ({ Component, pageProps }: AppProps) => {
  useProgressBar();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initUserInfo={pageProps.initUserInfo}>
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default App;
App.getInitialProps = withAuth();
