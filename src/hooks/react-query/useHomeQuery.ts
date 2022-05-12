import { useContext } from "react";
import { useQuery } from "react-query";

import { tilogApi } from "@Api/core";
import { AccessTokenContext } from "@Context/access-token/AccessToken";

import { ExceptionFilterInterface } from "@Api/errors/interface/exception";

const useHomeQuery = () => {
  const { accessToken, setStateGetAccessToken } =
    useContext(AccessTokenContext);
  return useQuery(
    ["userInfo", accessToken],
    () =>
      tilogApi.usersControllerGetMe({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      onError: (e: ExceptionFilterInterface) => {
        if (e.statusCode === 401) setStateGetAccessToken();
      },
    }
  );
};
export default useHomeQuery;
