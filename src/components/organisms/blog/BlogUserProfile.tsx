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
      <div className="flex flex-col mt-3 text-center md:text-left md:flex-row">
        <UserProfile className="w-40 h-40" avatar={userInfo.data.avatar} />
        <div className="md:ml-5">
          <LinkTo
            href={`https://www.github.com/${userInfo.data.name}`}
            target="_blank"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-400"
          >
            @{userInfo.data.name}
          </LinkTo>
          <br />
          <LinkTo
            href={`mailto:${userInfo.data.settings.EMAIL}`}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-400"
          >
            {userInfo.data.settings.EMAIL}
          </LinkTo>
          <h1 className="line-clamp-1">
            {userInfo.data.settings.DISPLAY_NAME
              ? userInfo.data.settings.DISPLAY_NAME
              : "닉네임이 없습니다!"}
          </h1>
          <span className="font-semibold text-md text-neutral-500 dark:text-neutral-300 line-clamp-3">
            {userInfo.data.settings.POSITION}
          </span>
        </div>
      </div>
      <span className="mt-2 text-lg font-bold md:p-5 text-neutral-800 dark:text-neutral-50 line-clamp-3">
        {userInfo.data.settings.INTRO_MSG}
      </span>
    </div>
  );
};
export default BlogUserProfile;
