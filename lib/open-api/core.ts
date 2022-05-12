import axios from "axios";

import * as TILog from "@til-log.lab/tilog-api";
import { exceptionExistMessageFilter, exceptionFilter } from "@Api/errors";

import { NETWORK_ERROR_MESSAGE } from "@Api/errors/constant/message/networkErrorMessage";

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
      const lang = window.navigator.language.includes("ko") ? "ko" : "en";
      //NOTE: 서버에서 응답한 상태
      if (error.response) {
        const filteredRes = exceptionExistMessageFilter(error.response.data);
        return Promise.reject(
          exceptionFilter(
            filteredRes.statusCode,
            filteredRes.requestLocation,
            filteredRes.message[lang]
          )
        );
      }
      // NOTE: 서버에서 응답하지 못한 상태
      else if (error.request) {
        return Promise.reject(
          exceptionFilter(500, "REQUEST_ERROR", NETWORK_ERROR_MESSAGE[lang])
        );
      }
      // NOTE: 요청, 응답이 모두 이루지지 않은 상태
      else {
        return Promise.reject(
          exceptionFilter(500, "UNKNOWN", NETWORK_ERROR_MESSAGE[lang])
        );
      }
    }
  }
);

export const tilogApi = new TILog.DefaultApi(config);
