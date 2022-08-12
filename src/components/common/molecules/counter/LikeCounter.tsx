import { AiFillHeart } from "react-icons/ai";

interface LikeCounterProps {
  count: number;
  active?: boolean;
  iconSize?: string;
  fontSize?: string;
}

const LikeCounter = ({ count, active = false }: LikeCounterProps) => {
  return (
    <div className="space-x-1">
      <AiFillHeart
        className={`inline w-4 h-4 
        ${active && "text-rose-500"}
        dark:text-neutral-500 text-neutral-400 text-xs 
        `}
      />
      <p className="inline text-xs">{count}</p>
    </div>
  );
};

export default LikeCounter;
