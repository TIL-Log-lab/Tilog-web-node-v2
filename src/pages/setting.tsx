import OHeader from "@Organisms/Header";
import OSetting from "@Organisms/Setting";
import type { NextPage } from "next";

const SettingPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Setting" userInfo={null} />
      <div className="mt-20"></div>
      <OSetting />
    </div>
  );
};

export default SettingPage;
