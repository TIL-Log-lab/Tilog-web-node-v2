import MButtonLogin from "@Molecules/Button/Login";
import MButtonMobileLogin from "@Molecules/Button/MobileLogin";
import { BsDot } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const OHeader = ({ navTitle }: { navTitle: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:1000px)",
  });
  return (
    <div>
      <div className="grid grid-cols-3 p-5 font-eng-sub-font-2">
        <div className="flex flex-row items-center justify-start text-sm">
          {isMobile ? (
            "="
          ) : (
            <>
              <a href="#">Today</a>
              <BsDot />
              <a href="#">MyBlog</a>
              <BsDot />
              <a href="#">Search</a>
              <BsDot />
              <a href="/editor">Write</a>
            </>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-8 rounded-tl-full rounded-tr-full bg-neutral-800 " />
          <p className="text-sm text-neutral-800 font-eng-sub-font-2">
            {navTitle}
          </p>
        </div>
        <div className="flex items-center justify-end">
          {isMobile ? <MButtonMobileLogin /> : <MButtonLogin />}
        </div>
      </div>
    </div>
  );
};
export default OHeader;
