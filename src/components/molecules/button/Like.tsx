import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import useLikesMutation from "@Query/likes/useLikesMutation";
import useGetLikeQuery from "@Query/likes/useGetLikeQuery";

import { SetLikedRequestDto } from "@til-log.lab/tilog-api";

interface LikeProps {
  postId: SetLikedRequestDto["postId"];
  likeCount: number;
}
const MButtonLike = ({ postId, likeCount }: LikeProps) => {
  const [like, setLike] = useState<number>(likeCount);

  const { data, refetch } = useGetLikeQuery(postId);
  const [likeMutation, unLikeMutation] = useLikesMutation();

  const handleSetLikeClick = () => {
    likeMutation.mutate(postId, {
      onSuccess: () => {
        setLike((prev) => prev + 1);
        refetch();
      },
    });
  };

  const handleUnSetLikeClick = () => {
    unLikeMutation.mutate(postId, {
      onSuccess: () => {
        setLike((prev) => prev - 1);
        refetch();
      },
    });
  };

  return (
    <div className="flex items-center gap-x-4">
      {!data?.data.like ? (
        <button onClick={handleSetLikeClick}>
          <AiFillHeart className="text-4xl" />
        </button>
      ) : (
        <button onClick={handleUnSetLikeClick}>
          <AiFillHeart className="text-4xl text-rose-500" />
        </button>
      )}
      <span className="text-2xl font-semibold text-neutral-700">{like}</span>
    </div>
  );
};

export default MButtonLike;
