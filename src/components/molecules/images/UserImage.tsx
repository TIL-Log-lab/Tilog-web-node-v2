import Image from "next/image";

import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

import { userInfoSelector } from "@Redux/userInfo";

interface UserImageProps {
  onClick: () => void;
}

const UserImage = ({ onClick }: UserImageProps) => {
  const { avatar } = useSelector(userInfoSelector);
  if (!avatar) {
    return (
      <FaUserCircle
        onClick={onClick}
        className="w-[50px] mr-3 rounded-full h-[50px] dark:text-neutral-300 text-neutral-800 cursor-pointer"
      />
    );
  }
  return (
    <Image
      onClick={onClick}
      className="rounded-full cursor-pointer focus:outline-none focus:ring focus:ring-signature-color"
      width="50"
      height="50"
      alt="avatar"
      src={avatar}
    />
  );
};
export default UserImage;
