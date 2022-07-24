import CommentIcon from "@Components/atom/icons/CommentIcon";
import Count from "@Components/atom/text/Count";

interface CommentCountProps {
  comment: number;
}

const CommentCount = ({ comment }: CommentCountProps) => {
  return (
    <div className="flex items-center">
      <CommentIcon />
      <Count className="mt-[3px] ml-1 text-xs font-eng-sub-font-1 text-neutral-800 dark:text-neutral-50">
        {comment}
      </Count>
    </div>
  );
};

export default CommentCount;
