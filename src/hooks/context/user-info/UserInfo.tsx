import axios from "axios";
import toast from "react-hot-toast";
import { createContext, ReactNode, useEffect, useState } from "react";

import { tilogApi } from "@Api/core";

import { UserInfoInterface } from "@Context/user-info/interface/userInfo.interface";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";

const store = {
  userInfo: null,
  handleLogin: () => void 0,
  handleLogout: () => void 0,
};

export const UserInfoContext = createContext<UserInfoInterface>(store);

const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<GetMeResponseDto | null>(null);

  useEffect(() => {
    const localData = window.localStorage.getItem("userInfo");
    if (localData) setUserInfo(JSON.parse(localData));
  }, []);

  const handleLogin = () => {
    const loginWindow = window.open("http://localhost/auth/github/login");
    if (!loginWindow) {
      return toast.error("window open error");
    }
    // NOTE: 로그인 체크
    // TODO: alert -> toast
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        const {
          data: { accessToken },
        } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken();

        const { data } = await tilogApi.usersControllerGetMe({
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        window.localStorage.setItem("userInfo", JSON.stringify(data));

        if (data) {
          setUserInfo(data);
          loginWindow.close();
        }
      } catch (e) {}
    }, 1000);
  };

  const handleLogout = async () => {
    try {
      window.localStorage.removeItem("userInfo");
      setUserInfo(null);
      await axios.delete("http://localhost/auth/logout", {
        withCredentials: true,
      });
    } catch (e) {}
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
