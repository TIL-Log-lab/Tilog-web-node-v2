import MButtonLogin from "src/components/molecules/button/Login";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import MButtonLogout from "@Molecules/button/Logout";

interface OHeaderProps {
  nav: string | string[] | undefined;
  userInfo: GetMeResponseDto | null;
}

const OHeader = ({ nav, userInfo }: OHeaderProps) => {
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
          <p className="text-sm text-neutral-800 font-eng-sub-font-2">{nav}</p>
        </div>
        <div className="flex items-center justify-end">
          {!userInfo ? <MButtonLogin /> : <MButtonLogout />}
        </div>
      </div>
    </div>
  );
};
export default OHeader;
