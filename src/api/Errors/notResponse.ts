import { ExceptionMessageInterface } from "@Api/Errors/interface/messageError";

export const NotResponse: ExceptionMessageInterface = {
  message: [
    { countryFlag: "ko", message: "서버와 연결이 끊겼습니다." },
    { countryFlag: "en", message: "Disconnected from server." },
  ],
};
