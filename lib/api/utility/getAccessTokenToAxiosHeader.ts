import { AxiosInstance } from "axios";

export default function getAccessTokenToAxiosHeader(
  axios: AxiosInstance
): string | null {
  const accessToken = axios.defaults.headers.common.Authorization;
  if (!accessToken) {
    return null;
  }
  return accessToken.toString().slice(7);
}
