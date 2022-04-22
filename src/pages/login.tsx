import type { NextPage } from "next";
import OLogin from "@Organisms/Login";
import { getUserInfo } from "@Api/getUserInfo";

const LoginPage: NextPage = () => {
  return (
    <div className="flex justify-center px-10">
      <OLogin />
    </div>
  );
};
export async function getServerSideProps() {
  try {
    await getUserInfo();
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
export default LoginPage;
