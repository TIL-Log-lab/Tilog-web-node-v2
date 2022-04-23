import { ExceptionMessageInterface } from "@Api/Errors/interface/messageError";

export const NoMessage: ExceptionMessageInterface = {
  message: [
    { countryFlag: "ko", message: "에러 메세지가 존재하지 않습니다." },
    { countryFlag: "en", message: "Error message does not exist." },
  ],
};
