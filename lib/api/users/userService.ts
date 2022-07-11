import { AxiosRequestConfig, AxiosResponse } from "axios";

import validateToken from "@Library/api/auth/validateTokenDecorator";
import ExceptionInterface from "@Library/api/exception/interface";
import UserRepository from "@Library/api/users/userRepository";

import {
  GetMeResponseDto,
  GetUserProfileResponseDto,
  SetSettingRequestBodyDto,
  SetSettingRequestBodyDtoSettingTypeEnum,
} from "@til-log.lab/tilog-api";

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  @validateToken()
  getMe(
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetMeResponseDto, ExceptionInterface>> {
    return this.userRepository.usersControllerGetMe(options);
  }

  getUserProfile(
    userId: number,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetUserProfileResponseDto, ExceptionInterface>> {
    return this.userRepository.usersControllerGetUserProfile(userId, options);
  }

  @validateToken()
  setSetting(
    content: string | null,
    settingType: SetSettingRequestBodyDtoSettingTypeEnum,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    const setSettingRequestBodyDto: SetSettingRequestBodyDto = {
      content,
      settingType,
    };
    return this.userRepository.usersControllerSetSetting(
      setSettingRequestBodyDto,
      options
    );
  }
}
