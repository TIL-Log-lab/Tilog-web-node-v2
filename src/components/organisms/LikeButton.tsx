import { useEffect, useState } from "react";

import LikeButton from "@Molecules/button/Like";
import UnLikeButton from "@Molecules/button/UnLike";
import useLikeMutation from "@Query/like/useLikeMutation";
import useGetHasLikeQuery from "@Query/like/useGetHasLikeQuery";

import { SetLikedRequestDto } from "@til-log.lab/tilog-api";

interface LikeProps {
  postId: SetLikedRequestDto["postId"];
  likeCount: number;
}
const PostLike = ({ postId, likeCount }: LikeProps) => {
  const [like, setLike] = useState<number>(likeCount);
  const [isLike, setIsLike] = useState<boolean>(false);

  const { data } = useGetHasLikeQuery(postId);
  const [likeMutation, unLikeMutation] = useLikeMutation();

  useEffect(() => {
    if (!data?.data) {
      return;
    }
    setIsLike(data?.data.like);
  }, [data]);

  const handleSetLikeClick = () => {
    likeMutation.mutate(postId, {
      onSuccess: () => {
        setLike((prev) => prev + 1);
        setIsLike(true);
      },
    });
  };

  const handleSetUnLikeClick = () => {
    unLikeMutation.mutate(postId, {
      onSuccess: () => {
        setLike((prev) => prev - 1);
        setIsLike(false);
      },
    });
  };

  return (
    <div className="flex items-center gap-x-4">
      {isLike ? (
        <LikeButton onClick={handleSetUnLikeClick} />
      ) : (
        <UnLikeButton onClick={handleSetLikeClick} />
      )}
      <span className="text-2xl font-semibold text-neutral-700">{like}</span>
    </div>
  );
};

export default PostLike;
