import { useEffect } from "react";

import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const useLogin = () => {
  const { refetch } = useGetMeQuery();
  useEffect(() => {
    window.addEventListener(
      "message",
      async (event) => {
        if (event.origin !== window.location.origin) return;
        if (event.data === "login") {
          refetch();
        }
      },
      false
    );
  }, [refetch]);
  return () => {
    return window.open(
      process.env.TILOG_AUTH,
      "",
      "toolbar=no, menubar=no, width=600, height=700"
    );
  };
};

export default useLogin;
