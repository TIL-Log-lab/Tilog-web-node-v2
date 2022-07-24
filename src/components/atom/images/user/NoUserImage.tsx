interface NoUserImageProps {
  className?: string;
  cursor?: boolean;
}
const NoUserImage = ({
  cursor = false,
  className = "w-10 h-10",
}: NoUserImageProps) => {
  return (
    <div
      className={`${
        cursor ? "cursor-pointer" : ""
      } ${className}  rounded-full  dark:bg-neutral-100 bg-neutral-700`}
    />
  );
};

export default NoUserImage;
