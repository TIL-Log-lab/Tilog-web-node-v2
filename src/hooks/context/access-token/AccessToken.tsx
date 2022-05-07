import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

import { tilogApi } from "@Api/core";
import { disconnectedServer } from "@Api/errors/disconnectedServer";
import { UserInfoContext } from "@Context/user-info/UserInfo";

import { AccessTokenInterface } from "@Context/access-token/interface/accessToken.interface";

const store = {
  accessToken: null,
  setStateGetAccessToken: () => void 0,
};

export const AccessTokenContext = createContext<AccessTokenInterface>(store);

export const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const { handleLogout } = useContext(UserInfoContext);
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
          const userInfo = window.localStorage.getItem("userInfo");
          if (userInfo) {
            alert(resData.message.ko);
            handleLogout();
          }
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
