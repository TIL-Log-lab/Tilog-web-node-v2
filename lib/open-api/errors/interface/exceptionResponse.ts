import { COUNTRY } from "@Api/errors/constant/country";

export type ExceptionResponseMessageInterface = Partial<
  Record<typeof COUNTRY[keyof typeof COUNTRY], string>
>;

export type ExceptionResponseBodyInterface = {
  statusCode: number;
  requestLocation: string;
  message: ExceptionResponseMessageInterface;
};
