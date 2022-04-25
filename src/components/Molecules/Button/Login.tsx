import { tilogApi } from "@Api/core";
import MTechRender from "@Molecules/Icon/TechRender";
import axios from "axios";

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
          <MTechRender categoryName="Github" />
        </div>
      </div>
    </button>
  );
};
export default MButtonLogin;
