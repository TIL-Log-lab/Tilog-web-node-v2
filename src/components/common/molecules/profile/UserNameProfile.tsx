import { ReactNode } from "react";

import LinkTo from "@Components/common/atom/LinkTo";
import ProfileImage from "@Components/common/molecules/images/ProfileImage";

import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

interface UserNameProfileProps {
  username: GetUserProfileResponseTransFormSettingsDto["name"];
  displayName: GetUserProfileResponseTransFormSettingsDto["settings"]["DISPLAY_NAME"];
  avatar: GetUserProfileResponseTransFormSettingsDto["avatar"];
  children: ReactNode;
}

const UserNameProfile = ({
  username,
  displayName,
  avatar,
  children,
}: UserNameProfileProps) => {
  return (
    <div className="flex items-center space-x-3">
      <LinkTo href={`/blog/${username}`}>
        <ProfileImage className="w-10 h-10" avatar={avatar} />
      </LinkTo>
      <div>
        <LinkTo href={`/blog/${username}`}>
          <span className="text-sm font-semibold">
            {!displayName ? username : displayName}
          </span>
        </LinkTo>
        {children}
      </div>
    </div>
  );
};

export default UserNameProfile;
