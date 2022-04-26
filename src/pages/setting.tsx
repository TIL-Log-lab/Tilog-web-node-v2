import type { NextPage } from "next";

import OHeader from "src/components/organisms/Header";
import OSetting from "src/components/organisms/Setting";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
interface SettingPageProps {
  user: GetMeResponseDto;
}
const SettingPage: NextPage<SettingPageProps> = ({
  user,
}: SettingPageProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Setting" userInfo={user} />

      <div className="mt-20"></div>
      <OSetting />
    </div>
  );
};

export default SettingPage;
