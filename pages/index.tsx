import {
  AButtonCancel,
  AButtonConfirm,
  AButtonLogin,
  AButtonTag,
  AButtonToolbar,
} from "@Atoms/Button";
import type { NextPage } from "next";
const Home: NextPage = () => {
  const handleLogin = () => {
    alert("로그인!");
  };
  const handleConfirm = () => {
    alert("확인!");
  };
  const handleCancel = () => {
    alert("취소!");
  };
  const handleToolbar = () => {
    alert("툴바!");
  };
  const handleTag = () => {
    alert("테그!");
  };
  return (
    <div className="p-10 flex justify-between">
      <AButtonLogin
        onClick={handleLogin}
        styles="w-52 h-12"
        text="Login with Github"
      />
      <AButtonConfirm
        onClick={handleConfirm}
        styles="w-52 h-12"
        text="confirm"
      />
      <AButtonCancel onClick={handleCancel} styles="w-52 h-12" text="Cancel" />
      <AButtonToolbar onClick={handleToolbar} styles="w-10 h-10" text="H1" />
      <AButtonTag onClick={handleTag} styles="w-52 h-12" text="# NextJS" />
    </div>
  );
};

export default Home;
