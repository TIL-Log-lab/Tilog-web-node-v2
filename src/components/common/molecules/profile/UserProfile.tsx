import { ReactNode } from "react";

import LockIcon from "@Components/common/atom/icons/LockIcon";
import LinkTo from "@Components/common/atom/LinkTo";
import ProfileImage from "@Components/common/molecules/images/ProfileImage";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface UserProfileProps {
  userId: number;
  children: ReactNode;
  isPrivate?: boolean;
}

const UserProfile = ({ userId, children, isPrivate }: UserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);

  if (userInfo.isError) return <p>{userInfo.error.message.ko}</p>;
  if (userInfo.isLoading)
    return (
      <div className="flex items-center space-x-3">
        <ProfileImage className="w-10 h-10" />
        <span className="text-sm font-bold">로딩중..</span>
      </div>
    );
  if (!userInfo.data) return null;
  return (
    <div className="flex items-center space-x-3">
      <LinkTo href={`/blog/${userInfo.data.name}`}>
        <ProfileImage className="w-10 h-10" avatar={userInfo.data.avatar} />
      </LinkTo>
      <div>
        <LinkTo href={`/blog/${userInfo.data.name}`}>
          <span className="text-sm font-semibold line-clamp-1">
            {!userInfo.data.settings.DISPLAY_NAME
              ? userInfo.data.name
              : userInfo.data.settings.DISPLAY_NAME}
            {isPrivate && <LockIcon />}
          </span>
        </LinkTo>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UserProfile;
