import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import CategoryRepository from "@Library/api/category/categoryRepository";

import {
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

export default class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly axios: AxiosInstance
  ) {}
  getCategories(
    categoryName?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCategoriesResponseDto, any>> {
    return this.categoryRepository.categoriesControllerGetCategories(
      categoryName,
      options
    );
  }
  getUsersCategories(
    userId: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetUserCategoriesResponseDto, any>> {
    return this.categoryRepository.categoriesControllerGetUsersCategories(
      userId,
      options
    );
  }
}
