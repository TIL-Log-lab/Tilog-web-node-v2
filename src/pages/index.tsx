import { AxiosError } from "axios";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import { useContext, useEffect } from "react";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import OHeader from "@Organisms/Header";
import { AccessTokenContext } from "src/context/AccessToken";
import { tilogApi } from "@Api/core";

interface HomeProps {
  user: GetMeResponseDto;
}

const Home: NextPage<HomeProps> = ({ user }: HomeProps) => {
  const { accessToken, getAccessToken } = useContext(AccessTokenContext);
  const result = useQuery(
    ["userinfo", accessToken],
    () =>
      tilogApi.usersControllerGetMe({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    {
      enabled: !!accessToken,
      onError: (e: AxiosError) => {
        if (e.response?.status) {
          getAccessToken();
        }
      },
    }
  );
  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);
  console.log(result);

  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={user} />
      <h1>Index Page...</h1>
      <p>{accessToken}</p>
    </div>
  );
};

export default Home;
