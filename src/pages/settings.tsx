import { NextPage } from "next";

import UserSettingsForm from "@Components/organisms/form/settings/UserSettingsForm";
import Header from "@Components/organisms/Header";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";
import { useRouter } from "next/router";

const SettingPage: NextPage = () => {
  const router = useRouter();
  const userInfo = useGetMeQuery();
  if (userInfo.isError) return router.push("/login");
  if (userInfo.isLoading) return null;

  return (
    <div>
      <Header />
      <div className="flex m-auto max-w-[1280px] items-center mt-10 justify-center px-5">
        {userInfo.isSuccess && <UserSettingsForm userInfo={userInfo.data} />}
      </div>
    </div>
  );
};

export default SettingPage;
