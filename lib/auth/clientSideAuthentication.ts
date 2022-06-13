import { store } from "@Redux/store";

import { getAccessToken } from "@Api/adapter";
import isTokenExpired from "@Auth/utility/isTokenExpired";
import setAccessTokenToAxiosHeader from "@Auth/utility/setAccessTokenToAxiosHeader";
import getAccessTokenToAxiosHeader from "@Auth/utility/getAccessTokenToAxiosHeader";

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
  // NOTE: accessToken이 사용하능할 때
  return tilogApi();
};
export default clientSideAuthentication;
