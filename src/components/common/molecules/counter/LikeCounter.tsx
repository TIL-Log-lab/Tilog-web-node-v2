import { AiFillHeart } from "react-icons/ai";

interface LikeCounterProps {
  count: number;
  active?: boolean;
  iconSize?: string;
  fontSize?: string;
}

const LikeCounter = ({
  count,
  active = false,
  iconSize = "4",
  fontSize = "xs",
}: LikeCounterProps) => {
  return (
    <div className="space-x-1">
      <AiFillHeart
        className={`inline w-${iconSize} h-${iconSize} 
        ${active ? "text-rose-500" : "text-neutral-900 dark:text-neutral-50"}
        `}
      />
      <span className={`text-${fontSize}`}>{count}</span>
    </div>
  );
};

export default LikeCounter;
