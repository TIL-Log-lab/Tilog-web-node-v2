import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

export default interface GetUserProfileResponseTransFormSettingsDto {
  avatar: GetUserProfileResponseDto["avatar"];
  name: GetUserProfileResponseDto["name"];
  createdAt: GetUserProfileResponseDto["createdAt"];
  settings: UserSettingTypes;
}
