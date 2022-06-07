import { store } from "@Redux/store";

import { TilogApiForAuth } from "@Api/core";
import isTokenExpired from "@Auth/utility/isTokenExpired";
import setAccessTokenToAxiosHeader from "@Auth/utility/setAccessTokenToAxiosHeader";
import getAccessTokenToAxiosHeader from "@Auth/utility/getAccessTokenToAxiosHeader";

const clientSideAuthentication = async <T>({
  tilogApi,
}: {
  tilogApi: () => T;
}): Promise<T> => {
  const { isLogin } = store.getState().TILog_Info;
  const accessToken = getAccessTokenToAxiosHeader();

  // NOTE: 비회원
  if (!isLogin) return tilogApi();

  // NOTE: accessToken이 없을 때
  if (!accessToken) {
    const { data } =
      await TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken();
    setAccessTokenToAxiosHeader(data.accessToken);
    return tilogApi();
  }

  const accessTokenToString = accessToken.toString().slice(7);
  // NOTE: accessToken이 만료됐을 때
  if (isTokenExpired(accessTokenToString)) {
    const { data } =
      await TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken();
    setAccessTokenToAxiosHeader(data.accessToken);
    return tilogApi();
  }
  // NOTE: accessToken이 사용하능할 때
  return tilogApi();
};
export default clientSideAuthentication;
