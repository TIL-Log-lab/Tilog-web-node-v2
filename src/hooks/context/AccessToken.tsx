import axios, { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { tilogApi } from "@Api/core";

import { AccessTokenInterface } from "@Hooks/context/interface/accessTokenInterface";

const store = {
  accessToken: null,
  getAccessToken: () => void 0,
  error: null,
};

export const AccessTokenContext = createContext<AccessTokenInterface>(store);

export const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<
    AccessTokenInterface["accessToken"] | null
  >(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  const getAccessToken = useCallback(async () => {
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
        setError(e);
      }
    }
  };
  return (
    <AccessTokenContext.Provider value={{ accessToken, getAccessToken, error }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
