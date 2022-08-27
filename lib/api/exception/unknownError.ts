import { UNKNOWN_LOCATION } from "@Library/api/exception/constant/requestLocation";
import { INTERNAL_SERVER_ERROR } from "@Library/api/exception/constant/statusCode";
import { NETWORK_ERROR_MESSAGE } from "@Library/messages/constants/error";

import ExceptionInterface from "@Library/api/exception/interface";
import { LanguageInterface } from "@Library/language/interface";

export default class UnknownError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: LanguageInterface;

  constructor() {
    this.statusCode = INTERNAL_SERVER_ERROR;
    this.requestLocation = UNKNOWN_LOCATION;
    this.message = NETWORK_ERROR_MESSAGE;
  }
}
