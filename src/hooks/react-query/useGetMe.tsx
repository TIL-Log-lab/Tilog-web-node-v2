import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";
import ExceptionInterface from "@Library/api/exception/interface";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

export default function useGetMe() {
  return useQuery<
    AxiosResponse<GetMeResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetMeResponseDto>,
    string
  >("userInfo", () => api.usersService.getMe(), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
