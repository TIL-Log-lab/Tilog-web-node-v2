import Head from "next/head";
import { tilogApi } from "@Api/core";
import { GetServerSideProps, NextPage } from "next";

import OPostDetail from "src/components/organisms/PostDetail";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

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
  const { params, req } = context;
  if (!params) return { notFound: true };

  const postId = params.postId;
  if (!postId) return { notFound: true };
  if (Array.isArray(postId)) return { notFound: true };

  const responseResult =
    await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
      undefined,
      {
        headers: {
          "User-Agent": !req.headers["user-agent"]
            ? ""
            : req.headers["user-agent"],
          Cookie: !req.headers.cookie ? "" : req.headers.cookie,
        },
      }
    );
  try {
    if (!responseResult) {
      const { data } = await tilogApi.postsControllerGetPostDetail(postId);
      return {
        props: {
          postDetail: data,
        },
      };
    }

    const { data } = await tilogApi.postsControllerGetPostDetail(postId, {
      headers: {
        Authorization: `Bearer ${responseResult.data.accessToken}`,
      },
    });
    return {
      props: { postDetail: data },
    };
  } catch {
    return { notFound: true };
  }
};
export default PostDetailPage;
