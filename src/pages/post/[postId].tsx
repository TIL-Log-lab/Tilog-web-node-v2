import { NextPage } from "next";

import PostDetail from "src/components/organisms/PostDetail";

const PostDetailPage: NextPage = () => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail />
      </div>
      {/* <OComment /> */}
    </div>
  );
};
export default PostDetailPage;
