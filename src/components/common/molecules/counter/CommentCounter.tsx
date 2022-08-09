import { AiOutlineComment } from "react-icons/ai";

interface CommentCounterProps {
  count: number;
}

const CommentCounter = ({ count }: CommentCounterProps) => {
  return (
    <div className="space-x-1">
      <AiOutlineComment className="inline w-4 h-4 text-neutral-900 dark:text-neutral-50" />
      <span className="text-xs">{count}</span>
    </div>
  );
};

export default CommentCounter;
