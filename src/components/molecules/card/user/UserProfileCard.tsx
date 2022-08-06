import LinkTo from "@Components/atom/LinkTo";
import Spinner from "@Components/atom/loading/Spinner";
import UserProfile from "@Components/molecules/profile/UserProfile";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface UserProfileCardProps {
  userId: number;
  imageSize?: string;
  fontSize?: string;
}

const UserProfileCard = ({
  userId,
  imageSize,
  fontSize,
}: UserProfileCardProps) => {
  const userInfo = useGetUserProfileQuery(userId);
  if (userInfo.isError) return <div>{userInfo.error.message.ko}</div>;
  if (userInfo.isLoading) return <Spinner size="10" />;
  if (!userInfo.data) return <>존재하지 않는 유저입니다.</>;
  return (
    <div>
      <UserProfile imageSize={imageSize} avatar={userInfo.data.avatar}>
        <div>
          <h2 className={`text-${fontSize}`}>{userInfo.data.name}</h2>
          <LinkTo
            href={`mailto:${userInfo.data.settings.EMAIL}`}
            className="block text-xs text-neutral-400 hover:text-neutral-900 line-clamp-1"
          >
            {userInfo.data.settings.EMAIL}
          </LinkTo>
          <span className="block text-xs text-neutral-400 line-clamp-1">
            {userInfo.data.settings.POSITION}
          </span>
        </div>
      </UserProfile>
      <span className="px-20 pt-10 text-neutral-600 line-clamp-3">
        {userInfo.data.settings.INTRO_MSG}
      </span>
    </div>
  );
};
export default UserProfileCard;
