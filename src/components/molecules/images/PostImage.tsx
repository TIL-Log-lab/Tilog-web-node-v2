import React from "react";

import ColorThumbNail from "@Components/atom/images/ColorThumbNail";
import ThumbNail from "@Components/atom/images/ThumbNail";
import { seededColor } from "@Library/utility/color";

import { PostImageProps } from "@Components/molecules/images/interface/postImageProps";

const PostImage = ({
  id,
  thumbnailUrl,
  title,
  postImageStyle,
}: PostImageProps) => {
  if (thumbnailUrl) {
    return (
      <div className={postImageStyle}>
        <ThumbNail thumbnailUrl={thumbnailUrl} />
      </div>
    );
  }

  const color = seededColor(id);
  return (
    <div className={postImageStyle}>
      <ColorThumbNail title={title} color={color} />
    </div>
  );
};

export default PostImage;
