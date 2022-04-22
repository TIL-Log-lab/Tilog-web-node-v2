import OHeader from "@Organisms/Header";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import type { NextPage } from "next";
interface HomeProps {
  accessToken: string;
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

export default Home;
