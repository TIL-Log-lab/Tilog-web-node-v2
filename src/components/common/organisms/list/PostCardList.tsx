import React from "react";

import CardLoading from "@Components/common/molecules/card/CardLoading";
import PostCard from "@Components/common/molecules/card/post/PostCard";
import useGetPostListQuery from "@Hooks/react-query/post/useGetPostListQuery";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface PostCardListProps {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
  row?: string;
}

const PostCardList = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  userId,
  categoryName,
  row = "none",
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
      <div className={`grid gap-3 grid-row md:grid-cols-${row}`}>
        {postList.isSuccess &&
          postList.data.pages.map((postPage) =>
            postPage.data.list.map((post) => <PostCard post={post} />)
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
