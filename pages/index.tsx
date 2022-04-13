import {
  ButtonCancel,
  ButtonConfirm,
  ButtonLogin,
  ButtonTag,
  ButtonToolbar,
} from "@Atoms/AButton";
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
      <ButtonLogin onClick={handleLogin} styles="w-52 h-12" text="로그인" />
      <ButtonCancel onClick={handleCancel} styles="w-52 h-12" text="취소" />
      <ButtonConfirm onClick={handleConfirm} styles="w-52 h-12" text="확인" />
      <ButtonToolbar onClick={handleToolbar} styles="w-10 h-10" text="H1" />
      <ButtonTag onClick={handleTag} styles="w-52 h-12" text="# NextJS" />
    </div>
  );
};

export default Home;
