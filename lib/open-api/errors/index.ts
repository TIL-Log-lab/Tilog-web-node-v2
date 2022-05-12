import { NOT_EXIST_MESSAGE } from "@Api/errors/constant/message/notExistMessage";
import {
  Country,
  ExceptionExistMessageFilterInterface,
  ExceptionFilterInterface,
  ExceptionMessageInterface,
} from "@Api/errors/interface/exception";

// NOTE: Client에대한 에러 필터
export function exceptionFilter(
  statusCode: number,
  requestLocation: string,
  message: ExceptionMessageInterface[Country]
): ExceptionFilterInterface {
  return {
    statusCode: statusCode,
    requestLocation: requestLocation,
    message: message,
  };
}

// NOTE:  메세지가 존재하는지 확인
export const exceptionExistMessageFilter = (
  resData: ExceptionExistMessageFilterInterface
): ExceptionExistMessageFilterInterface => {
  if (!resData.message) {
    return {
      statusCode: resData.statusCode,
      requestLocation: resData.requestLocation,
      message: NOT_EXIST_MESSAGE,
    };
  }
  return {
    statusCode: resData.statusCode,
    requestLocation: resData.requestLocation,
    message: resData.message,
  };
};
