import LikeCounter from "@Components/molecules/counter/LikeCounter";
import useGetHasLikeQuery from "@Hooks/react-query/like/useGetHasLikeQuery";
import useLikeMutation from "@Hooks/react-query/like/useLikeMutation";

import PostHasLikeDto from "@Library/api/post/like/interface/postHasLikeDto";

interface PostLikeProps {
  postId: PostHasLikeDto["postId"];
  count: number;
}

const PostLike = ({ postId, count }: PostLikeProps) => {
  const isLiked = useGetHasLikeQuery(postId);

  const { mutate } = useLikeMutation();

  if (isLiked.data?.data.like === false)
    return (
      <div>
        <button type="button" onClick={() => mutate(postId)}>
          <LikeCounter
            direction="vertical"
            fontSize="md"
            iconSize="10"
            count={count}
          />
        </button>
      </div>
    );
  return (
    <div>
      <button type="button" onClick={() => mutate(postId)}>
        <LikeCounter
          direction="vertical"
          active
          fontSize="md"
          iconSize="10"
          count={count}
        />
      </button>
    </div>
  );
};

export default PostLike;
