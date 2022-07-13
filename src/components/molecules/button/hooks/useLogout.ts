import { useDispatch } from "react-redux";

import api from "@Library/api";
import httpClient from "@Library/api/httpClient";
import { userInfoSlice } from "@Redux/userInfo";

const useLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(userInfoSlice.actions.resetUserInfo());
    httpClient.http.defaults.headers.common.Authorization = "";
    await api.authService.deleteRefreshToken();
  };
  return handleLogout;
};

export default useLogout;
