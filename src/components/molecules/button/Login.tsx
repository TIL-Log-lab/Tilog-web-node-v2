import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { modalSlice } from "@Redux/modal";
import getUserLanguage from "@Language/getUserLanguage";
import { TilogApiForUser } from "@Api/core";
import { userInfoSlice } from "@Redux/userInfo";

import ExceptionInterface from "@Api/errors/interfaces";
import TechIcons from "@TechIcons/TechIcons";

const MButtonLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    const loginWindow = window.open(
      process.env.TILOG_API + "/auth/github/login"
    );
    if (!loginWindow) {
      return toast.error("window open error");
    }
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        const { data } = await TilogApiForUser.usersControllerGetMe();
        if (data) {
          const language = getUserLanguage();
          const userInfo = {
            ...data,
            language,
          };
          dispatch(userInfoSlice.actions.changeUserInfo(userInfo));
          dispatch(modalSlice.actions.resetModal());

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
      onClick={handleLogin}
      className={`text-white rounded bg-black w-fit h-12`}
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
