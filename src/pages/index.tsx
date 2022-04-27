import { useContext } from "react";
import type { NextPage } from "next";

import OHeader from "@Organisms/Header";

import { AccessTokenContext } from "@Hooks/context/AccessToken";
import useHomeQuery from "@Hooks/react-query/useHomeQuery";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { AccessTokenInterface } from "@Hooks/context/interface/accessToken.interface";
import { NotResponse } from "@Api/errors/notResponse.error";
interface HomeProps {
  userInfo: GetMeResponseDto | null;
}

const Home: NextPage<HomeProps> = ({ userInfo }: HomeProps) => {
  const { accessToken, accessTokenFetchError } =
    useContext<AccessTokenInterface>(AccessTokenContext);

  const result = useHomeQuery(accessToken);
  if (accessTokenFetchError) {
    userInfo = null;
    if (!accessTokenFetchError.response) {
      alert(NotResponse.message[0]);
    }
    if (accessTokenFetchError.response?.status !== 401) {
      alert(accessTokenFetchError.response?.data.message[0].message);
    }
  }
  console.log(result);
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={userInfo} />
      <h1>Index Page...</h1>
    </div>
  );
};

export default Home;
