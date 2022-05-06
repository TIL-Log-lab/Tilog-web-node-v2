import axios from "axios";
import { useEffect, useState } from "react";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import setUserInfoToLocal from "@Api/setUserInfoToLocal";

const useHeader = () => {
  const [userInfo, setUserInfo] = useState<GetMeResponseDto | null>(null);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    if (typeof userInfo === "string") setUserInfo(JSON.parse(userInfo));
    else setUserInfo(null);
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

  const handleLogout = (): void => {
    window.localStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  return { userInfo, handleLogin, handleLogout };
};

export default useHeader;
