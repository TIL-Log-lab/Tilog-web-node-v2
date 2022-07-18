import UserImage from "@Components/atom/images/UserImage";
import UserName from "@Components/atom/user/UserName";

import { ProfileUserProps } from "@Components/molecules/user/interface";

const UserProfile = ({
  cursor,
  userNameStyle,
  UserImageStyle,
  avatar,
  children,
}: ProfileUserProps) => {
  return (
    <div className="flex items-center">
      <div className={`relative ${UserImageStyle}`}>
        <UserImage
          UserImageStyle={UserImageStyle}
          cursor={cursor}
          avatar={avatar}
        />
      </div>
      <UserName userNameStyle={userNameStyle}>{children}</UserName>
    </div>
  );
};

export default UserProfile;
