import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import { tilogApi } from "@Api/core";

export const getUserInfo = async (
  accessToken: string
): Promise<GetMeResponseDto> => {
  const { data } = await tilogApi.usersControllerGetMe({
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return data;
};
