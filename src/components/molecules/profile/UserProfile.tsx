import React, { ReactNode } from "react";

import AvatarImage from "@Components/atom/images/avatar/AvatarImage";
import EmptyAvatarImage from "@Components/atom/images/avatar/EmptyAvatarImage";

import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

interface UserProfileProps {
  avatar?: GetUserProfileResponseDto["avatar"];
  children?: ReactNode;
  className?: string;
}

const UserProfile = ({ avatar, children, className }: UserProfileProps) => {
  return (
    <div className="flex items-center justify-center gap-x-3">
      <div
        className={`${className} ring-1 ring-neutral-200 dark:ring-neutral-600 rounded-full`}
      >
        {!avatar ? <EmptyAvatarImage /> : <AvatarImage avatar={avatar} />}
      </div>
      {children}
    </div>
  );
};

export default UserProfile;
