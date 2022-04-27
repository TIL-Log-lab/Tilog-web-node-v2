import axios, { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { tilogApi } from "@Api/core";

import { AccessTokenInterface } from "@Hooks/context/interface/accessToken.interface";

const store = {
  accessToken: null,
  setStateGetAccessToken: () => void 0,
  accessTokenFetchError: null,
};

export const AccessTokenContext = createContext<AccessTokenInterface>(store);

export const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<
    AccessTokenInterface["accessToken"] | null
  >(null);
  const [accessTokenFetchError, setAccessTokenFetchError] =
    useState<AxiosError | null>(null);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  const setStateGetAccessToken = useCallback(async () => {
    fetchAccessToken();
  }, []);

  const fetchAccessToken = async () => {
    try {
      const { data } =
        await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
          "context",
          {
            withCredentials: true,
          }
        );
      setAccessToken(data.accessToken);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          axios.get("http://localhost:8080/api/logout");
        }
        setAccessTokenFetchError(e);
      }
    }
  };
  return (
    <AccessTokenContext.Provider
      value={{
        accessToken,
        setStateGetAccessToken,
        accessTokenFetchError,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};
