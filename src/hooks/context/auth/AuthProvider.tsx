/** 현재 많은 연산을 하지 않아 굳이 memo를 할 필요가 없으므로 해당 기능 "off"합니다. */
/* eslint-disable react/jsx-no-constructed-context-values */

import { ReactNode, useState } from "react";

import { AuthContext } from "@Hooks/context/auth/AuthContext";
import useLogin from "@Hooks/context/auth/useLogin";
import api from "@Library/api";

import GetMeResponseTransFormSettingsDto from "@Library/api/users/interface/getMeResponseTransFormSettingsDto";

export const AuthProvider = ({
  children,
  initUserInfo,
}: {
  children: ReactNode;
  initUserInfo: GetMeResponseTransFormSettingsDto;
}) => {
  const [userInfo, setUserInfo] =
    useState<GetMeResponseTransFormSettingsDto | null>(initUserInfo);
  const handleLogin = useLogin(setUserInfo);
  const handleLogout = async () => {
    await api.authService.deleteRefreshToken();
    setUserInfo(null);
  };
  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
