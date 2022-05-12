import { COUNTRY } from "@Api/errors/constant/country";

export type ExceptionMessageInterface = Record<
  typeof COUNTRY[keyof typeof COUNTRY],
  string
>;
export type Country = keyof typeof COUNTRY;

export type ExceptionFilterInterface = {
  statusCode: number;
  requestLocation: string;
  message: ExceptionMessageInterface[Country];
};

export type ExceptionExistMessageFilterInterface = {
  statusCode: number;
  requestLocation: string;
  message: ExceptionMessageInterface;
};
