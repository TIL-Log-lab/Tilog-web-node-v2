import { AxiosRequestHeaders } from "axios";

import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { wrapper } from "@Redux/store";
import { accessTokenSlice } from "@Redux/slices";

import isTokenExpired from "@Auth/isTokenExpired";
import getAccessToken from "@Api/server-side/getAccessToken";

import { Store } from "@Redux/interfaces/redux.interface";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export type Callback = (
  store: Store,
  context: GetServerSidePropsContext,
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"] | null
) => Promise<GetServerSidePropsResult<{ [key: string]: any }>>;

interface ServerSideAuthenticationProps {
  callback: Callback;
}

const serverSideAuthentication = ({
  callback,
}: ServerSideAuthenticationProps) =>
  wrapper.getServerSideProps((store) => async (context) => {
    const { headers } = context.req;

    const { isLogin } = store.getState().TILog_Info;

    const { accessToken } = store.getState().accessToken;

    const clientHeaders: AxiosRequestHeaders = {
      "User-Agent": !headers["user-agent"] ? "" : headers["user-agent"],

      Cookie: !headers.cookie ? "" : headers.cookie,
    };

    if (!isLogin) return callback(store, context, null);

    try {
      if (!accessToken || isTokenExpired(accessToken)) {
        const { data } = await getAccessToken(clientHeaders);

        store.dispatch(
          accessTokenSlice.actions.changeToken({
            accessToken: data.accessToken,
          })
        );

        return callback(store, context, data.accessToken);
      }

      return callback(store, context, accessToken);
    } catch (error) {
      return callback(store, context, null);
    }
  });

export default serverSideAuthentication;
