import { useDispatch } from "react-redux";

import { userInfoSlice } from "@Redux/userInfo";
import { instance, TilogApiForAuth } from "@Api/core";

const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await TilogApiForAuth.usersAuthControllerDeleteRefreshToken();
      dispatch(userInfoSlice.actions.resetUserInfo());
      instance.defaults.headers.common["Authorization"] = "";
    } catch {
      // TODO: language error handling..
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
