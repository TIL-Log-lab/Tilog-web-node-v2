import Image from "next/image";

interface UserImageProps {
  avatar: string;
  className?: string;
  cursor?: boolean;
}

const UserImage = ({
  avatar,
  cursor = false,
  className = "w-10 h-10",
}: UserImageProps) => {
  return (
    <div className={`relative ${className}`}>
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
