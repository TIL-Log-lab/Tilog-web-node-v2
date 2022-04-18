import { tilogApi } from "api/core";
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
      reject(error.response.data.message[0].message);
    }
  });
};
