import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

export default interface GetMeResponseTransFormSettingsDto {
  id: GetMeResponseDto["userId"];
  avatar: GetMeResponseDto["avatar"];
  name: GetMeResponseDto["name"];
  createdAt: GetMeResponseDto["createdAt"];
  settings: UserSettingTypes;
}
