import type { NextPage } from "next";
import OLogin from "src/components/Organisms/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="flex justify-center px-10">
      <OLogin />
    </div>
  );
};

export default LoginPage;
