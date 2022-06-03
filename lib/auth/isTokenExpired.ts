import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export default function isTokenExpired(
  token: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
): boolean {
  const payloadBase64 = token.split(".")[1];
  const decodedJson = Buffer.from(payloadBase64, "base64").toString();
  const decoded = JSON.parse(decodedJson);
  const exp = decoded.exp;
  const expired = Date.now() >= exp * 1000;
  return expired;
}
