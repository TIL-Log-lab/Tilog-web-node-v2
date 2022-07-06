import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "services/open-api/axiosInstance";
import { Option } from "../interface";

const userApi = new TILog.UserApi(undefined, undefined, axiosInstance);

export const getMe = (options?: Option) =>
  userApi.usersControllerGetMe(options);

export const setSetting = (
  setting: TILog.SetSettingRequestBodyDto,
  options?: Option
) => userApi.usersControllerSetSetting(setting, options);
