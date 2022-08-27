import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  CategoryApi,
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class CategoryRepository {
  protected categoryApi: CategoryApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.categoryApi = new CategoryApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }
  getCategories(
    categoryName?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryApi.categoriesControllerGetCategories(
      categoryName,
      options
    );
  }

  getUsersCategories(
    userId: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetUserCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryApi.categoriesControllerGetUsersCategories(
      userId,
      options
    );
  }
}
