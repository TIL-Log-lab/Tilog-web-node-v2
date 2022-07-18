import Image from "next/image";

import NoUserImage from "@Components/atom/images/no-image/NoUserImage";

import { UserImageProps } from "@Components/atom/images/interface/userImageProps";

const UserImage = ({
  avatar,
  cursor = false,
  UserImageStyle = "w-[50px] h-[50px]",
}: UserImageProps) => {
  if (!avatar) return <NoUserImage cursor={cursor} />;
  return (
    <div className={`relative ${UserImageStyle}`}>
      <Image
        className={`rounded-full ${cursor ? "cursor-pointer" : ""} `}
        layout="fill"
        alt="avatar"
        src={avatar}
      />
    </div>
  );
};
export default UserImage;
