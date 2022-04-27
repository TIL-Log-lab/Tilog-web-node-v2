import { AxiosError } from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

import { tilogApi } from "@Api/core";

import { AccessTokenContext } from "@Hooks/context/AccessToken";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

const useHomeQuery = (
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"] | null
) => {
  const { getAccessToken } = useContext(AccessTokenContext);
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
