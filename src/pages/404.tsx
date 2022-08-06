import { NextPage } from "next";

import { DefaultSeo } from "next-seo";

import Header from "@Components/organisms/header";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo title="페이지를 찾을 수 없습니다." />
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <header>
          <h1 className="text-9xl">404</h1>
        </header>
        <p className="text-5xl text-neutral-500 dark:bg-neutral-300">
          페이지를 찾을 수 없습니다.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
