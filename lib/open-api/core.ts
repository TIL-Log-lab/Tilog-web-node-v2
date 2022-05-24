import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { store } from "@Redux/store";
import getUserLanguage from "@Language";
import * as TILog from "@til-log.lab/tilog-api";
import { userInfoSlice } from "@Redux/userInfo";
import { exception } from "@Api/errors/exception";

import { NETWORK_ERROR_MESSAGE } from "@Api/errors/constant/message/networkErrorMessage";
import { REQUEST_ERROR, UNKNOWN } from "@Api/errors/constant/requestLocation";

const config = new TILog.Configuration({
  basePath: process.env.TILOG_API,
  baseOptions: {
    withCredentials: true,
  },
});

export const TilogApiForAuth = new TILog.AuthApi(config);
export const TilogApiForUser = new TILog.UserApi(config);
export const TilogApiForCategory = new TILog.CategoryApi(config);
export const TilogApiForComment = new TILog.CommentApi(config);
export const TilogApiForPost = new TILog.PostApi(config);
export const TilogApiForPostLike = new TILog.PostLikeApi(config);

createAuthRefreshInterceptor(axios, (failedRequest) =>
  axios
    .get("api/access-token")
    .then((response) => {
      const { accessToken } = response.data;
      const bearer = `Bearer ${accessToken}`;
      axios.defaults.headers.common["Authorization"] = bearer;
      failedRequest.response.config.headers.Authorization = bearer;
      return Promise.resolve();
    })
    .catch(() => {
      return Promise.reject(failedRequest);
    })
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const userCountry = getUserLanguage();
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
            responseData.message,
            userCountry
          )
        );
      }

      // NOTE: 서버에서 응답하지 못한 상태
      else if (error.request) {
        return Promise.reject(
          exception(500, REQUEST_ERROR, NETWORK_ERROR_MESSAGE, userCountry)
        );
      }

      // NOTE: 요청, 응답이 모두 이루지지 않은 상태
      else {
        return Promise.reject(
          exception(520, UNKNOWN, NETWORK_ERROR_MESSAGE, userCountry)
        );
      }
    }
    return Promise.reject(exception(500, UNKNOWN, error.message, userCountry));
  }
);
