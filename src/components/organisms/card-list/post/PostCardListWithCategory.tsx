import React from "react";

import PostCardRender from "@Components/organisms/card-list/post/PostCardRender";
import useGetPostListWithCategoryQuery from "@Hooks/react-query/post/useGetPostListWithCategoryQuery";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface GetPostWithCategoryRequestDto extends GetPostRequestDto {
  categoryName: string;
}

const PostCardListWithCategory = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  userId,
  categoryName,
}: GetPostWithCategoryRequestDto) => {
  const postList = useGetPostListWithCategoryQuery({
    dateScope,
    sortScope,
    page,
    maxContent,
    userId,
    categoryName,
  });
  return <PostCardRender postList={postList} />;
};

export default PostCardListWithCategory;
