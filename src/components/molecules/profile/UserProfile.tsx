import React, { ReactNode } from "react";

import AvatarImage from "@Components/atom/images/avatar/AvatarImage";
import EmptyAvatarImage from "@Components/atom/images/avatar/EmptyAvatarImage";

import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

interface UserProfileProps {
  avatar: GetUserProfileResponseDto["avatar"];
  children?: ReactNode;
  imageSize?: string;
  fontSize?: string;
}

const UserProfile = ({
  avatar,
  children,
  imageSize = "10",
  fontSize = "xl",
}: UserProfileProps) => {
  return (
    <div className="flex items-center justify-center gap-x-3">
      {!avatar ? (
        <EmptyAvatarImage className={`w-${imageSize} h-${imageSize}`} />
      ) : (
        <AvatarImage
          className={`w-${imageSize} h-${imageSize}`}
          avatar={avatar}
        />
      )}
      <span className={`text-${fontSize} font-medium`}>{children}</span>
    </div>
  );
};

export default UserProfile;
