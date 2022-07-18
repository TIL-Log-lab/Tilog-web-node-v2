import Image from "next/image";

import NoUserImage from "@Components/atom/images/no-image/NoUserImage";

import { UserImageProps } from "@Components/atom/images/interface/userImageProps";

const UserImage = ({ avatar, cursor = false }: UserImageProps) => {
  if (!avatar) return <NoUserImage cursor={cursor} />;
  return (
    <Image
      className={`rounded-full ${cursor ? "cursor-pointer" : ""} `}
      layout="fill"
      alt="avatar"
      src={avatar}
    />
  );
};
export default UserImage;
