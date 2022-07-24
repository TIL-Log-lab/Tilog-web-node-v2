import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import { UserSettingTypes } from "@Components/organisms/user-settings/interface";

export default interface GetMeResponseTransFormSettingsDto {
  id: GetMeResponseDto["userId"];
  avatar: GetMeResponseDto["avatar"];
  name: GetMeResponseDto["name"];
  createdAt: GetMeResponseDto["createdAt"];
  settings: UserSettingTypes;
}
