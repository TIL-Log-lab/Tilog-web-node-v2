import MessageInterface from "constants/messages/interfaces";

type ExceptionInterface = {
  statusCode: number;
  requestLocation: string;
  message: MessageInterface;
};
export default ExceptionInterface;
