import React from "react";

import ColorThumbNail from "@Components/atom/images/ColorThumbNail";
import ThumbNail from "@Components/atom/images/ThumbNail";
import { seededColor } from "@Library/utility/color";

import { PostImageProps } from "@Components/molecules/images/interface/postImageProps";

const PostImage = ({ id, thumbnailUrl, title }: PostImageProps) => {
  if (thumbnailUrl) {
    return <ThumbNail thumbnailUrl={thumbnailUrl} />;
  }

  const color = seededColor(id);
  return <ColorThumbNail title={title} color={color} />;
};

export default PostImage;
