import React from "react";

import EmptyThumbnail from "@Components/atom/images/thumbnail/EmptyThumbnail";
import Thumbnail from "@Components/atom/images/thumbnail/Thumbnail";
import { seededColor } from "@Library/utility/color";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostImageProps {
  id: GetPostDetailResponseDto["id"];
  title: GetPostDetailResponseDto["title"];
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"];
  imageSize?: string;
}

const PostThumbnail = ({
  id,
  thumbnailUrl,
  imageSize = "w-[130px] sm:w-[250px] h-full",
  title,
}: PostImageProps) => {
  if (thumbnailUrl) {
    return (
      <div className={imageSize}>
        <Thumbnail thumbnailUrl={thumbnailUrl} />;
      </div>
    );
  }

  const color = seededColor(id);
  return (
    <div className={imageSize}>
      <EmptyThumbnail title={title} color={color} />;
    </div>
  );
};

export default PostThumbnail;
