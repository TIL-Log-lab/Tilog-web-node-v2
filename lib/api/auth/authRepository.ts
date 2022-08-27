import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  AuthApi,
  GetAccessTokenUsingRefreshTokenResponse,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class AuthRepository {
  protected authApi: AuthApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.authApi = new AuthApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }
  deleteRefreshToken(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.authApi.usersAuthControllerDeleteRefreshToken(options);
  }

  getAccessTokenUsingRefreshToken(
    userAgent?: string,
    options?: AxiosRequestConfig
  ): Promise<
    AxiosResponse<GetAccessTokenUsingRefreshTokenResponse, ExceptionInterface>
  > {
    return this.authApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
      userAgent,
      options
    );
  }
}
