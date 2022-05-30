import React from "react";

import MButtonLogin from "@Molecules/button/Login";
import MTitleAndDesc from "@Molecules/TitleAndDesc";

const OLogin = () => {
  return (
    <div className="bg-white rounded p-14 dark:bg-neutral-900">
      <div className="space-y-24">
        <MTitleAndDesc
          isCenter={true}
          space="2.5"
          title="로그인하고 계속"
          desc="개발자가 똑똑하게 기록을 하는 방법 TILog 에서 오늘 하루를 기록하세요"
        />
        <div className="flex flex-col items-center w-full space-y-10 ">
          <hr className="w-full border-neutral-700 dark:border-neutral-300" />
          <MButtonLogin />
        </div>
      </div>
    </div>
  );
};
export default OLogin;
