import type { GetServerSideProps, NextPage } from "next";

import OLogin from "src/components/organisms/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="flex justify-center px-10">
      <OLogin />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.refreshToken) {
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
};

export default LoginPage;
