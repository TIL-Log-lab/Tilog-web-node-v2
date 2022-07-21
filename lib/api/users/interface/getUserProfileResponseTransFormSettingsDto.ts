import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

import { UserSettingTypes } from "@Components/organisms/user-settings/interface";

export default interface GetUserProfileResponseTransFormSettingsDto {
  avatar: GetUserProfileResponseDto["avatar"];
  name: GetUserProfileResponseDto["name"];
  createdAt: GetUserProfileResponseDto["createdAt"];
  settings: UserSettingTypes;
}
