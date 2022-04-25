import type { NextPage } from "next";

import OLogin from "@Organisms/Login";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

const LoginPage: NextPage = () => {
  return (
    <div className="flex justify-center px-10">
      <OLogin />
    </div>
  );
};
export async function getServerSideProps(context: {
  req: { cookies: { refreshToken: GetAccessTokenUsingRefreshTokenResponse } };
}) {
  if (context.req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default LoginPage;
