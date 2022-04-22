import OHeader from "@Organisms/Header";
import OSetting from "@Organisms/Setting";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import type { NextPage } from "next";
interface SettingPageProps {
  accessToken: string;
  userInfo: GetMeResponseDto | null;
}
const SettingPage: NextPage<SettingPageProps> = ({
  accessToken,
  userInfo,
}: SettingPageProps) => {
  console.log(accessToken);
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Setting" userInfo={userInfo} />

      <div className="mt-20"></div>
      <OSetting />
    </div>
  );
};

export default SettingPage;
