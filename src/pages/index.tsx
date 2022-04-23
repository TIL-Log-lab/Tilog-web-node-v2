import type { NextPage } from "next";

import {
  GetAccessTokenUsingRefreshTokenResponse,
  GetMeResponseDto,
} from "@til-log.lab/tilog-api";

import OHeader from "@Organisms/Header";
interface HomeProps {
  accessToken: GetAccessTokenUsingRefreshTokenResponse;
  userInfo: GetMeResponseDto | null;
}

const Home: NextPage<HomeProps> = ({ accessToken, userInfo }: HomeProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={userInfo} />
      <h1>Index Page...</h1>
      <p>{accessToken}</p>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
