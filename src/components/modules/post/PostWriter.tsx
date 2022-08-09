import BlogUserProfile from "@Components/common/organisms/profile/CustomSettingsUserProfile";
import UserBlogLink from "@Components/modules/post/link/UserBlogLink";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostWriterProps {
  userInfo: PostDetailUserInfoItem;
}

const PostWriter = ({ userInfo }: PostWriterProps) => {
  return (
    <div className="w-full p-5">
      <BlogUserProfile userId={userInfo.userId} />
      <UserBlogLink userName={userInfo.username} />
    </div>
  );
};

export default PostWriter;
