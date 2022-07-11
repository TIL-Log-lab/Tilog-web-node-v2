import type { NextPage } from "next";

import api from "@Library/api";
import OHeader from "@Organisms/Header";
import { wrapper } from "@Redux/store";

const Home: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <h1>Index Page...</h1>
      <button
        type="button"
        onClick={async () => {
          console.log(await api.usersService.getMe());
        }}
      >
        누르기
      </button>
    </div>
  );
};
export default Home;

Home.getInitialProps = wrapper.getInitialPageProps(() => async () => {
  return {};
});
