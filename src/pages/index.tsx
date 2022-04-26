import type { NextPage } from "next";

import useHomeQuery from "@Hooks/react-query/useHomeQuery";
import OHeader from "@Organisms/Header";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { useContext, useEffect } from "react";
import { AccessTokenContext } from "@Hooks/context/AccessToken";
interface HomeProps {
  user: GetMeResponseDto;
}

const Home: NextPage<HomeProps> = ({ user }: HomeProps) => {
  const { getAccessToken } = useContext(AccessTokenContext);
  const result = useHomeQuery();

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  console.log(result);
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={user} />
      <h1>Index Page...</h1>
    </div>
  );
};

export default Home;
