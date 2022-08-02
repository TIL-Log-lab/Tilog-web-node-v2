import Image from "next/image";

const ThumbNail = ({ thumbnailUrl }: { thumbnailUrl: string }) => (
  <div className="relative w-full h-full -z-10">
    <Image layout="fill" alt="thumbnail" src={thumbnailUrl} />
  </div>
);
export default ThumbNail;
