import Image from "next/image";

interface AvatarImageProps {
  avatar: string;
}

const AvatarImage = ({ avatar }: AvatarImageProps) => {
  return (
    <div className="relative w-full h-full">
      <Image className="rounded-full" layout="fill" alt="avatar" src={avatar} />
    </div>
  );
};
export default AvatarImage;
