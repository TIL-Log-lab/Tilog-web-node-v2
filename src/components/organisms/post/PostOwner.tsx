import LinkTo from "@Components/atom/LinkTo";
import UserProfileCard from "@Components/molecules/card/user/UserProfileCard";
import { DIRECT_OWNER_BLOG, POST_EDIT } from "@Constants/text/post";
import useIsOwner from "@Hooks/react-query/validate/useIsOwner";

import {
  GetPostDetailResponseDto,
  PostDetailUserInfoItem,
} from "@til-log.lab/tilog-api";

interface PostOwnerProps {
  userInfo: PostDetailUserInfoItem;
  postId: GetPostDetailResponseDto["id"];
}

const PostOwner = ({ userInfo, postId }: PostOwnerProps) => {
  const isOwner = useIsOwner(userInfo.userId);
  if (isOwner === false) {
    return (
      <>
        <UserProfileCard userId={userInfo.userId} />
        <LinkTo
          href={`/blog/${userInfo.username}`}
          className="flex items-center justify-center w-full h-10 text-white rounded bg-primary-color hover:bg-primary-color-blur dark:bg-black"
        >
          {userInfo.username}
          {DIRECT_OWNER_BLOG.ko}
        </LinkTo>
      </>
    );
  }
  return (
    <LinkTo
      href={{
        pathname: "/editor",
        query: { postId },
      }}
    >
      {POST_EDIT.ko}
    </LinkTo>
  );
};

export default PostOwner;
