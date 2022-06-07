import { useDispatch } from "react-redux";

import axiosInstance, { TilogApiForAuth } from "@Api/core";
import { userInfoSlice } from "@Redux/userInfo";

const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await TilogApiForAuth.usersAuthControllerDeleteRefreshToken();
      dispatch(userInfoSlice.actions.resetUserInfo());
      axiosInstance.defaults.headers.common["Authorization"] = "";
    } catch {
      // TODO: language error handling..
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
