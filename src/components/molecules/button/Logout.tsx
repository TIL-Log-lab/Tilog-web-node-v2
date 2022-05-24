import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { userInfoSlice } from "@Redux/userInfo";

import { ExceptionInterface } from "@Api/errors/interface/exception.interface";

const MButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(userInfoSlice.actions.resetUserInfo());
      await axios.delete("http://localhost/auth/logout");
    } catch (e) {
      const error = e as ExceptionInterface;
      toast.error(error.message);
    }
  };
  return <button onClick={handleLogout}>로그아웃</button>;
};
export default MButtonLogout;
