import ProfileImage from "@Components/common/molecules/images/ProfileImage";
import UserNameProfile from "@Components/common/molecules/profile/UserNameProfile";
import DateFnsFormatter from "@Components/common/molecules/text/DateFnsFormatter";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface CommentUserProfileProps {
  userId: number;
  createdAt?: string;
}

const CommentUserProfile = ({ userId, createdAt }: CommentUserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);

  if (userInfo.isError) return <p>{userInfo.error.message.ko}</p>;
  if (userInfo.isLoading)
    return (
      <div className="flex items-center space-x-3">
        <ProfileImage className="w-10 h-10" />
        <span className="text-sm font-bold">로딩중..</span>
        {createdAt && (
          <DateFnsFormatter className="line-clamp-1" date={createdAt} />
        )}
      </div>
    );
  if (!userInfo.data) return null;
  return (
    <div>
      <UserNameProfile
        avatar={userInfo.data.avatar}
        username={userInfo.data.name}
        displayName={userInfo.data.settings.DISPLAY_NAME}
      >
        {createdAt && <DateFnsFormatter className="text-xs" date={createdAt} />}
      </UserNameProfile>
    </div>
  );
};

export default CommentUserProfile;
