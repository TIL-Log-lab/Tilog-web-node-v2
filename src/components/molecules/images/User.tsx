import Image from "next/image";
import { useSelector } from "react-redux";

import { userInfoSelector } from "@Redux/userInfo";

interface UserImageProps {
  onClick?: () => void;
}

const UserImage = ({ onClick }: UserImageProps) => {
  const { avatar } = useSelector(userInfoSelector);
  return (
    <>
      {!avatar ? (
        <div className="w-[50px] mr-3 rounded-full h-[50px] bg-neutral-800" />
      ) : (
        <Image
          onClick={onClick}
          className="rounded-full cursor-pointer focus:outline-none focus:ring focus:ring-signature-color"
          width="50"
          height="50"
          alt="avatar"
          src={avatar}
        ></Image>
      )}
    </>
  );
};
export default UserImage;
