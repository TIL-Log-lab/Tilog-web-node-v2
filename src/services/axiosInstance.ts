import axios from "axios";

import { NETWORK_ERROR_MESSAGE } from "src/constants/messages/error";
import {
  REQUEST_ERROR,
  UNKNOWN,
} from "services/open-api/errors/constant/requestLocation";

import exception from "services/open-api/errors/exception";

import { store } from "@Redux/store";
import { userInfoSlice } from "@Redux/userInfo";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.TILOG_API,
});

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

export default axiosInstance;
