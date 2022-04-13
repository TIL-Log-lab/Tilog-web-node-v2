import type { NextPage } from "next";

import {
  AButtonCancel,
  AButtonConfirm,
  AButtonLogin,
  AButtonTag,
  AButtonToolbar,
} from "@Atoms/Button";
import ATextInput from "@Atoms/TextInput";
import ATextEditor from "@Atoms/TextEditor";

const Home: NextPage = () => {
  const handleLogin = () => {
    return;
  };
  const handleConfirm = () => {
    return;
  };
  const handleCancel = () => {
    return;
  };
  const handleToolbar = () => {
    return;
  };
  const handleTag = () => {
    return;
  };
  return (
    <div className="p-10 flex justify-between">
      <p className="p-5">
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
        <AButtonCancel
          onClick={handleCancel}
          styles="w-52 h-12"
          text="Cancel"
        />
        <AButtonToolbar onClick={handleToolbar} styles="w-10 h-10" text="H1" />
        <AButtonTag onClick={handleTag} styles="w-52 h-12" text="# NextJS" />
      </p>
      <p>
        <ATextInput placeholder="TextInput" styles="text-xl" />
        <div className="m-1" />
        <ATextEditor />
      </p>
    </div>
  );
};

export default Home;
