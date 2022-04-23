import axios, { AxiosError } from "axios";
import { tilogApi } from "@Api/core";
import { isExceptionMessageInterface } from "@Interface/messageError";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export const getAccessToken =
  async (): Promise<GetAccessTokenUsingRefreshTokenResponse> => {
    const { data } =
      await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
        "tilog"
      );
    return data;
  };
