import { AiFillHeart } from "react-icons/ai";

interface LikeCounterProps {
  count: number;
  active?: boolean;
  direction?: "vertical" | "horizontal";
  iconSize?: string;
  fontSize?: string;
}

const LikeCounter = ({
  count,
  direction = "horizontal",
  active = false,
  iconSize = "4",
  fontSize = "sm",
}: LikeCounterProps) => {
  return (
    <div>
      <AiFillHeart
        className={`${
          direction === "horizontal" && "inline"
        } w-${iconSize} h-${iconSize} mb-[2px]
        ${active ? "text-rose-500" : "text-neutral-900 dark:text-neutral-50"}
        `}
      />
      <span
        className={`${
          direction === "horizontal" && "ml-1 mt-[px]"
        }  text-${fontSize} font-semibold text-neutral-900 dark:text-neutral-50`}
      >
        {count}
      </span>
    </div>
  );
};

export default LikeCounter;
