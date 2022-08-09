import React from "react";

import EmptyThumbnail from "@Components/common/atom/images/thumbnail/EmptyThumbnail";
import Thumbnail from "@Components/common/atom/images/thumbnail/Thumbnail";
import { seededColor } from "@Library/utility/color";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostImageProps {
  id: GetPostDetailResponseDto["id"];
  title: GetPostDetailResponseDto["title"];
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"];
}

const PostThumbnail = ({ id, thumbnailUrl, title }: PostImageProps) => {
  if (thumbnailUrl) {
    return <Thumbnail thumbnailUrl={thumbnailUrl} />;
  }

  const color = seededColor(id);
  return <EmptyThumbnail title={title} color={color} />;
};

export default PostThumbnail;
