import errorException from "@Api/errors/exception";
import { isExceptionMessageInterface } from "@Api/errors/interface/messageError";
import { NETWORK_ERROR_MESSAGE } from "@Api/errors/message/networkErrorMessage";
import { NOT_FOUND_MESSAGE } from "@Api/errors/message/notFoundMessage";
import * as TILog from "@til-log.lab/tilog-api";
import axios from "axios";

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
      if (error.response) {
        const resData = error.response.data;
        const isExceptionMessage = isExceptionMessageInterface(resData.message);
        isExceptionMessage
          ? Promise.reject(
              errorException(error.response.status, resData.message)
            )
          : Promise.reject(
              errorException(error.response.status, NOT_FOUND_MESSAGE)
            );
      } else if (error.request) {
        return Promise.reject(errorException(500, NETWORK_ERROR_MESSAGE));
      } else {
        return Promise.reject(errorException(500, NETWORK_ERROR_MESSAGE));
      }
    }
  }
);

export const tilogApi = new TILog.DefaultApi(config);
