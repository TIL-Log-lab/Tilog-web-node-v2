import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

import { tilogApi } from "@Api/core";

export const getAccessToken =
  async (): Promise<GetAccessTokenUsingRefreshTokenResponse> => {
    const { data } =
      await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
        "tilog"
      );
    return data;
  };
