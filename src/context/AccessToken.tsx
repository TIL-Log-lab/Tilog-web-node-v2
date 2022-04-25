import axios from "axios";
import { createContext, ReactNode, useState } from "react";

import { tilogApi } from "@Api/core";

export const AccessTokenContext = createContext({
  accessToken: "",
  getAccessToken: () => {
    return;
  },
});

export const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const getAccessToken = async () => {
    try {
      const { data } =
        await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
          "context",
          {
            withCredentials: true,
          }
        );
      setAccessToken(data.accessToken);
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        setAccessToken("");
      } else {
        if (error.response?.status === 401) {
          axios.get("http://localhost:8080/api/logout");
        }
        setAccessToken("");
      }
    }
  };

  return (
    <AccessTokenContext.Provider value={{ accessToken, getAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
