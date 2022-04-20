import PostDetail from "@Organisms/PostDetail";
import { NextPage } from "next";

const PostDetailPage: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center text-5xl">Header..</div>
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail />
      </div>
    </div>
  );
};
export default PostDetailPage;
