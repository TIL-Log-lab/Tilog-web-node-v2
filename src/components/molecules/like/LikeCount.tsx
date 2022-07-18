import HeartIcon from "@Components/atom/icons/HeartIcon";

import { LikeCountProps } from "@Components/molecules/like/interface";

const LikeCount = ({ like, likeCountStyle }: LikeCountProps) => {
  return (
    <div className="flex items-center">
      <HeartIcon />
      <span
        className={`${likeCountStyle} text-sm font-eng-sub-font-1 text-neutral-800 dark:text-neutral-50 mt-1 ml-1`}
      >
        {like}
      </span>
    </div>
  );
};

export default LikeCount;
