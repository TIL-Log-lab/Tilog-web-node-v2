import React, { ReactNode } from "react";

import AvatarImage from "@Components/atom/images/avatar/AvatarImage";
import EmptyAvatarImage from "@Components/atom/images/avatar/EmptyAvatarImage";

import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

interface UserProfileProps {
  avatar: GetUserProfileResponseDto["avatar"];
  children: ReactNode;
  className: string;
  imageSize?: string;
  fontSize?: string;
}

const UserProfile = ({
  avatar,
  children,
  className,
  imageSize,
  fontSize,
}: UserProfileProps) => {
  return (
    <div className={className}>
      {!avatar ? (
        <EmptyAvatarImage className={`w-${imageSize} h-${imageSize}`} />
      ) : (
        <AvatarImage
          className={`w-${imageSize} h-${imageSize}`}
          avatar={avatar}
        />
      )}
      <span className={`text-${fontSize}`}>{children}</span>
    </div>
  );
};

export default UserProfile;
