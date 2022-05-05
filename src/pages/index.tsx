import type { GetServerSideProps, NextPage } from "next";

import useHomeQuery from "@Hooks/react-query/useHomeQuery";
import OHeader from "@Organisms/Header";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";
import { getIronSession } from "iron-session";
import { cookieConfig } from "@Iron/cookieConfig";
interface HomeProps {
  user: GetMeResponseDto;
}

const Home: NextPage<HomeProps> = ({ user }: HomeProps) => {
  const { data } = useHomeQuery();
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav="Today" userInfo={user} />
      <h1>Index Page...</h1>
      {data && <h2>{data.data.name}</h2>}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getIronSession(ctx.req, ctx.res, cookieConfig);
  return {
    props: { user: session },
  };
};
export default Home;
