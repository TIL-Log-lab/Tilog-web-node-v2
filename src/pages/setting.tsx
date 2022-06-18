import type { GetServerSideProps, NextPage } from "next";

import OHeader from "@Organisms/Header";
import OUserSetting from "@Organisms/user-settings";
import { serverSideAuthentication } from "@Auth";

const SettingPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />

      <OUserSetting />
    </div>
  );
};

export default SettingPage;
export const getServerSideProps: GetServerSideProps = serverSideAuthentication(
  async (store, _) => {
    if (!store.getState().TILog_Info.isLogin) {
      return {
        notFound: true,
      };
    }
    return {
      props: {},
    };
  }
);
