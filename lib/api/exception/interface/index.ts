import MessageInterface from "lib/messages/interface";

export default interface ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: MessageInterface;
}
