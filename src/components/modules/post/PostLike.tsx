import LikeCounter from "@Components/common/molecules/counter/LikeCounter";
import useGetHasLikeQuery from "@Hooks/react-query/like/useGetHasLikeQuery";
import useLikeMutation from "@Hooks/react-query/like/useLikeMutation";

import PostHasLikeDto from "@Library/api/post/like/interface/postHasLikeDto";

interface PostLikeProps {
  postId: PostHasLikeDto["postId"];
  count: number;
}

const PostLike = ({ postId, count }: PostLikeProps) => {
  const { mutate } = useLikeMutation();
  const isLiked = useGetHasLikeQuery(postId);
  if (!isLiked.data?.data.like)
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            mutate(postId);
          }}
        >
          <LikeCounter iconSize="5" count={count} />
        </button>
      </div>
    );
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          mutate(postId);
        }}
      >
        <LikeCounter active iconSize="5" count={count} />
      </button>
    </div>
  );
};

export default PostLike;
