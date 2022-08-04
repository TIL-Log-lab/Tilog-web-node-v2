import LinkTo from "@Components/atom/LinkTo";
import Spinner from "@Components/atom/loading/Spinner";
import UserProfile from "@Components/molecules/profile/UserProfile";
import useGetUserProfileQuery from "@Hooks/react-query/user/useGetUserProfileQuery";

interface BlogUserProfileProps {
  userId: number;
  imageSize?: string;
  fontSize?: string;
}

const BlogUserProfile = ({ userId }: BlogUserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userId);
  if (userInfo.isError) return <div>{userInfo.error.message.ko}</div>;
  if (!userInfo.data) return null;
  if (userInfo.isLoading) return <Spinner size="10" />;
  return (
    <div className="h-fit">
      <UserProfile imageSize="40" avatar={userInfo.data.avatar}>
        <div className="w-2/3">
          <LinkTo
            href={`https://www.github.com/${userInfo.data.name}`}
            target="_blank"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            @{userInfo.data.name}
          </LinkTo>
          <h2 className="line-clamp-1">
            {userInfo.data.settings.DISPLAY_NAME
              ? userInfo.data.settings.DISPLAY_NAME
              : "닉네임을 설정해주세요."}
          </h2>
          <LinkTo
            href={`mailto:${userInfo.data.settings.EMAIL}`}
            className="text-sm text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            {userInfo.data.settings.EMAIL}
          </LinkTo>
          <span className="mt-2 text-sm text-neutral-700 dark:text-neutral-400 line-clamp-3">
            {userInfo.data.settings.POSITION}
          </span>
        </div>
      </UserProfile>
      <span className="px-10 mt-10 text-base font-bold text-neutral-800 dark:text-neutral-50 line-clamp-3">
        {userInfo.data.settings.INTRO_MSG}
      </span>
    </div>
  );
};
export default BlogUserProfile;
