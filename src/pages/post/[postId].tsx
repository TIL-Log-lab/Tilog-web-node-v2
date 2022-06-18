import { GetServerSideProps, NextPage } from "next";

import Comment from "@Organisms/comment";
import OHeader from "@Organisms/Header";
import PostDetail from "@Organisms/PostDetail";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import { serverSideAuthentication } from "@Auth";
import { getPostDetail } from "@Api/adapter";
interface PostDetailPageProps {
  post: GetPostDetailResponseDto;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  post,
}: PostDetailPageProps) => {
  return (
    <div className="mx-10 xl:mx-60">
      <OHeader />
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail post={post} />
      </div>
      <Comment postId={post.id} />
    </div>
  );
};
export default PostDetailPage;
export const getServerSideProps: GetServerSideProps = serverSideAuthentication(
  async (_, context) => {
    const { params } = context;
    if (!params) return { notFound: true };

    const postId = params.postId;
    if (!postId) return { notFound: true };
    if (Array.isArray(postId)) return { notFound: true };

    try {
      const { data } = await getPostDetail(postId);

      return {
        props: {
          post: data,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
);
