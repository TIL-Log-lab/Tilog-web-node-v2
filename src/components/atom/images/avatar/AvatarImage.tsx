import Image from "next/image";

interface AvatarImageProps {
  avatar: string;
  className?: string;
  cursor?: boolean;
}

const AvatarImage = ({
  avatar,
  cursor = false,
  className = "w-10 h-10",
}: AvatarImageProps) => {
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
export default AvatarImage;
