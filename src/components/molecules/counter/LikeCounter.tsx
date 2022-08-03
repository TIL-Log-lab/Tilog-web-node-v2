import { AiFillHeart } from "react-icons/ai";

interface LikeCounterProps {
  count: number;
}

const LikeCounter = ({ count }: LikeCounterProps) => {
  return (
    <div className="flex items-center">
      <AiFillHeart className="w-4 h-4 text-neutral-900 dark:text-neutral-50" />
      <span className="ml-1 mt-[2px] text-sm text-neutral-900 dark:text-neutral-50">
        {count}
      </span>
    </div>
  );
};

export default LikeCounter;
