import type { NextPage } from "next";

import {
  GetAccessTokenUsingRefreshTokenResponse,
  GetMeResponseDto,
} from "@til-log.lab/tilog-api";

import OHeader from "@Organisms/Header";
import OSetting from "@Organisms/Setting";
interface SettingPageProps {
  accessToken: GetAccessTokenUsingRefreshTokenResponse;
  userInfo: GetMeResponseDto | null;
}
const SettingPage: NextPage<SettingPageProps> = ({
  accessToken,
  userInfo,
}: SettingPageProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Setting" userInfo={userInfo} />

      <div className="mt-20"></div>
      <OSetting />
    </div>
  );
};

export default SettingPage;
