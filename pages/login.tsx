import type { NextPage } from "next";
import TLogin from "src/components/Template/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="flex justify-center px-10">
      <TLogin />
    </div>
  );
};

export default LoginPage;
