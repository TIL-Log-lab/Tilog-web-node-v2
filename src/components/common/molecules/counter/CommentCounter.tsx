import { AiOutlineComment } from "react-icons/ai";

interface CommentCounterProps {
  count: number;
}

const CommentCounter = ({ count }: CommentCounterProps) => {
  return (
    <div className="space-x-1">
      <AiOutlineComment className="inline w-4 h-4 text-xs dark:text-neutral-500 text-neutral-400 " />
      <p className="inline text-xs">{count}</p>
    </div>
  );
};

export default CommentCounter;
