import axios from "axios";

import { exception } from "@Api/errors/exception";
import getUserLanguage from "@Language";
import * as TILog from "@til-log.lab/tilog-api";

import { NETWORK_ERROR_MESSAGE } from "@Api/errors/constant/message/networkErrorMessage";
import { REQUEST_ERROR, UNKNOWN } from "@Api/errors/constant/requestLocation";

const config = new TILog.Configuration({
  basePath: process.env.TILOG_API,
  baseOptions: {
    withCredentials: true,
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const userCountry = getUserLanguage();

      //NOTE: 서버에서 응답한 상태
      if (error.response) {
        const responseData = error.response.data;
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
  }
);

export const tilogApi = new TILog.DefaultApi(config);
