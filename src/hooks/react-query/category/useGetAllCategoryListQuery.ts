import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import {
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

import GetCategoryListInterface from "@Library/api/category/interface/GetCategoryListInterface";
import ExceptionInterface from "@Library/api/exception/interface";

const useGetAllCategoryListQuery = ({
  userId,
  options,
}: GetCategoryListInterface) => {
  return useQuery<
    AxiosResponse<GetUserCategoriesResponseDto | GetCategoriesResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetUserCategoriesResponseDto | GetCategoriesResponseDto>
  >(
    ["CategoryList", userId],
    () => api.categoryService.getCategoryList({ userId, options }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,

      // NOTE: 전체 카테고리의 데이터는 유동적이지 않기 때문에 한번 Fetching한 후 데이터를 서버와 동기화 하지 않습니다.
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetAllCategoryListQuery;
