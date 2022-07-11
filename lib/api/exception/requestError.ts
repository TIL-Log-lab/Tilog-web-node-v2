import { INTERNAL_SERVER_ERROR } from "@Library/api/exception/constant/statusCode";
import ExceptionInterface from "@Library/api/exception/interface";
import { NETWORK_ERROR_MESSAGE } from "@Library/messages/constants/error";
import MessageInterface from "@Library/messages/interface";

export default class RequestError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: MessageInterface;

  constructor() {
    this.statusCode = INTERNAL_SERVER_ERROR;
    this.requestLocation = "NetworkError";
    this.message = NETWORK_ERROR_MESSAGE;
  }
}
