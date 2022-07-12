import ExceptionInterface from "@Library/api/exception/interface";
import { NOT_EXIST_MESSAGE } from "@Library/messages/constants/error";
import MessageInterface from "@Library/messages/interface";

export default class ResponseError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: MessageInterface;

  constructor(errorObject: ExceptionInterface) {
    this.statusCode = errorObject.statusCode;
    this.requestLocation = errorObject.requestLocation;
    this.message = errorObject.message;

    if (!this.message) {
      this.message = NOT_EXIST_MESSAGE;
    }
  }
}
