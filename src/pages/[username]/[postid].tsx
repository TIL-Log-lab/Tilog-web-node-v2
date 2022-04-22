import OComment from "@Organisms/Comment";
import OHeader from "@Organisms/Header";
import PostDetail from "@Organisms/PostDetail";
import { NextPage } from "next";
import { useRouter } from "next/router";

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav={username + ".log"} userInfo={null} />
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail />
      </div>
      <OComment />
    </div>
  );
};
export default PostDetailPage;
