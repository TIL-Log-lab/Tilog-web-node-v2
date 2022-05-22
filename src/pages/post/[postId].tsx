import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";

import OPostDetail from "@Organisms/PostDetail";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";
import { TilogApiForAuth, TilogApiForPost } from "@Api/core";
interface PostDetailPageProps {
  postDetail: GetPostDetailResponseDto;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  postDetail,
}: PostDetailPageProps) => {
  return (
    <div className="md:mx-20 2xl:mx-60">
      <Head>
        <title>{postDetail.title}</title>
        <meta
          property="og:description"
          content={postDetail.content}
          key="ogDesc"
        />
        <meta
          property="og:image"
          content={!postDetail.thumbnailUrl ? "" : postDetail.thumbnailUrl}
          key="ogImage"
        ></meta>
        <meta property="og:title" content={postDetail.title} key="ogTitle" />
      </Head>
      <div className="flex flex-col items-center pt-20 text-center">
        <OPostDetail postDetail={postDetail} />
      </div>
      {/* <OComment /> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  if (!params) return { notFound: true };

  const postId = params.postId;
  if (!postId) return { notFound: true };
  if (Array.isArray(postId)) return { notFound: true };

  const { headers } = context.req;
  const userAgent = !headers["user-agent"] ? "" : headers["user-agent"];
  const cookie = !headers.cookie ? "" : headers.cookie;
  try {
    if (context.req.cookies.refreshToken) {
      const {
        data: { accessToken },
      } = await TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken(
        undefined,
        {
          headers: {
            "User-Agent": userAgent,
            Cookie: cookie,
          },
        }
      );
      const postDetail = await TilogApiForPost.postsControllerGetPostDetail(
        postId,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      return {
        props: { postDetail: postDetail.data },
      };
    }

    const { data } = await TilogApiForPost.postsControllerGetPostDetail(postId);

    return {
      props: { postDetail: data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default PostDetailPage;
