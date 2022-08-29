import React, { useContext } from "react";

import { SiGithub } from "react-icons/si";

import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import { AuthContext } from "@Hooks/context/auth/AuthContext";

const LoginButton = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <PrimaryButton type="button" onClick={handleLogin}>
      <span className="text-neutral-50">Login With Github</span>
      <SiGithub className="inline mb-1 ml-3 text-white w-7 h-7" />
    </PrimaryButton>
  );
};
export default LoginButton;
