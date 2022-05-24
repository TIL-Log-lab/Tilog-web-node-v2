import type { NextPage } from "next";
import { useDispatch } from "react-redux";

import { wrapper } from "@Redux/store";
import OHeader from "@Organisms/Header";
import useHomeQuery from "@Query/useHomeQuery";

const Home: NextPage = () => {
  const { data } = useHomeQuery();

  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <h1>Index Page...</h1>
      {data && <h2>{data.data.name}</h2>}
    </div>
  );
};
export default Home;

Home.getInitialProps = wrapper.getInitialPageProps(() => async () => {
  return {};
});
