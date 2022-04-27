import { COUNTRY } from "@Api/errors/constant/country";
import { ExceptionMessageInterface } from "@Api/errors/interface/messageError.interface";

export const NotResponse: ExceptionMessageInterface = {
  message: [
    { countryFlag: COUNTRY.ko, message: "서버와 연결이 끊겼습니다." },
    { countryFlag: COUNTRY.en, message: "Disconnected from server." },
  ],
};
