import { tilogApi } from "@Api/core";
import { AxiosError } from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AccessTokenContext } from "@Hooks/context/AccessToken";

const useHomeQuery = () => {
  const { accessToken, getAccessToken } = useContext(AccessTokenContext);
  return useQuery(
    ["userinfo", accessToken],
    () =>
      tilogApi.usersControllerGetMe({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    {
      enabled: !!accessToken,
      onError: (e: AxiosError) => {
        if (e.response?.status) {
          getAccessToken();
        }
      },
    }
  );
};
export default useHomeQuery;
