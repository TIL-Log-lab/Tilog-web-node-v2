import axios from "axios";
import { tilogApi } from "@Api/core";
import { isExceptionMessageInterface } from "@Api/errors/interface/messageError";
import { disconnectedServer } from "@Api/errors/disconnectedServer";
import { notFoundMessage } from "@Api/errors/notFoundMessage";

export default async function setUserInfoToLocal() {
  try {
    const {
      data: { accessToken },
    } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken();

    const { data } = await tilogApi.usersControllerGetMe({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    window.localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      return error;
    }
    if (!error.response) return disconnectedServer;
    const resData = error.response.data;
    const isExceptionMessage = isExceptionMessageInterface(resData.message);
    return isExceptionMessage ? resData.message.ko : notFoundMessage;
  }
}
