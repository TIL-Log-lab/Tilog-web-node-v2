import React from "react";

import PostCardRender from "@Components/organisms/card-list/post/PostCardRender";
import useGetPostQuery from "@Query/post/useGetPostListQuery";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

const PostCardListWithoutCategory = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  userId,
}: GetPostRequestDto) => {
  const postList = useGetPostQuery({
    dateScope,
    sortScope,
    page,
    maxContent,
    userId,
  });
  return <PostCardRender postList={postList} />;
};

export default PostCardListWithoutCategory;
