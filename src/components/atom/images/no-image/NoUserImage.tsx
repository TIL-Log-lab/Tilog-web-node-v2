import { NoUserImageProps } from "@Components/atom/images/interface/userImageProps";

const NoUserImage = ({ cursor = false }: NoUserImageProps) => {
  return (
    <div
      className={`${
        cursor ? "cursor-pointer" : ""
      } w-full h-full rounded-full  dark:bg-neutral-100 bg-neutral-700`}
    />
  );
};

export default NoUserImage;
