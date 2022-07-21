import NoUserImage from "@Components/atom/images/user/NoUserImage";
import UserImage from "@Components/atom/images/user/UserImage";
import DisplayName from "@Components/atom/text/DisplayName";
import Email from "@Components/atom/text/Email";
import Introduction from "@Components/atom/text/Introduction";
import Position from "@Components/atom/text/Position";
import UserName from "@Components/atom/text/UserName";
import LinkTo from "@Components/molecules/LinkTo";
import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

interface ThumbnailProfileProps {
  userInfo: GetUserProfileResponseTransFormSettingsDto;
  textSize?: string;
  cursor?: boolean;
  className?: string;
}
const BlogProfile = ({
  cursor = false,
  userInfo,
  className,
}: ThumbnailProfileProps) => {
  return (
    <div className="w-full h-full p-5 border bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className={`${className} flex items-center`}>
        <LinkTo href={`https://github.com/${userInfo.name}`} target="_blank">
          {!userInfo.avatar ? (
            <NoUserImage className="w-40 h-40" />
          ) : (
            <UserImage
              className="w-40 h-40"
              cursor={cursor}
              avatar={userInfo.avatar}
            />
          )}
        </LinkTo>
        <div className="ml-10">
          <LinkTo href={`https://github.com/${userInfo.name}`} target="_blank">
            <DisplayName className="text-sm font-medium line-clamp-1">
              {`@${userInfo.settings.DISPLAY_NAME}`}
            </DisplayName>
            <UserName className="text-4xl font-bold line-clamp-1">
              {userInfo.name}
            </UserName>
          </LinkTo>
          <br />
          <LinkTo href={`mailto:${userInfo.settings.EMAIL}`} target="_blank">
            <Email className="text-sm font-medium">
              {userInfo.settings.EMAIL}
            </Email>
          </LinkTo>
          <Position className="text-sm font-medium">
            {userInfo.settings.POSITION}
          </Position>
        </div>
      </div>
      <div className="mt-10 text-center ">
        <Introduction className="text-base">
          {userInfo.settings.INTRO_MSG}
        </Introduction>
      </div>
    </div>
  );
};
export default BlogProfile;
