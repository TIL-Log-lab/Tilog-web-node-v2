import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { getCategory } from "@Api/adapter";

import ExceptionInterface from "@Api/errors/interfaces";
import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

export const useGetCategoryListQuery = () => {
  return useQuery<
    AxiosResponse<GetCategoriesResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCategoriesResponseDto>,
    string
  >("categoryList", () => getCategory(), {
    retry: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
