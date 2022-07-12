import React from "react";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import api from "@Library/api";
import ExceptionInterface from "@Library/api/exception/interface";
import { userInfoSlice } from "@Redux/userInfo";
import TechIcons from "@TechIcons/TechIcons";

const MButtonLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const loginWindow = window.open(
      `${process.env.TILOG_API}/auth/github/login`
    );
    if (!loginWindow) {
      return toast.error("window open error");
    }
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        const { data } = await api.usersService.getMe();

        if (data) {
          const userInfo = {
            ...data,
            isLogin: true,
            language: "ko",
          };
          dispatch(userInfoSlice.actions.changeUserInfo(userInfo));

          loginWindow.close();
        }
      } catch (e) {
        const error = e as ExceptionInterface;
        if (error.statusCode !== 401) {
          loginWindow.close();
          clearInterval(loginCheck);
          // TODO: language error handling..
        }
      }
    }, 1000);
  };
  return (
    <button
      type="button"
      onClick={handleLogin}
      className="h-12 text-white bg-black rounded w-fit"
    >
      <div className="flex flex-row items-center justify-center p-3 ">
        Login With Github
        <div className="ml-3 text-2xl">
          <TechIcons categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default React.memo(MButtonLogin);
