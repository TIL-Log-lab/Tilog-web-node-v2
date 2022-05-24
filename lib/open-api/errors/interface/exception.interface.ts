import { COUNTRY } from "@Api/errors/constant/country";

export type CountryUnionType = keyof typeof COUNTRY;

export type ExceptionMessageInterface = Record<
  typeof COUNTRY[keyof typeof COUNTRY],
  string
>;

export type ExceptionInterface = {
  statusCode: number;
  requestLocation: string;
  message: ExceptionMessageInterface;
};
