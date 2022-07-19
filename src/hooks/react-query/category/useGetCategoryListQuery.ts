import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";

const useGetCategoryListQuery = (categoryName?: string) => {
  return useQuery<
    AxiosResponse<GetCategoriesResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCategoriesResponseDto>,
    string
  >(
    `CategoryList-${categoryName}`,
    () => api.categoryService.getCategories(categoryName),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetCategoryListQuery;
