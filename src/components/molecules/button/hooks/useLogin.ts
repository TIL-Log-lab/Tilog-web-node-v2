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
};

export default useLogin;
