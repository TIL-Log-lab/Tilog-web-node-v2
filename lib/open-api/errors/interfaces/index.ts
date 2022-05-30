import MessageInterface from "@Messages/interfaces";

type ExceptionInterface = {
  statusCode: number;
  requestLocation: string;
  message: MessageInterface;
};
export default ExceptionInterface;
