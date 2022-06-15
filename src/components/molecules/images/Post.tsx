import Image from "next/image";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface ImagePostProps {
  title: GetPostDetailResponseDto["title"];
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"];
}

export const ImagePost = ({ thumbnailUrl, title }: ImagePostProps) => {
  if (thumbnailUrl)
    return <Image layout="fill" alt="thumbnail" src={thumbnailUrl}></Image>;

  return (
    <div className="flex items-center justify-center w-full h-full bg-signature-color">
      {title}
    </div>
  );
};
