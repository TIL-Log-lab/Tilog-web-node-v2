import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import getUserLanguage from "@Language/getUserLanguage";

import ExceptionInterface from "@Api/errors/interfaces";
import TechIcons from "@TechIcons/TechIcons";
import { userInfoSlice } from "@Redux/userInfo";
import { modalSlice } from "@Redux/modal";
import { getAccessToken, getMe } from "@Api/adapter";

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
        const {
          data: { accessToken },
        } = await getAccessToken();

        const { data } = await getMe({
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        });

        if (data) {
          const language = getUserLanguage();
          const userInfo = {
            ...data,
            isLogin: true,
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
