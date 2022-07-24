import { useQuery } from "react-query";

import api from "@Library/api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";

export default function useGetMeQuery() {
  return useQuery<
    GetMeResponseTransFormSettingsDto,
    ExceptionInterface,
    GetMeResponseTransFormSettingsDto,
    string
  >("myUserInfo", () => api.usersService.getMe(), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
