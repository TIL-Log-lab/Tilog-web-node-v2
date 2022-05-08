import { COUNTRY } from "@Api/errors/constant/country";

export type ExceptionMessageInterface = Record<
  typeof COUNTRY[keyof typeof COUNTRY],
  string
>;

export type ExceptionBodyInterface = {
  statusCode: number;
  message: string;
};
