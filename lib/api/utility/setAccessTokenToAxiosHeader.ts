import { tilogApi } from "@Library/api/http-client";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export default function setAccessTokenToAxiosHeader(
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
) {
  tilogApi.http.defaults.headers.common.Authorization = `bearer ${accessToken}`;
}
