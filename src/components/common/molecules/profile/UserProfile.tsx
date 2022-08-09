import React from "react";

import AvatarImage from "@Components/common/atom/images/avatar/AvatarImage";
import EmptyAvatarImage from "@Components/common/atom/images/avatar/EmptyAvatarImage";

import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

interface UserProfileProps {
  avatar?: GetUserProfileResponseDto["avatar"];
  className?: string;
}

const UserProfile = ({ avatar, className }: UserProfileProps) => {
  return (
    <div
      className={`${className} ring-1 ring-neutral-200 dark:ring-neutral-600 rounded-full`}
    >
      {!avatar ? <EmptyAvatarImage /> : <AvatarImage avatar={avatar} />}
    </div>
  );
};

export default UserProfile;
