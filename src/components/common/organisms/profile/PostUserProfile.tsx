import { VscCircleFilled } from "react-icons/vsc";

import LockIcon from "@Components/common/atom/icons/LockIcon";
import UserNameProfile from "@Components/common/molecules/profile/UserNameProfile";
import DateFnsFormatter from "@Components/common/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Library/constants/post";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface PostUserProfileProps {
  userId: number;
  createdAt: string;
  viewCount: number;
  isPrivate?: boolean;
}

const PostUserProfile = ({
  userId,
  createdAt,
  viewCount,
  isPrivate,
}: PostUserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);

  if (userInfo.isError) return <p>{userInfo.error.message.ko}</p>;
  if (userInfo.isLoading) return null;
  if (!userInfo.data) return null;
  return (
    <UserNameProfile
      avatar={userInfo.data.avatar}
      username={userInfo.data.name}
      displayName={userInfo.data.settings.DISPLAY_NAME}
    >
      {isPrivate && <LockIcon />}
      <div className="flex items-center space-x-1">
        <DateFnsFormatter className="text-xs" date={createdAt} />
        <VscCircleFilled className="text-[6px] text-neutral-400" />
        <p className="text-xs">
          {VIEW_COUNT.ko} {viewCount}
        </p>
      </div>
    </UserNameProfile>
  );
};

export default PostUserProfile;
