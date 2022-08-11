import { VscCircleFilled } from "react-icons/vsc";

import ProfileImage from "@Components/common/molecules/images/ProfileImage";
import UserProfile from "@Components/common/molecules/profile/UserProfile";
import DateFnsFormatter from "@Components/common/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Constants/post";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface UserProfileProps {
  userId: number;
  createdAt: string;
  viewCount: number;
}

const PostUserProfile = ({
  userId,
  createdAt,
  viewCount,
}: UserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);

  if (userInfo.isError) return <p>{userInfo.error.message.ko}</p>;
  if (userInfo.isLoading)
    return (
      <div className="flex items-center space-x-3">
        <ProfileImage className="w-10 h-10" />
        <span className="text-sm font-bold">로딩중..</span>
        <DateFnsFormatter className="line-clamp-1" date={createdAt} />
      </div>
    );
  if (!userInfo.data) return null;
  return (
    <UserProfile userId={userId}>
      <div className="space-x-1">
        <DateFnsFormatter className="inline text-xs" date={createdAt} />
        <VscCircleFilled className="inline text-[6px] text-neutral-400" />
        <p className="inline text-xs">
          {VIEW_COUNT.ko} {viewCount}
        </p>
      </div>
    </UserProfile>
  );
};

export default PostUserProfile;
