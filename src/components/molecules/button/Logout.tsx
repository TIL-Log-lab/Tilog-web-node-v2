import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { userInfoSlice } from "@Redux/userInfo";
import { TilogApiForAuth } from "@Api/core";
import { ExceptionInterface } from "@Api/errors/interface/exception.interface";

const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await TilogApiForAuth.usersAuthControllerDeleteRefreshToken();
      dispatch(userInfoSlice.actions.resetUserInfo());
    } catch (e) {
      const error = e as ExceptionInterface;
      // TODO: language error handling..
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
