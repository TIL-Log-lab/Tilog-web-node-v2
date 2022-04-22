import axios from "axios";
import { tilogApi } from "@Api/core";
import { isExceptionMessageInterface } from "@Interface/messageError";

export const getAccessToken = async (): Promise<string> => {
  try {
    const {
      data: { accessToken },
    } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
      "tilog"
    );
    return accessToken;
  } catch (error) {
    if (!axios.isAxiosError(error)) return "";
    const errorData = error.response?.data ?? [];
    if (!isExceptionMessageInterface(errorData)) return "";
    return errorData.message[0].message;
  }
};
