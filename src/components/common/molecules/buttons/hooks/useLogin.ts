import { useEffect } from "react";

import { TILOG_AUTH } from "@Library/constants/environment";
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
      TILOG_AUTH,
      "",
      "toolbar=no, menubar=no, width=600, height=700"
    );
  };
};

export default useLogin;
