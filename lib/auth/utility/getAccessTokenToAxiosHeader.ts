import axiosInstance from "@Api/core";

export default function getAccessTokenToAxiosHeader(): string | null {
  const accessToken = axiosInstance.defaults.headers.common["Authorization"];
  if (!accessToken) {
    return null;
  }
  return accessToken.toString().slice(7);
}
