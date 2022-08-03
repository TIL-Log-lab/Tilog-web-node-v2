import { AiOutlineComment } from "react-icons/ai";

interface CommentCounterProps {
  count: number;
}

const CommentCounter = ({ count }: CommentCounterProps) => {
  return (
    <div className="flex items-center">
      <AiOutlineComment className="w-4 h-4 text-neutral-900 dark:text-neutral-50" />
      <span className="mt-[3px] ml-1 text-xs text-neutral-900 dark:text-neutral-50">
        {count}
      </span>
    </div>
  );
};

export default CommentCounter;
