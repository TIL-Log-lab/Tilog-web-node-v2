import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { UserSettingTypes } from "@Organisms/user-settings/interface/UserSetting.interface";

export default function safeTransferUserSetting(
  settings: GetMeResponseDto["settings"]
): UserSettingTypes {
  if (settings) {
    return settings.reduce(
      (prevSettings, curSettings) => {
        return {
          ...prevSettings,
          [curSettings.type]: curSettings.content,
        };
      },
      { DISPLAY_NAME: null, INTRO_MSG: null, EMAIL: null, POSITION: null }
    );
  }
  return {
    DISPLAY_NAME: null,
    INTRO_MSG: null,
    EMAIL: null,
    POSITION: null,
  };
}
