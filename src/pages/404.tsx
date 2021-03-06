import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <article className="text-center ">
        <header>
          <h1>404</h1>
        </header>
        <p>페이지를 찾을 수 없습니다.</p>
      </article>
    </div>
  );
};

export default NotFoundPage;
