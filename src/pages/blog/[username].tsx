import { GetServerSideProps, NextPage } from "next";

import OMyBlog from "@Organisms/MyBlog";
import { wrapper } from "@Redux/store";
import OHeader from "@Organisms/Header";

const BlogPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <OMyBlog />
    </div>
  );
};
export default BlogPage;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async () => {
    return {
      props: {},
    };
  });
