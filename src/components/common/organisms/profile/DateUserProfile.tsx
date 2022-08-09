import LockIcon from "@Components/common/atom/icons/LockIcon";
import LinkTo from "@Components/common/atom/LinkTo";
import UserProfile from "@Components/common/molecules/profile/UserProfile";
import DateFnsFormatter from "@Components/common/molecules/text/DateFnsFormatter";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface DateUserProfileProps {
  userId: number;
  createdAt: string;
  isPrivate?: boolean;
}

const DateUserProfile = ({
  userId,
  createdAt,
  isPrivate,
}: DateUserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);

  if (userInfo.isError) return <p>{userInfo.error.message.ko}</p>;
  if (userInfo.isLoading)
    return (
      <div className="flex items-center space-x-3">
        <UserProfile className="w-10 h-10" />
        <span className="text-sm font-bold">로딩중..</span>
        <DateFnsFormatter className="line-clamp-1" date={createdAt} />
      </div>
    );
  if (!userInfo.data) return null;
  return (
    <div className="flex items-center space-x-3">
      <LinkTo href={`/blog/${userInfo.data.name}`}>
        <UserProfile className="w-10 h-10" avatar={userInfo.data.avatar} />
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
        <DateFnsFormatter className="text-xs line-clamp-1" date={createdAt} />
      </div>
    </div>
  );
};

export default DateUserProfile;
