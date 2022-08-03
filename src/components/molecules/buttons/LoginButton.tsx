import React from "react";

import { SiGithub } from "react-icons/si";

import useLogin from "@Components/molecules/buttons/hooks/useLogin";

const LoginButton = () => {
  const handleLogin = useLogin();
  return (
    <button
      type="button"
      onClick={handleLogin}
      className="p-3 text-white bg-black rounded w-fit"
    >
      <span className="text-xl text-center font-eng-sub-font-2">
        Login With Github
        <SiGithub className="inline mb-1 ml-3 text-white w-7 h-7" />
      </span>
    </button>
  );
};
export default LoginButton;
