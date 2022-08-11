import { useQuery } from "react-query";

import api from "@Library/api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

export default function useGetUserProfileQuery(userName: number) {
  return useQuery<
    GetUserProfileResponseTransFormSettingsDto,
    ExceptionInterface,
    GetUserProfileResponseTransFormSettingsDto
  >(["userInfo", userName], () => api.usersService.getUserProfile(userName), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
