import { NOT_EXIST_MESSAGE } from "@Api/errors/constant/message/notExistMessage";

import {
  ExceptionInterface,
  ExceptionMessageInterface,
} from "@Api/errors/interface/exception.interface";

export const exception = (
  statusCode: number,
  requestLocation: string,
  message: ExceptionMessageInterface
): ExceptionInterface => {
  if (!message) {
    return {
      statusCode: statusCode,
      requestLocation: requestLocation,
      message: NOT_EXIST_MESSAGE,
    };
  }
  return {
    statusCode: statusCode,
    requestLocation: requestLocation,
    message: message,
  };
};
