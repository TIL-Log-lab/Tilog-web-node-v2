import axios from "axios";
import { createContext, ReactNode, useState } from "react";

import { tilogApi } from "@Api/core";

import { AccessTokenInterface } from "@Hooks/context/interface/accessToken.interface";
import { isExceptionMessageInterface } from "@Api/errors/interface/messageError";
import { NoMessage } from "@Api/errors/noMessage";

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
        await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
          "context",
          {
            withCredentials: true,
          }
        );
      return setAccessToken(data.accessToken);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) return alert(error.message);
        const resData = error.response.data;
        if (resData.status === 401) {
          axios.get("http://localhost:3000/api/logout");
        }
        isExceptionMessageInterface(resData)
          ? alert(resData.message[0].message)
          : alert(NoMessage);
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
