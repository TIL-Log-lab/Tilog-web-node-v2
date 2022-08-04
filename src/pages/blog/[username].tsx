import { NextPage } from "next";

import UserBlogDetail from "@Components/organisms/blog";
import Header from "@Components/organisms/header";

const BlogPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-[1280px] h-full h-20 items-center mt-20">
        <UserBlogDetail />
      </div>
    </div>
  );
};
export default BlogPage;
