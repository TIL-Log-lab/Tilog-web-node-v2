import type { NextPage } from "next";

import useHomeQuery from "@Query/useHomeQuery";

const Home: NextPage = () => {
  const { data } = useHomeQuery();

  return (
    <div className="md:mx-20 2xl:mx-60">
      <h1>Index Page...</h1>
      {data && <h2>{data.data.name}</h2>}
    </div>
  );
};
export default Home;
