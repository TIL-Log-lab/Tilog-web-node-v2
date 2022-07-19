import CategoryRedirectCard from "@Components/atom/card/category/CategoryRedirectCard";
import LockIcon from "@Components/atom/icons/LockIcon";
import PostedDate from "@Components/atom/text/PostedDate";
import CommentCount from "@Components/molecules/comment/CommentCount";
import PostImage from "@Components/molecules/images/PostImage";
import LikeCount from "@Components/molecules/like/LikeCount";
import LinkTo from "@Components/molecules/LinkTo";
import UserProfile from "@Components/molecules/user/UserProfile";

const PostCard = ({ post }: { post: any }) => {
  return (
    <div className="relative flex justify-between w-full h-[120px] sm:w-[500px] sm:h-[150px] bg-neutral-100 dark:bg-neutral-800">
      <div className="w-full px-5 py-3">
        <div className="flex items-center gap-x-2 shrink-0">
          <LinkTo href="#">
            <UserProfile
              UserImageStyle="w-7 h-7"
              userNameStyle="line-clamp-1 text-[4px] sm:text-xs"
              cursor
              avatar={post.user.avatar}
            >
              {post.user.username}
            </UserProfile>
          </LinkTo>
          <PostedDate
            postedDateStyle="mt-1 line-clamp-1 text-[4px] sm:text-xs"
            date={post.createdAt}
          />
          {!post.private ? null : <LockIcon />}
        </div>
        <div>
          <LinkTo href="#">
            <h1 className="my-2 text-xs line-clamp-2 sm:text-sm sm:line-clamp-1">
              {post.title}
            </h1>
            <h3 className="invisible my-1 text-xs sm:line-clamp-2 line-clamp-1 sm:visible sm:mb-6">
              {!post.subTitle ? "" : post.subTitle}
            </h3>
          </LinkTo>
        </div>

        <div className="absolute flex bottom-3 gap-x-2">
          <CategoryRedirectCard
            categoryCardStyle="text-xs"
            categoryName="javascript"
          />
          {/* 
          // TODO: Comment 총 갯수 구하는 엔드포인트 나오면 추가해야합니다.
        */}
          <CommentCount comment={10} />
          <LikeCount like={post.like} />
        </div>
      </div>
      <LinkTo href="#" className="hover:no-underline">
        <PostImage
          colorImageStyle="line-clamp-2"
          postImageStyle="sm:w-[210px] w-[150px] h-full shrink-0"
          id={post.id}
          title={post.title}
          thumbnailUrl={post.thumbnailUrl}
        />
      </LinkTo>
    </div>
  );
};

export default PostCard;
