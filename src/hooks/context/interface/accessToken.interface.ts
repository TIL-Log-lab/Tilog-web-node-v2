import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";
import { AxiosError } from "axios";

export interface AccessTokenInterface {
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"] | null;
  setStateGetAccessToken: () => void;
  accessTokenFetchError: AxiosError | null;
}
