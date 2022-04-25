import axios, { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";

import { tilogApi } from "@Api/core";

export const AccessTokenContext = createContext({});

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
        return;
      }
      if (error.response) {
        if (error.response.status === 401) {
          axios.get("http://localhost:8080/api/logout");
        }
        setAccessToken("");
        return;
      }
    }
  };

  return (
    <AccessTokenContext.Provider value={{ accessToken, getAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
