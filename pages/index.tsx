import OHeader from "@Organisms/Header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader navTitle="Today" />
      <h1>Index Page...</h1>
    </div>
  );
};

export default Home;
