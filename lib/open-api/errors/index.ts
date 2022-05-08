import { NOT_FOUND_MESSAGE } from "@Api/errors/constant/message/notFoundMessage";
import {
  ExceptionBodyInterface,
  ExceptionMessageInterface,
} from "@Api/errors/interface/exception";

export function exception(
  statusCode: number,
  message: string
): ExceptionBodyInterface {
  return {
    statusCode: statusCode,
    message: message,
  };
}

// NOTE:  메세지가 존재하는지 확인
export const exceptionResponseMessageFilter = (
  object: any
): ExceptionMessageInterface => {
  if (!object) return NOT_FOUND_MESSAGE;
  if (!(object instanceof Object)) return NOT_FOUND_MESSAGE;
  return object;
};
