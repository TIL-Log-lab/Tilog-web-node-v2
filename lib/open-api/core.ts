import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { NETWORK_ERROR_MESSAGE } from "@Messages/constants/error";
import { REQUEST_ERROR, UNKNOWN } from "@Api/errors/constant/requestLocation";

import * as TILog from "@til-log.lab/tilog-api";
import exception from "@Api/errors/exception";

import { store } from "@Redux/store";
import { userInfoSlice, accessTokenSlice } from "@Redux/slices";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.TILOG_API,
});
export const TilogApiForAuth = new TILog.AuthApi(
  undefined,
  undefined,
  axiosInstance
);
export const TilogApiForUser = new TILog.UserApi(
  undefined,
  undefined,
  axiosInstance
);
export const TilogApiForCategory = new TILog.CategoryApi(
  undefined,
  undefined,
  axiosInstance
);
export const TilogApiForComment = new TILog.CommentApi(
  undefined,
  undefined,
  axiosInstance
);
export const TilogApiForPost = new TILog.PostApi(
  undefined,
  undefined,
  axiosInstance
);
export const TilogApiForPostLike = new TILog.PostLikeApi(
  undefined,
  undefined,
  axiosInstance
);
createAuthRefreshInterceptor(
  axiosInstance,
  async (failedRequest) => {
    try {
      const { data } = await axiosInstance.post("/auth/access-token");
      const { accessToken } = data;
      const bearer = `Bearer ${accessToken}`;
      store.dispatch(
        accessTokenSlice.actions.changeToken({ accessToken: accessToken })
      );
      axiosInstance.defaults.headers.common["Authorization"] = bearer;
      failedRequest.response.config.headers.Authorization = bearer;
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(failedRequest);
    }
  },
  { pauseInstanceWhileRefreshing: true }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      //NOTE: 서버에서 응답한 상태
      if (error.response) {
        const responseData = error.response.data;
        if (responseData.statusCode === 401) {
          store.dispatch(userInfoSlice.actions.resetUserInfo());
        }
        return Promise.reject(
          exception(
            responseData.statusCode,
            responseData.requestLocation,
            responseData.message
          )
        );
      }

      // NOTE: 서버에서 응답하지 못한 상태
      else if (error.request) {
        return Promise.reject(
          exception(500, REQUEST_ERROR, NETWORK_ERROR_MESSAGE)
        );
      }

      // NOTE: 요청, 응답이 모두 이루지지 않은 상태
      else {
        return Promise.reject(exception(520, UNKNOWN, NETWORK_ERROR_MESSAGE));
      }
    }
    return Promise.reject(
      exception(error.statusCode, error.requestLocation, error.message)
    );
  }
);
