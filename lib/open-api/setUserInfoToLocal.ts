import axios from "axios";

import { tilogApi } from "@Api/core";
import { disconnectedMessage } from "@Api/errors/message/disconnectedMessage";
import { notFoundMessage } from "@Api/errors/message/notFoundMessage";

import { isExceptionMessageInterface } from "@Api/errors/interface/messageError";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export default async function setUserInfoToLocal(): Promise<GetMeResponseDto> {
  try {
    const {
      data: { accessToken },
    } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken();

    const { data } = await tilogApi.usersControllerGetMe({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    window.localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) throw disconnectedMessage;
      const resData = error.response.data;
      const isExceptionMessage = isExceptionMessageInterface(resData.message);
      throw isExceptionMessage ? resData.message.ko : notFoundMessage;
    } else {
      throw notFoundMessage;
    }
  }
}
