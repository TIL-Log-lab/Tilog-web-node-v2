import { useEffect } from "react";

import useGetMe from "@Hooks/react-query/useGetMe";

const useLogin = () => {
  const { refetch } = useGetMe();
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
