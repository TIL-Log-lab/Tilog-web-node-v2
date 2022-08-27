import RootBox from "@Components/common/atom/box/RootBox";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <RootBox>
      <article className="text-center ">
        <header>
          <h1>404</h1>
        </header>
        <p>페이지를 찾을 수 없습니다.</p>
      </article>
    </RootBox>
  );
};

export default NotFoundPage;
