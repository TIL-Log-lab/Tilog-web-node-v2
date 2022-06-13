import { useDispatch } from "react-redux";

import axiosInstance from "@Api/core";
import { logout } from "@Api/adapter";
import { userInfoSlice } from "@Redux/userInfo";

const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(userInfoSlice.actions.resetUserInfo());
      axiosInstance.defaults.headers.common["Authorization"] = "";
    } catch {
      // TODO: language error handling..
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
