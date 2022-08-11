import LinkTo from "@Components/common/atom/LinkTo";
import LikeCounter from "@Components/common/molecules/counter/LikeCounter";
import CategoryLink from "@Components/common/molecules/link/CategoryLink";
import PostUserProfile from "@Components/common/organisms/profile/PostUserProfile";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface MostPopularPostCardProps {
  index: number;
  post: GetPostsItem;
}

const MostPopularPostCard = ({ index, post }: MostPopularPostCardProps) => {
  return (
    <div className="flex m-3 xl:m-auto">
      <h4 className="mr-5">{index}</h4>
      <div
        key={post.id}
        className="w-full xl:max-w-[250px] bg-neutral-100 dark:bg-neutral-800"
      >
        <div className="w-full p-4">
          <PostUserProfile
            viewCount={post.view}
            userId={post.user.userId}
            createdAt={post.createdAt}
          />

          <div className="mt-2 h-[60px]">
            <LinkTo href={`/post/${post.id}`}>
              <h5 className="font-bold line-clamp-2 text-neutral-800 dark:text-neutral-50">
                {post.title}
              </h5>
            </LinkTo>
          </div>

          <div className="flex items-center gap-x-2">
            <CategoryLink categoryName={post.category.name} />
            <LikeCounter count={post.like} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPostCard;
