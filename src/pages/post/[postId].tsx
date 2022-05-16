import { tilogApi } from "@Api/core";
import { GetServerSideProps, NextPage } from "next";

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
