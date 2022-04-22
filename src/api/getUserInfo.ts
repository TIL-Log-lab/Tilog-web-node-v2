import axios from "axios";
import { tilogApi } from "@Api/core";
import { isExceptionMessageInterface } from "@Interface/messageError";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export const getUserInfo = async (
  accessToken: string
): Promise<GetMeResponseDto | string> => {
  try {
    const { data } = await tilogApi.usersControllerGetMe({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return "";
    const errorData = error.response?.data ?? [];
    if (!isExceptionMessageInterface(errorData)) return "";
    return errorData.message[0].message;
  }
};
