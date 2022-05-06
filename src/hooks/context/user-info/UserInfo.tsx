import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import setUserInfoToLocal from "@Api/setUserInfoToLocal";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import { UserInfoInterface } from "@Hooks/context/user-info/interface/userInfo.interface";

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
    if (typeof localData === "string") setUserInfo(JSON.parse(localData));
  }, []);

  const handleLogin = () => {
    const loginWindow = window.open("http://localhost/auth/github/login");
    if (!loginWindow) {
      return alert("window open error");
    }
    // NOTE: 로그인 체크
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        await setUserInfoToLocal();
        const userInfo = window.localStorage.getItem("userInfo");
        if (typeof userInfo === "string") {
          setUserInfo(JSON.parse(userInfo));
          loginWindow.close();
        }
      } catch (error) {
        if (axios.isAxiosError(error))
          if (!error.response) alert(error.message);
      }
    }, 1000);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userInfo");
    setUserInfo(null);
    // axios.delete("http://localhost/auth/logout", {
    //   withCredentials: true,
    // });
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
