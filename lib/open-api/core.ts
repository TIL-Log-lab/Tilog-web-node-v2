import * as TILog from "@til-log.lab/tilog-api";
import axios from "axios";

import { exception, exceptionResponseMessageFilter } from "@Api/errors";
import { ExceptionResponseBodyInterface } from "@Api/errors/interface/exceptionResponse";

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
      //     //NOTE: 서버에서 응답한 상태
      if (error.response) {
        const resData: ExceptionResponseBodyInterface = error.response.data;

        return Promise.reject(
          exception(
            error.response.status,
            exceptionResponseMessageFilter(resData.message)[lang]
          )
        );
      }
      // NOTE: 서버에서 응답하지 못한 상태
      else if (error.request) {
        return Promise.reject(exception(500, NETWORK_ERROR_MESSAGE[lang]));
      }
      // NOTE: 요청, 응답이 모두 이루지지 않은 상태
      else {
        return Promise.reject(exception(500, NETWORK_ERROR_MESSAGE[lang]));
      }
    }
  }
);

export const tilogApi = new TILog.DefaultApi(config);
