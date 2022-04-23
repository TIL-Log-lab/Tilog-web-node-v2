import type { NextPage } from "next";

import {
  GetAccessTokenUsingRefreshTokenResponse,
  GetMeResponseDto,
} from "@til-log.lab/tilog-api";

import OHeader from "@Organisms/Header";
import { ExceptionMessageInterface } from "@Api/Errors/interface/messageError";
interface HomeProps {
  accessToken: GetAccessTokenUsingRefreshTokenResponse;
  userInfo: GetMeResponseDto;
  error: ExceptionMessageInterface;
}

const Home: NextPage<HomeProps> = ({
  accessToken,
  userInfo,
  error,
}: HomeProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={userInfo} />
      <h1>Index Page...</h1>
      {error && <p>{error.message[0].message}</p>}
      {accessToken && <p>{accessToken}</p>}
    </div>
  );
};

export default Home;
