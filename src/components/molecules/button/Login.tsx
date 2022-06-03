import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import OTechIcons from "@Organisms/techIcons";

import { TilogApiForUser } from "@Api/core";
import { modalSlice } from "@Redux/modal";
import { languageSelector, userInfoSlice } from "@Redux/userInfo";
import getUserLanguage from "@Language/getUserLanguage";

import ExceptionInterface from "@Api/errors/interfaces";

const MButtonLogin = () => {
  const dispatch = useDispatch();
  const language = useSelector(languageSelector);

  const handleLogin = () => {
    const loginWindow = window.open(
      process.env.TILOG_API + "/auth/github/login"
    );
    // NOTE: 로그인창이 알수없는 문제로 뜨지않았을때
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
          const userLanguage = getUserLanguage();
          const userInfo = {
            ...data,
            language: userLanguage,
            isLogin: true,
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
          toast.error(error.message[language]);
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
          <OTechIcons categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default MButtonLogin;
