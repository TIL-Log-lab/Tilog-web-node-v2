import React from "react";

import CardLoading from "@Components/molecules/card/CardLoading";
import PostCard from "@Components/molecules/card/post/PostCard";
import useGetPostListQuery from "@Hooks/react-query/post/useGetPostListQuery";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface PostCardListProps {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
}

const PostCardList = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  userId,
  categoryName,
}: PostCardListProps) => {
  const postList = useGetPostListQuery({
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

export default PostCardList;
