import HeartIcon from "@Components/atom/icons/HeartIcon";
import Count from "@Components/atom/text/Count";

interface LikeCountProps {
  like: number;
}

const LikeCount = ({ like }: LikeCountProps) => {
  return (
    <div className="flex items-center">
      <HeartIcon />
      <Count className="ml-1 mt-[2px] text-sm font-eng-sub-font-1 text-neutral-800 dark:text-neutral-50">
        {like}
      </Count>
    </div>
  );
};

export default LikeCount;
