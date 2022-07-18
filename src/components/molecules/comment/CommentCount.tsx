import CommentIcon from "@Components/atom/icons/CommentIcon";

import { CommentCountProps } from "@Components/molecules/comment/interface";

const CommentCount = ({ comment, commentCountStyle }: CommentCountProps) => {
  return (
    <div className="flex items-center">
      <CommentIcon />
      <span
        className={`${commentCountStyle} text-sm font-eng-sub-font-1 text-neutral-800 dark:text-neutral-50 mt-1 ml-1`}
      >
        {comment}
      </span>
    </div>
  );
};

export default CommentCount;
