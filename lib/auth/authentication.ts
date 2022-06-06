import { AxiosRequestHeaders } from "axios";

import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { wrapper } from "@Redux/store";

import isTokenExpired from "@Auth/isTokenExpired";
import getAccessToken from "@Api/server-side/getAccessToken";

import { Store } from "@Redux/interfaces/redux.interface";
import { axiosInstance } from "@Api/core";

export type Callback = (
  store: Store,
  context: GetServerSidePropsContext
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
    const accessToken = axiosInstance.defaults.headers.common["Authorization"];

    const clientHeaders: AxiosRequestHeaders = {
      "User-Agent": !headers["user-agent"] ? "" : headers["user-agent"],

      Cookie: !headers.cookie ? "" : headers.cookie,
    };

    if (!isLogin) return callback(store, context);

    try {
      if (!accessToken) {
        const { data } = await getAccessToken(clientHeaders);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `bearer ${data.accessToken}`;

        return callback(store, context);
      }
      const accessTokenToString = axiosInstance.defaults.headers.common[
        "Authorization"
      ]
        .toString()
        .slice(7);
      if (isTokenExpired(accessTokenToString)) {
        const { data } = await getAccessToken(clientHeaders);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `bearer ${data.accessToken}`;
        return callback(store, context);
      }
      return callback(store, context);
    } catch (error) {
      return callback(store, context);
    }
  });

export default serverSideAuthentication;
