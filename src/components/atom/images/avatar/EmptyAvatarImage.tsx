interface EmptyAvatarImageProps {
  className?: string;
  cursor?: boolean;
}
const EmptyAvatarImage = ({
  cursor = false,
  className = "w-10 h-10",
}: EmptyAvatarImageProps) => {
  return (
    <div
      className={`${
        cursor ? "cursor-pointer" : ""
      } ${className}  rounded-full  dark:bg-neutral-100 bg-neutral-700`}
    />
  );
};

export default EmptyAvatarImage;
