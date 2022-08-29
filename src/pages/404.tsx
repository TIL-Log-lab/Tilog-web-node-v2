import { NextPage } from "next";

import { DefaultSeo } from "next-seo";

import RootBox from "@Components/common/atom/box/RootBox";
import { notFoundPostSeo } from "@Library/utility/seo";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...notFoundPostSeo()} />
      <RootBox>
        <article className="text-center ">
          <header>
            <h1>404</h1>
          </header>
          <p>페이지를 찾을 수 없습니다.</p>
        </article>
      </RootBox>
    </div>
  );
};

export default NotFoundPage;
