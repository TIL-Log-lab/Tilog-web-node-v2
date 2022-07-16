import React from "react";

import useLogin from "@Components/molecules/button/hooks/useLogin";
import { TILOG_AUTH } from "@Constants/environment";

const LoginButton = () => {
  useLogin();
  const handleLogin = () => {
    return window.open(
      TILOG_AUTH,
      "",
      "toolbar=no, menubar=no, width=600, height=700"
    );
  };
  return (
    <button
      type="button"
      onClick={handleLogin}
      className="h-12 text-white bg-black rounded w-fit"
    >
      <div className="flex flex-row items-center justify-center p-3 ">
        Login With Github
        <div className="m-auto text-2xl font-eng-sub-font-2">
          {/* <TechIcons categoryName="Github" /> */}
        </div>
      </div>
    </button>
  );
};
export default LoginButton;
