import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import { GetUserCategoriesResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";

const useAllGetUserCategoryListQuery = (userId: number) => {
  return useQuery<
    AxiosResponse<GetUserCategoriesResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetUserCategoriesResponseDto>
  >(
    ["userCategoryList", userId],
    () => api.categoryService.getUsersCategories(userId),
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

export default useAllGetUserCategoryListQuery;
