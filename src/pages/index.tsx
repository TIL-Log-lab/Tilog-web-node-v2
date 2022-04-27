import { useContext } from "react";
import type { NextPage } from "next";

import OHeader from "@Organisms/Header";

import { AccessTokenContext } from "@Hooks/context/AccessToken";
import useHomeQuery from "@Hooks/react-query/useHomeQuery";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { AccessTokenInterface } from "@Hooks/context/interface/accessTokenInterface";
interface HomeProps {
  userInfo: GetMeResponseDto | null;
}

const Home: NextPage<HomeProps> = ({ userInfo }: HomeProps) => {
  const { accessToken, error } =
    useContext<AccessTokenInterface>(AccessTokenContext);

  const result = useHomeQuery(accessToken);
  if (error) {
    userInfo = null;
    if (!error.response) {
      alert("서버와 연결이 끊겼습니다.");
    }
    if (error.response?.status !== 401) {
      alert(error.response?.data.message[0].message);
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
