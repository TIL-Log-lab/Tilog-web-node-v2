import { AxiosRequestHeaders } from "axios";

import { TilogApiForAuth } from "@Api/core";

export default function getAccessToken(headers: AxiosRequestHeaders) {
  return TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken(
    undefined,
    {
      headers: headers,
    }
  );
}
