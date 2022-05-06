import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

import { tilogApi } from "@Api/core";
import { AccessTokenContext } from "@Hooks/context/access-token/AccessToken";

const useHomeQuery = () => {
  const { accessToken, setStateGetAccessToken } =
    useContext(AccessTokenContext);
  return useQuery(
    ["userinfo", accessToken],
    () =>
      tilogApi.usersControllerGetMe({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          if (error.response) return setStateGetAccessToken();
        }
      },
    }
  );
};
export default useHomeQuery;
