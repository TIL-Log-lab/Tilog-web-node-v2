import Image from "next/image";

const ThumbNail = ({ thumbnailUrl }: { thumbnailUrl: string }) => (
  <div className="relative aspect-[2/1] w-full h-full">
    <Image layout="fill" alt="thumbnail" src={thumbnailUrl} />
  </div>
);
export default ThumbNail;
