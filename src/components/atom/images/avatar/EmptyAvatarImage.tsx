interface EmptyAvatarImageProps {
  cursor?: boolean;
}
const EmptyAvatarImage = ({ cursor = false }: EmptyAvatarImageProps) => {
  return (
    <div
      className={`${
        cursor ? "cursor-pointer" : ""
      } w-full h-full rounded-full  dark:bg-neutral-100 bg-neutral-700`}
    />
  );
};

export default EmptyAvatarImage;
