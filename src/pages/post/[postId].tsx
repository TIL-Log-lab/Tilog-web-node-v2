import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo, DefaultSeoProps } from "next-seo";

import PostThumbnail from "@Components/common/molecules/images/PostThumbnail";
import TiptapViewer from "@Components/common/molecules/text-area/TiptapViewer";
import Comment from "@Components/modules/comment";
import { PostHeader, PostLike, PostWriter } from "@Components/modules/post";
import useGetPostDetailQuery from "@Hooks/react-query/post/useGetPostDetailQuery";
import useGetStringTypeToRouter from "@Hooks/router/useGetStringTypeToRouter";
import api from "@Library/api";
import { notFoundPostSeo, postDefaultSeo } from "@Library/utility/seo";
import RootBox from "@Components/common/atom/box/RootBox";

interface PostDetailPageProps {
  seo: DefaultSeoProps;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  seo,
}: PostDetailPageProps) => {
  const postId = useGetStringTypeToRouter("postId");
  const postDetail = useGetPostDetailQuery(postId);
  if (postDetail.isError) return <h3>{postDetail.error.message.ko}</h3>;
  if (postDetail.isLoading) return <>포스트 로딩중.</>;
  if (!postDetail.data) return <h3>포스트를 찾을 수 없습니다.</h3>;

  const post = postDetail.data.data;
  const newSeo = {
    ...seo,
    title: postDetail.data.data.title,
  };
  return (
    <div>
      <DefaultSeo {...newSeo} />
      <RootBox>
        <div>
          <article className="w-full">
            <PostHeader post={post} />
            <figure>
              <PostThumbnail
                id={post.id}
                thumbnailUrl={post.thumbnailUrl}
                title={post.title}
              />
            </figure>
            <div className="mt-5 lg:grid lg:grid-flow-col lg:space-x-5 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TiptapViewer content={JSON.parse(post.content)} />
              </div>
              <section>
                <div className="w-full rounded h-fit bg-neutral-100 dark:bg-neutral-800">
                  <PostWriter userInfo={post.user} />
                </div>
              </section>
            </div>
          </article>
        </div>
        <div className="mt-5">
          <PostLike postId={post.id} count={post.like} />
          <Comment postId={post.id} />
        </div>
      </RootBox>
    </div>
  );
};
export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query;
  if (!postId) return { props: {} };
  if (Array.isArray(postId)) return { props: {} };
  try {
    const { data } = await api.postService.getPostDetail(postId);
    const seo = postDefaultSeo(data);
    return {
      props: {
        seo,
      },
    };
  } catch (error) {
    const seo = notFoundPostSeo();
    return {
      props: {
        seo,
      },
    };
  }
};
