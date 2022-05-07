import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export interface AccessTokenInterface {
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"] | null;
  setStateGetAccessToken: () => void;
}
