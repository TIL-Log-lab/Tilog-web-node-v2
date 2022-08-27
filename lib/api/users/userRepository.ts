import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  GetMeResponseDto,
  GetUserProfileResponseDto,
  SetSettingRequestBodyDto,
  UserApi,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class UserRepository {
  protected userApi: UserApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.userApi = new UserApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }

  getMe(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetMeResponseDto, ExceptionInterface>> {
    return this.userApi.usersControllerGetMe(options);
  }

  getUserProfile(
    userId: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetUserProfileResponseDto, ExceptionInterface>> {
    return this.userApi.usersControllerGetUserProfile(userId, options);
  }

  setSetting(
    setSettingRequestBodyDto: SetSettingRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.userApi.usersControllerSetSetting(
      setSettingRequestBodyDto,
      options
    );
  }
}
