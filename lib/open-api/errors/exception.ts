import { NOT_EXIST_MESSAGE } from "@Messages/constants/error";

import ExceptionInterface from "@Api/errors/interfaces";
import MessageInterface from "@Messages/interfaces";

const exception = (
  statusCode: number,
  requestLocation: string,
  message: MessageInterface
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

export default exception;
