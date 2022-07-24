import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

type UserSettingTypes = Record<
  typeof SetSettingRequestBodyDtoSettingTypeEnum[keyof typeof SetSettingRequestBodyDtoSettingTypeEnum],
  string | null
>;

export default UserSettingTypes;
