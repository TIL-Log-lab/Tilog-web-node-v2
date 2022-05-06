import { NextPage } from "next";

import OMyBlog from "@Organisms/MyBlog";

const BlogPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <div className="mt-20">
        <OMyBlog />
      </div>
    </div>
  );
};
export default BlogPage;
