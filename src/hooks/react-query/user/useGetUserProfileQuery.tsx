import { useQuery } from "react-query";

import api from "@Library/api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

export default function useGetUserProfileQuery(
  userId: GetUserProfileResponseTransFormSettingsDto["id"]
) {
  return useQuery<
    GetUserProfileResponseTransFormSettingsDto,
    ExceptionInterface,
    GetUserProfileResponseTransFormSettingsDto
  >(["userInfo", userId], () => api.usersService.getUserProfile(userId), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
}
