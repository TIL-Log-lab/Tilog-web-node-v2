import axios from "axios";

import { tilogApi } from "@Api/core";
import OTechIcons from "src/components/organisms/techIcons";

const MButtonLogin = () => {
  const handleLogin = async () => {
    const childWindow = window.open("http://localhost/auth/github/login");
    setInterval(async () => {
      try {
        const userinfo =
          await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
            "a",
            {
              withCredentials: true,
            }
          );
        if (!!userinfo) {
          await axios.get("http://localhost:8080/api/userinfo");
          childWindow?.close();
          window.location.reload();
        }
      } catch {}
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
