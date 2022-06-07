import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { AxiosRequestHeaders } from "axios";

import { wrapper } from "@Redux/store";
import { TilogApiForAuth } from "@Api/core";
import isTokenExpired from "@Auth/utility/isTokenExpired";
import setAccessTokenToAxiosHeader from "@Auth/utility/setAccessTokenToAxiosHeader";
import getAccessTokenToAxiosHeader from "@Auth/utility/getAccessTokenToAxiosHeader";

import { Store } from "@Redux/interfaces/redux.interface";

type Callback<T> = (
  store: Store,
  context: GetServerSidePropsContext
) => Promise<
  GetServerSidePropsResult<{
    [key: string]: T;
  }>
>;

const serverSideAuthentication = <T>(callback: Callback<T>) =>
  wrapper.getServerSideProps((store) => async (context) => {
    const { headers } = context.req;
    const { isLogin } = store.getState().TILog_Info;
    const accessToken = getAccessTokenToAxiosHeader();

    const clientHeaders: AxiosRequestHeaders = {
      "User-Agent": !headers["user-agent"] ? "" : headers["user-agent"],
      Cookie: !headers.cookie ? "" : headers.cookie,
    };

    // NOTE: 비회원
    if (!isLogin) return callback(store, context);

    // NOTE: accessToken이 없을 때
    if (!accessToken) {
      const { data } = await getAccessToken(clientHeaders);
      setAccessTokenToAxiosHeader(data.accessToken);
      return callback(store, context);
    }

    // NOTE: accessToken이 만료됐을 때
    if (isTokenExpired(accessToken)) {
      const { data } = await getAccessToken(clientHeaders);
      setAccessTokenToAxiosHeader(data.accessToken);
      return callback(store, context);
    }

    // NOTE: accessToken이 사용하능할 때
    return callback(store, context);
  });

export default serverSideAuthentication;

function getAccessToken(headers: AxiosRequestHeaders) {
  return TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken(
    undefined,
    {
      headers: headers,
    }
  );
}
