import { GetUserProfileSettingItem } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

export default function userSettingsTransformObjectSettings(
  settings: Array<GetUserProfileSettingItem>
): UserSettingTypes {
  const initSetting: UserSettingTypes = {
    DISPLAY_NAME: null,
    INTRO_MSG: null,
    EMAIL: null,
    POSITION: null,
  };
  if (settings) {
    return settings.reduce((prevSettings, curSettings) => {
      return {
        ...prevSettings,
        [curSettings.type]: curSettings.content,
      };
    }, initSetting);
  }
  return initSetting;
}
