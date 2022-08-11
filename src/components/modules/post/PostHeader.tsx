import RenderTechIcons from "@Components/common/molecules/tech-icons/RenderTechIcons";
import DateUserProfile from "@Components/common/organisms/profile/DateUserProfile";
import PostUpdateLink from "@Components/modules/post/link/PostUpdateLink";
import useIsOwner from "@Hooks/useIsOwner";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostHeaderProps {
  post: GetPostDetailResponseDto;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  const isOwner = useIsOwner(post.user.userId);
  return (
    <header>
      <div className="flex">
        <DateUserProfile userId={post.user.userId} createdAt={post.createdAt} />
        {isOwner && (
          <div className="flex ml-auto space-x-5">
            <PostUpdateLink postId={post.id} />
          </div>
        )}
      </div>
      <div className="my-3 text-center">
        <div className="text-2xl">
          <RenderTechIcons categoryName={post.category.name} />
        </div>
        <h1>{post.title}</h1>
        <h4>{post.subTitle}</h4>
      </div>
    </header>
  );
};

export default PostHeader;
