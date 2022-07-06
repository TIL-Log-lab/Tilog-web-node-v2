import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "services/open-api/axiosInstance";
import { Option } from "../interface";
const authApi = new TILog.AuthApi(undefined, undefined, axiosInstance);

export const getAccessToken = (userAgent?: string, options?: Option) =>
  authApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
    userAgent,
    options
  );

export const login = (options?: Option) =>
  authApi.usersAuthControllerGithubLogin(options);

export const logout = (options?: Option) =>
  authApi.usersAuthControllerDeleteRefreshToken(options);
