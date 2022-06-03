import { GetServerSideProps, NextPage } from "next";

import OHeader from "@Organisms/Header";
import OPostDetail from "@Organisms/PostDetail";

import serverSideAuthentication from "@ServerSide/authentication";
import getPostDetail from "@ServerSide/api/getPostDetail";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostDetailPageProps {
  post: GetPostDetailResponseDto;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({
  post,
}: PostDetailPageProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader />
      <div className="flex flex-col items-center pt-20 text-center">
        <OPostDetail post={post} />
      </div>
      {/* <OComment /> */}
    </div>
  );
};
export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = serverSideAuthentication({
  callback: async (_, context, accessToken) => {
    const { params } = context;
    if (!params) return { notFound: true };

    const postId = params.postId;
    if (!postId) return { notFound: true };
    if (Array.isArray(postId)) return { notFound: true };

    try {
      const { data } = await getPostDetail(postId, accessToken);
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
  },
});
