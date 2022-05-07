import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import { disconnectedMessage } from "@Api/errors/message/disconnectedMessage";
import setUserInfoToLocal from "@Api/setUserInfoToLocal";

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
      return alert("window open error");
    }
    // NOTE: 로그인 체크
    // TODO: alert -> toast
    const loginCheck = setInterval(async () => {
      if (loginWindow.closed) {
        clearInterval(loginCheck);
      }
      try {
        const localData = await setUserInfoToLocal();
        if (localData) {
          setUserInfo(localData);
          loginWindow.close();
        }
      } catch (error) {
        if (axios.isAxiosError(error))
          if (!error.response) alert(error.message);
      }
    }, 1000);
  };

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost/auth/logout", {
        withCredentials: true,
      });
      window.localStorage.removeItem("userInfo");
      setUserInfo(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          alert(disconnectedMessage.ko);
        }
      }
    }
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
