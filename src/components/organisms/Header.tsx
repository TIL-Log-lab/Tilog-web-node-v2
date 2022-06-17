import { useSelector } from "react-redux";

import { userInfoSelector } from "@Redux/userInfo";
import MButtonLogin from "@Molecules/button/Login";
import MButtonLogout from "@Organisms/Logout";
import WrappedLink from "@Molecules/WrappedLink";

const OHeader = () => {
  const { isLogin } = useSelector(userInfoSelector);
  return (
    <div>
      <div className="grid grid-cols-2 p-5 font-eng-sub-font-2">
        <div className="flex flex-col">
          <WrappedLink
            text=""
            href="/"
            style="w-16 h-8 rounded-tl-full rounded-tr-full bg-neutral-800"
          />
        </div>
        <div className="flex items-center justify-end">
          {isLogin ? <MButtonLogout /> : <MButtonLogin />}
        </div>
      </div>
    </div>
  );
};
export default OHeader;
