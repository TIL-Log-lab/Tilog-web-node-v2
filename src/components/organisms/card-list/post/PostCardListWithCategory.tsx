import React from "react";

import PostCard from "@Components/molecules/card/PostCard";
import CardLoading from "@Components/molecules/cards/Loading";
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

  if (postList.isError) {
    return <div>에러발생!</div>;
  }
  if (postList.isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <div>
      <h2>포스트</h2>
      <div className="grid grid-row gap-y-1">
        {postList.data?.pages.map((postPage) =>
          postPage.data.list.map((post) => (
            <div className="flex" key={post.id}>
              <PostCard post={post} />
            </div>
          ))
        )}
      </div>
      <CardLoading
        hasNextPage={postList.hasNextPage}
        isFetchingNextPage={postList.isFetchingNextPage}
        fetchNextPage={postList.fetchNextPage}
      />
    </div>
  );
};

export default PostCardListWithCategory;
