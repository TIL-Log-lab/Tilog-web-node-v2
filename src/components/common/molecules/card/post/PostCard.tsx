import LinkTo from "@Components/common/atom/LinkTo";
import CommentCounter from "@Components/common/molecules/counter/CommentCounter";
import LikeCounter from "@Components/common/molecules/counter/LikeCounter";
import PostThumbnail from "@Components/common/molecules/images/PostThumbnail";
import CategoryLink from "@Components/common/molecules/link/CategoryLink";
import DateUserProfile from "@Components/common/organisms/profile/DateUserProfile";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const PostCard = ({ post }: { post: GetPostsItem }) => {
  return (
    <div
      key={post.id}
      className="flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 md:w-[550px] xl:w-[650px] max-w-[450px] md:max-w-[650px] w-full"
    >
      <div className="w-full p-4 md:py-4 md:pl-4">
        <DateUserProfile
          isPrivate={post.private === 1}
          userId={post.user.userId}
          createdAt={post.createdAt}
        />

        <div className="mt-2 md:h-[120px] h-[100px]">
          <LinkTo href={`/post/${post.id}`}>
            <h5 className="font-bold line-clamp-2 text-neutral-800 dark:text-neutral-50">
              {post.title}
            </h5>
            <p className="text-sm sm:line-clamp-2">
              {!post.subTitle ? "" : post.subTitle}
            </p>
          </LinkTo>
        </div>

        <div className="flex items-center gap-x-2">
          <CategoryLink categoryName={post.category.name} />
          {/* <CommentCounter count={10} /> */}
          <LikeCounter count={post.like} />
        </div>
      </div>
      <div className="order-first w-full md:order-last">
        <LinkTo href={`/post/${post.id}`} className="w-full hover:no-underline">
          <PostThumbnail
            id={post.id}
            thumbnailUrl={post.thumbnailUrl}
            title={post.title}
          />
        </LinkTo>
      </div>
    </div>
  );
};

export default PostCard;
