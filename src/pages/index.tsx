import type { NextPage } from "next";

import { wrapper } from "@Redux/store";
import OHeader from "@Organisms/Header";

const Home: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
    </div>
  );
};
export default Home;

Home.getInitialProps = wrapper.getInitialPageProps(() => async () => {
  return {};
});
