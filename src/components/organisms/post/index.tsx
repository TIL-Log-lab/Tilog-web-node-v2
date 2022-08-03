import TiptapViewer from "@Components/atom/text-area/TiptapViewer";
import CategoryDivider from "@Components/molecules/divider/CategoryDivider";
import PostThumbnail from "@Components/molecules/images/PostThumbnail";
import IconCategoryLink from "@Components/organisms/post/IconCategoryLink";
import PostHeader from "@Components/organisms/post/PostHeader";
import PostLike from "@Components/organisms/post/PostLike";
import PostOwner from "@Components/organisms/post/PostOwner";
import useGetPostDetailQuery from "@Hooks/react-query/post/useGetPostDetailQuery";

import GetPostDetailRequestDto from "@Library/api/post/interface/getPostDetailRequest";

interface PostDetailProps {
  postId: GetPostDetailRequestDto["postId"];
}
const PostDetail = ({ postId }: PostDetailProps) => {
  const postDetail = useGetPostDetailQuery(postId);

  if (postDetail.isError)
    return <>에러가 발생했습니다. {postDetail.error.message.ko}</>;
  if (postDetail.isLoading) return <>포스트 로딩중.</>;
  if (!postDetail.data) return <>포스트를 찾을 수 없습니다.</>;

  const post = postDetail.data.data;

  return (
    <article className="w-full">
      <PostHeader post={post} />
      <CategoryDivider categoryName={post.category.name} />
      <figure>
        <PostThumbnail
          id={post.id}
          imageSize="w-full h-[500px]"
          thumbnailUrl={post.thumbnailUrl}
          title={post.title}
        />
      </figure>
      <div className="mt-2 lg:grid lg:grid-flow-col lg:space-x-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TiptapViewer content={JSON.parse(post.content)} />
        </div>
        <section className="flex flex-col space-y-2 ">
          <div className="w-full p-5 rounded h-fit bg-slate-200">
            <PostOwner userInfo={post.user} postId={post.id} />
          </div>
          <div className="flex flex-row items-center justify-center p-2 rounded bg-slate-300 ">
            <IconCategoryLink categoryName={post.category.name} />
          </div>
          <div className="flex flex-row justify-center p-2 space-x-2 rounded bg-slate-400">
            <PostLike postId={post.id} count={post.like} />
          </div>
        </section>
      </div>
    </article>
  );
};

export default PostDetail;
