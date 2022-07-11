import ExceptionInterface from "@Library/api/exception/interface";
import { NETWORK_ERROR_MESSAGE } from "@Library/messages/constants/error";
import MessageInterface from "@Library/messages/interface";

export default class UnknownError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: MessageInterface;

  constructor() {
    this.statusCode = 520;
    this.requestLocation = "NetworkError";
    this.message = NETWORK_ERROR_MESSAGE;
  }
}
