import { NextPage } from "next";
import { useRouter } from "next/router";

import UserSettingsForm from "@Components/organisms/form/settings/UserSettingForm";
import Header from "@Components/organisms/Header";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const SettingPage: NextPage = () => {
  const router = useRouter();
  const userInfo = useGetMeQuery();
  if (userInfo.isError) router.push("/");
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
