import { NOT_EXIST_MESSAGE } from "@Api/errors/constant/message/notExistMessage";

import {
  CountryUnionType,
  ExceptionInterface,
  ExceptionMessageInterface,
} from "@Api/errors/interface/exception.interface";

export const exception = (
  statusCode: number,
  requestLocation: string,
  message: ExceptionMessageInterface,
  language: CountryUnionType
): ExceptionInterface => {
  if (!message[language]) {
    return {
      statusCode: statusCode,
      requestLocation: requestLocation,
      message: NOT_EXIST_MESSAGE[language],
    };
  }
  return {
    statusCode: statusCode,
    requestLocation: requestLocation,
    message: message[language],
  };
};
