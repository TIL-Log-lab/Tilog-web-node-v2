import { store } from "@Redux/store";

import { getAccessToken } from "src/services/adapter";
import isTokenExpired from "src/services/auth/utility/isTokenExpired";
import setAccessTokenToAxiosHeader from "src/services/auth/utility/setAccessTokenToAxiosHeader";
import getAccessTokenToAxiosHeader from "src/services/auth/utility/getAccessTokenToAxiosHeader";

const clientSideAuthentication = async <T>(tilogApi: () => T): Promise<T> => {
  const { isLogin } = store.getState().TILog_Info;
  const accessToken = getAccessTokenToAxiosHeader();

  if (!isLogin) return tilogApi();

  // NOTE: accessToken이 없을 때
  if (!accessToken) {
    const { data } = await getAccessToken();
    setAccessTokenToAxiosHeader(data.accessToken);
    return tilogApi();
  }

  // NOTE: accessToken이 만료됐을 때
  if (isTokenExpired(accessToken)) {
    const { data } = await getAccessToken();
    setAccessTokenToAxiosHeader(data.accessToken);
    return tilogApi();
  }

  // NOTE: accessToken이 사용 가능 할 때
  return tilogApi();
};
export default clientSideAuthentication;
