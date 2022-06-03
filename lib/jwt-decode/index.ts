import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

function isTokenExpired(
  token: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
): boolean {
  const payloadBase64 = token.split(".")[1];
  const decodedJson = Buffer.from(payloadBase64, "base64").toString();
  const decoded = JSON.parse(decodedJson);
  const exp = decoded.exp;
  return Date.now() >= exp * 1000;
}

export default isTokenExpired;
