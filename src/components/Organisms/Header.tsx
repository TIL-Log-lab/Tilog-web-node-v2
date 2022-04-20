import MButtonLogin from "@Molecules/Button/Login";
import { BsDot } from "react-icons/bs";

const OHeader = ({ navTitle }: { navTitle: string }) => {
  return (
    <div>
      <div className="grid grid-cols-3 p-5 font-eng-sub-font-2">
        <div className="flex flex-row items-center justify-start text-xl ">
          <a href="#">Today</a>
          <BsDot />
          <a href="#">MyBlog</a>
          <BsDot />
          <a href="#">Search</a>
          <BsDot />
          <a href="/editor">Write</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-8 rounded-tl-full rounded-tr-full bg-neutral-800 " />
          {navTitle}
        </div>
        <div className="flex justify-end">
          <MButtonLogin />
        </div>
      </div>
    </div>
  );
};
export default OHeader;
