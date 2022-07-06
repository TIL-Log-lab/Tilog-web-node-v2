import { NOT_EXIST_MESSAGE } from "src/constants/messages/error";

import ExceptionInterface from "services/open-api/errors/interfaces";
import MessageInterface from "constants/messages/interfaces";

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
