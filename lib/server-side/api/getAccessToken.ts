import { TilogApiForAuth } from "@Api/core";
import { AxiosRequestHeaders } from "axios";

const getAccessToken = (headers: AxiosRequestHeaders) =>
  TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken(
    undefined,
    {
      headers: headers,
    }
  );

export default getAccessToken;
