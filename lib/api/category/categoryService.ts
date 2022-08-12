import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import CategoryRepository from "@Library/api/category/categoryRepository";

import {
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

import GetCategoryListInterface from "@Library/api/category/interface/GetCategoryListInterface";
import ExceptionInterface from "@Library/api/exception/interface";

export default class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly axios: AxiosInstance
  ) {}
  getCategories(
    categoryName?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryRepository.categoriesControllerGetCategories(
      categoryName,
      options
    );
  }
  getUsersCategories(
    userId: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetUserCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryRepository.categoriesControllerGetUsersCategories(
      userId,
      options
    );
  }

  getCategoryList({
    userId,
    options,
  }: GetCategoryListInterface): Promise<
    AxiosResponse<
      GetUserCategoriesResponseDto | GetCategoriesResponseDto,
      ExceptionInterface
    >
  > {
    if (userId) {
      return this.categoryRepository.categoriesControllerGetUsersCategories(
        userId,
        options
      );
    }
    return this.categoryRepository.categoriesControllerGetCategories(
      undefined,
      options
    );
  }
}
