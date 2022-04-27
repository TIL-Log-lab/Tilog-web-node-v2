import { COUNTRY } from "@Api/errors/constant/country";
import { ExceptionMessageInterface } from "@Api/errors/interface/messageError.interface";

export const notFoundMessage: ExceptionMessageInterface = {
  message: [
    { countryFlag: COUNTRY.ko, message: "에러 메세지가 존재하지 않습니다." },
    { countryFlag: COUNTRY.en, message: "Error message does not exist." },
  ],
};
