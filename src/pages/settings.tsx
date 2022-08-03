import { NextPage } from "next";
import { useRouter } from "next/router";

import Header from "@Components/organisms/header";
import Settings from "@Components/organisms/settings";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const SettingPage: NextPage = () => {
  const router = useRouter();
  const userInfo = useGetMeQuery();
  if (userInfo.isError) router.push("/login");
  if (userInfo.isLoading) return null;

  return (
    <div>
      <Header />
      <div className="flex m-auto max-w-[1280px] items-center mt-10 justify-center px-5">
        {userInfo.isSuccess && <Settings userInfo={userInfo.data} />}
      </div>
    </div>
  );
};

export default SettingPage;
