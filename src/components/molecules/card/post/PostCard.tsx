import LockIcon from "@Components/atom/icons/LockIcon";
import LinkTo from "@Components/atom/LinkTo";
import PublishDate from "@Components/atom/text/PublishDate";
import CommentCounter from "@Components/molecules/counter/CommentCounter";
import LikeCounter from "@Components/molecules/counter/LikeCounter";
import PostThumbnail from "@Components/molecules/images/PostThumbnail";
import CategoryLink from "@Components/molecules/link/CategoryLink";
import UserProfile from "@Components/molecules/profile/UserProfile";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const PostCard = ({ post }: { post: GetPostsItem }) => {
  return (
    <div
      key={post.id}
      className="relative flex justify-between w-full sm:w-[550px] sm:h-[170px] bg-neutral-100 dark:bg-neutral-800"
    >
      <div className="w-full px-3 py-2">
        <div className="flex items-center gap-x-2 shrink-0">
          <LinkTo href={`/blog/${post.user.username}`}>
            <UserProfile imageSize="7" avatar={post.user.avatar}>
              <p>{post.user.username}</p>
            </UserProfile>
          </LinkTo>
          <PublishDate
            className="mt-[1px] line-clamp-1 text-[5px] text-neutral-500 dark:text-neutral-300"
            date={post.createdAt}
          />
          {!post.private ? null : <LockIcon />}
        </div>
        <div className="my-2">
          <LinkTo href={`/post/${post.id}`}>
            <h1 className="text-xs sm:text-2xl line-clamp-2 sm:line-clamp-1">
              {post.title}
            </h1>
            <h3 className="invisible text-base line-clamp-1 sm:line-clamp-2 sm:visible">
              {!post.subTitle ? "" : post.subTitle}
            </h3>
          </LinkTo>
        </div>

        <div className="absolute flex items-center bottom-3 gap-x-2">
          <CategoryLink categoryName={post.category.name} />
          <CommentCounter count={10} />
          <LikeCounter count={post.like} />
        </div>
      </div>
      <LinkTo href={`/post/${post.id}`} className="hover:no-underline">
        <PostThumbnail
          id={post.id}
          thumbnailUrl={post.thumbnailUrl}
          title={post.title}
        />
      </LinkTo>
    </div>
  );
};

export default PostCard;
