import { COUNTRY } from "@Api/errors/constant/country";

export interface ExceptionMessageInterface {
  message: ExceptionMessageItemInterface[];
}
export interface ExceptionMessageItemInterface {
  countryFlag: typeof COUNTRY[keyof typeof COUNTRY];
  message: string;
}

export const isExceptionMessageInterface = (
  object: any
): object is ExceptionMessageInterface => {
  const hadMessage = object ? "message" in object : false;
  const hadCountryFlag = object?.message[0]?.countryFlag;
  return !!(hadMessage && hadCountryFlag);
};
