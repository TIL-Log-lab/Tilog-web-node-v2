import axios from "axios";
import { tilogApi } from "api/core";
import { isExceptionMessageInterface } from "interface/MessageError";
export const getUserInfo = () => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const {
        data: { accessToken },
      } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
        "tilog"
      );
      resolve(accessToken);
    } catch (error) {
      if (!axios.isAxiosError(error)) return reject("");
      const errorData = error.response?.data ?? [];
      if (!isExceptionMessageInterface(errorData)) return reject("");
      reject(errorData.message[0].message);
    }
  });
};
