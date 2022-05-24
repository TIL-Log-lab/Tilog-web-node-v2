import { useDispatch } from "react-redux";

import { userInfoSlice } from "@Redux/userInfo";
import { TilogApiForAuth } from "@Api/core";


const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await TilogApiForAuth.usersAuthControllerDeleteRefreshToken();
      dispatch(userInfoSlice.actions.resetUserInfo());
    } catch () {
      // TODO: language error handling..
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
