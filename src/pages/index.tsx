import type { NextPage } from "next";

import { wrapper } from "@Redux/store";
import OHeader from "@Organisms/Header";
import useHomeQuery from "@Query/useHomeQuery";
import { modalSlice } from "@Redux/modal";
import { useDispatch } from "react-redux";

const Home: NextPage = () => {
  const { data } = useHomeQuery();
  const dispatch = useDispatch();
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <h1>Index Page...</h1>
      <button
        onClick={() =>
          dispatch(modalSlice.actions.setModal({ modalName: "LOGIN" }))
        }
      >
        로그인 모달
      </button>
      {data && <h2>{data.data.name}</h2>}
    </div>
  );
};
export default Home;

Home.getInitialProps = wrapper.getInitialPageProps(() => async () => {
  return {};
});
