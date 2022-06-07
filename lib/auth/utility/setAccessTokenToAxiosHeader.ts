import axiosInstance from "@Api/core";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export default function setAccessTokenToAxiosHeader(
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
) {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `bearer ${accessToken}`;
}
