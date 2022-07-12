import httpClient from "@Library/api/httpClient";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export default function setAccessTokenToAxiosHeader(
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
) {
  httpClient.http.defaults.headers.common.Authorization = `bearer ${accessToken}`;
}
