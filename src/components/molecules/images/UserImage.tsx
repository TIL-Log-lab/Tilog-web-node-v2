import Image from "next/image";

import useGetMe from "@Hooks/react-query/useGetMe";

interface UserImageProps {
  width?: string;
  height?: string;
}

const UserImage = ({ width = "50", height = "50" }: UserImageProps) => {
  const { data } = useGetMe();

  if (!data || !data.data.avatar) {
    return null;
  }

  return (
    <Image
      className="rounded-full cursor-pointer focus:outline-none focus:ring focus:ring-signature-color"
      width={width}
      height={height}
      alt="avatar"
      src={data.data.avatar}
    />
  );
};
export default UserImage;
