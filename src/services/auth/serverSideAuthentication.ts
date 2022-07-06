import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { AxiosRequestHeaders } from "axios";

import { wrapper } from "@Redux/store";
import { getAccessToken } from "src/services/adapter";
import isTokenExpired from "src/services/auth/utility/isTokenExpired";
import setAccessTokenToAxiosHeader from "src/services/auth/utility/setAccessTokenToAxiosHeader";
import getAccessTokenToAxiosHeader from "src/services/auth/utility/getAccessTokenToAxiosHeader";

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
    const { isLogin } = store.getState().TILog_Info;
    const accessToken = getAccessTokenToAxiosHeader();

    const { headers } = context.req;
    const clientHeaders: AxiosRequestHeaders = {
      "User-Agent": !headers["user-agent"] ? "" : headers["user-agent"],
      Cookie: !headers.cookie ? "" : headers.cookie,
    };

    if (!isLogin) return callback(store, context);
    try {
      // NOTE: accessToken이 없을 때
      if (!accessToken) {
        const { data } = await getAccessToken(undefined, {
          headers: clientHeaders,
        });
        setAccessTokenToAxiosHeader(data.accessToken);
        return callback(store, context);
      }

      // NOTE: accessToken이 만료됐을 때
      if (isTokenExpired(accessToken)) {
        const { data } = await getAccessToken(undefined, {
          headers: clientHeaders,
        });
        setAccessTokenToAxiosHeader(data.accessToken);
        return callback(store, context);
      }
    } catch (error) {
      return callback(store, context);
    }

    // NOTE: accessToken이 사용 가능 할 때
    return callback(store, context);
  });

export default serverSideAuthentication;
