import { GetServerSideProps, NextPage } from "next";

import BodyBox from "@Components/box/BodyBox";
import UserSettings from "@Components/organisms/user-settings";
import { wrapper } from "@Redux/store";

const SettingPage: NextPage = () => {
  return (
    <BodyBox>
      <UserSettings />
    </BodyBox>
  );
};

export default SettingPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const { isLogin } = store.getState().TILog_Info;
    if (!isLogin) {
      return {
        notFound: true,
      };
    }
    return {
      props: {},
    };
  });
