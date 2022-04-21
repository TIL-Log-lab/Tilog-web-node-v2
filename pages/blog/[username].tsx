import OHeader from "@Organisms/Header";
import OMyBlog from "@Organisms/MyBlog";
import { NextPage } from "next";
import { useRouter } from "next/router";

const BlogPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="mx-10 sm:mx-30 xl:mx-60">
      <OHeader navTitle={username} />
      <div className="mt-20">
        <OMyBlog />
      </div>
    </div>
  );
};
export default BlogPage;
