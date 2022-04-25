import MButtonLogin from "@Molecules/Button/Login";
import MButtonMobileLogin from "@Molecules/Button/MobileLogin";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { BsDot } from "react-icons/bs";

interface OHeaderProps {
  nav: string | string[] | undefined;
  userInfo: GetMeResponseDto;
}

const OHeader = ({ nav, userInfo }: OHeaderProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 p-5 font-eng-sub-font-2">
        <div className="flex flex-row items-center justify-start text-sm">
          <a href="#">Today</a>
          <BsDot />
          {userInfo && <a href={`/blog/${userInfo.name}`}>MyBlog</a>}
          <BsDot />
          <a href="#">Search</a>
          <BsDot />
          <a href={"/editor"}>Write</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-8 rounded-tl-full rounded-tr-full bg-neutral-800 " />
          <p className="text-sm text-neutral-800 font-eng-sub-font-2">{nav}</p>
        </div>
        <div className="flex items-center justify-end">
          {!userInfo ? <MButtonLogin /> : "로그인된 유저"}
        </div>
      </div>
    </div>
  );
};
export default OHeader;
