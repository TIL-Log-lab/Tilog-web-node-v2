import { ReactNode, useContext } from "react";
import { BsDot } from "react-icons/bs";
import Link from "next/link";

import MButtonLogout from "@Molecules/button/Logout";
import MButtonLogin from "@Molecules/button/Login";
import { UserInfoContext } from "@Hooks/context/user-info/UserInfo";

interface OHeaderProps {
  children: ReactNode;
}

const OHeader = ({ children }: OHeaderProps) => {
  const { userInfo, handleLogin, handleLogout } = useContext(UserInfoContext);

  return (
    <div>
      <div className="grid grid-cols-3 p-5 font-eng-sub-font-2">
        <div className="flex flex-row items-center justify-start text-sm">
          <Link href="/">Today</Link>
          <BsDot />
          {userInfo && <Link href={`/blog/${userInfo.name}`}>MyBlog</Link>}
          <BsDot />
          <a href="#">Search</a>
          <BsDot />
          <a href={"/editor"}>Write</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-8 rounded-tl-full rounded-tr-full bg-neutral-800 " />
          <p className="text-sm text-neutral-800 font-eng-sub-font-2"></p>
        </div>
        <div className="flex items-center justify-end">
          {!userInfo ? (
            <MButtonLogin handleLogin={handleLogin} />
          ) : (
            <MButtonLogout handleLogout={handleLogout} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
export default OHeader;
