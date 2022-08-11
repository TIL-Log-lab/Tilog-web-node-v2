import { LanguageInterface } from "@Library/language/interface";

export default interface ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: LanguageInterface;
}
