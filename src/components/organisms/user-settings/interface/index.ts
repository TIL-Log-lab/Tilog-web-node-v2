import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

export type UserSettingTypes = {
  [x in SetSettingRequestBodyDtoSettingTypeEnum]: string | null;
};

export type UserSettingUnionTypes = keyof UserSettingTypes;
