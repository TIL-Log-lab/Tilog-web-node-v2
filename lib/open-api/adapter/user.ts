import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "@Api/core";
import { Option } from "../interface";

const userApi = new TILog.UserApi(undefined, undefined, axiosInstance);
userApi.usersControllerSetSetting;

export const getMe = (options?: Option) =>
  userApi.usersControllerGetMe(options);

export const getSetting = (
  setting: TILog.SetSettingRequestBodyDto,
  options?: Option
) => userApi.usersControllerSetSetting(setting, options);
