import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { userInfoSlice } from "@Redux/userInfo";
import OTechIcons from "@Organisms/techIcons";
import { TilogApiForAuth, TilogApiForUser } from "@Api/core";

const MButtonLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    const loginWindow = window.open("http://localhost/auth/github/login");
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
        } = await TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken();

        const { data } = await TilogApiForUser.usersControllerGetMe({
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (data) {
          dispatch(userInfoSlice.actions.change(data));
          loginWindow.close();
        }
      } catch (e) {}
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
