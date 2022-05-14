import { NOT_EXIST_MESSAGE } from "@Api/errors/constant/message/notExistMessage";

import {
  CountryLiteralType,
  ExceptionInterface,
  ExceptionMessageInterface,
} from "@Api/errors/interface/exception.interface";

export const exception = (
  statusCode: number,
  requestLocation: string,
  message: ExceptionMessageInterface,
  country: CountryLiteralType
): ExceptionInterface => {
  if (!message[country]) {
    return {
      statusCode: statusCode,
      requestLocation: requestLocation,
      message: NOT_EXIST_MESSAGE[country],
    };
  }
  return {
    statusCode: statusCode,
    requestLocation: requestLocation,
    message: message[country],
  };
};
