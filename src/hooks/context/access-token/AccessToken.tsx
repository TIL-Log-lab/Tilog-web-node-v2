import toast from "react-hot-toast";
import { createContext, ReactNode, useContext, useState } from "react";

import { tilogApi } from "@Api/core";
import { UserInfoContext } from "@Context/user-info/UserInfo";

import { AccessTokenInterface } from "@Context/access-token/interface/accessToken.interface";
import { ExceptionFilterInterface } from "@Api/errors/interface/exception";

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
    } catch (e) {
      const error = e as ExceptionFilterInterface;
      if (error.statusCode === 401) {
        const userInfo = window.localStorage.getItem("userInfo");
        if (userInfo) {
          toast.error(error.message);
          handleLogout();
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
