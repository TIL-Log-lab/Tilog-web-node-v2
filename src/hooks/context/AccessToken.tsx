import axios from "axios";
import { createContext, ReactNode, useState } from "react";

import { tilogApi } from "@Api/core";
import { disconnectedServer } from "@Api/errors/disconnectedServer";

import { AccessTokenInterface } from "@Hooks/context/interface/accessToken.interface";

const store = {
  accessToken: null,
  setStateGetAccessToken: () => void 0,
};

export const AccessTokenContext = createContext<AccessTokenInterface>(store);

export const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<
    AccessTokenInterface["accessToken"] | null
  >(null);

  const setStateGetAccessToken = async () => {
    try {
      const { data } =
        await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken();
      return setAccessToken(data.accessToken);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) return alert(disconnectedServer);
        const resData = error.response.data;
        if (resData.statusCode === 401) {
          return axios.get("http://localhost:3000/api/logout");
        }
      }
    }
  };

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setStateGetAccessToken }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};
