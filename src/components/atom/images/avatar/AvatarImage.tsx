import Image from "next/image";

interface AvatarImageProps {
  avatar: string;
  cursor?: boolean;
}

const AvatarImage = ({ avatar, cursor = false }: AvatarImageProps) => {
  return (
    <div className="relative w-full h-full">
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
