import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import OComment from "src/components/organisms/Comment";
import OHeader from "src/components/organisms/Header";
import PostDetail from "src/components/organisms/PostDetail";

import serverSideAuthentication from "@ServerSide/authentication";
import getPostDetail from "@ServerSide/api/getPostDetail";

import {
  GetAccessTokenUsingRefreshTokenResponse,
  GetMeResponseDto,
} from "@til-log.lab/tilog-api";
interface PostDetailPageProps {
  accessToken: GetAccessTokenUsingRefreshTokenResponse;
  userInfo: GetMeResponseDto;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  accessToken,
  userInfo,
}: PostDetailPageProps) => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className="md:mx-20 2xl:mx-60">
      <OHeader nav={username + ".log"} userInfo={userInfo} />
      <div className="flex flex-col items-center pt-20 text-center">
        <PostDetail />
      </div>
      <OComment />
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
