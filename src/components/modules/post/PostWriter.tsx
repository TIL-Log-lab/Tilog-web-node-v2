import CustomUserProfile from "@Components/common/organisms/profile/CustomUserProfile";
import UserBlogLink from "@Components/modules/post/link/UserBlogLink";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostWriterProps {
  userInfo: PostDetailUserInfoItem;
}

const PostWriter = ({ userInfo }: PostWriterProps) => {
  return (
    <div className="w-full p-5">
      <CustomUserProfile userId={userInfo.userId} />
      <UserBlogLink userName={userInfo.username} />
    </div>
  );
};

export default PostWriter;
