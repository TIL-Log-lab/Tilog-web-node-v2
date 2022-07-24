import LockIcon from "@Components/atom/icons/LockIcon";
import PublishDate from "@Components/atom/text/PublishDate";
import CategorySearchCard from "@Components/molecules/card/category/CategorySearchCard";
import CommentCount from "@Components/molecules/count/CommentCount";
import LikeCount from "@Components/molecules/count/LikeCount";
import PostImage from "@Components/molecules/images/PostImage";
import LinkTo from "@Components/molecules/LinkTo";
import ThumbnailProfile from "@Components/molecules/profile/ThumbnailProfile";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const PostCard = ({ post }: { post: GetPostsItem }) => {
  return (
    <div className="relative flex justify-between w-full sm:w-[550px] sm:h-[170px] bg-neutral-100 dark:bg-neutral-800">
      <div className="w-full px-3 py-2">
        <div className="flex items-center gap-x-2 shrink-0">
          <LinkTo href="#">
            <ThumbnailProfile cursor avatar={post.user.avatar}>
              {post.user.username}
            </ThumbnailProfile>
          </LinkTo>
          <PublishDate
            className="mt-[1px] line-clamp-1 text-[5px] text-neutral-500 dark:text-neutral-300"
            date={post.createdAt}
          />
          {!post.private ? null : <LockIcon />}
        </div>
        <div className="my-2">
          <LinkTo href="#">
            <h1 className="text-xs sm:text-2xl line-clamp-2 sm:line-clamp-1">
              {post.title}
            </h1>
            <h3 className="invisible text-base line-clamp-1 sm:line-clamp-2 sm:visible">
              {!post.subTitle ? "" : post.subTitle}
            </h3>
          </LinkTo>
        </div>

        <div className="absolute flex items-center bottom-3 gap-x-2">
          <CategorySearchCard categoryName={post.category.name} />
          <CommentCount comment={10} />
          <LikeCount like={post.like} />
        </div>
      </div>
      <LinkTo href="#" className="hover:no-underline">
        <div className="w-[130px] sm:w-[250px] h-full">
          <PostImage
            id={post.id}
            title={post.title}
            thumbnailUrl={post.thumbnailUrl}
          />
        </div>
      </LinkTo>
    </div>
  );
};

export default PostCard;
