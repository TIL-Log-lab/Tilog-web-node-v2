import NoUserImage from "@Components/atom/images/user/NoUserImage";
import UserImage from "@Components/atom/images/user/UserImage";
import UserName from "@Components/atom/text/UserName";

interface ThumbnailProfileProps {
  avatar: string | null;
  children: string;
  textSize?: string;
  cursor?: boolean;
  className?: string;
}
const ThumbnailProfile = ({
  cursor = false,
  avatar,
  children,
  textSize = "text-xs",
  className,
}: ThumbnailProfileProps) => {
  return (
    <div className={`${className} flex items-center`}>
      {!avatar ? (
        <NoUserImage className="w-7 h-7" />
      ) : (
        <UserImage className="w-7 h-7" cursor={cursor} avatar={avatar} />
      )}
      <UserName
        className={`mt-1 ml-3 ${textSize} line-clamp-1  font-semibold text-neutral-600 dark:text-neutral-50 font-eng-sub-font-1`}
      >
        {children}
      </UserName>
    </div>
  );
};

export default ThumbnailProfile;
