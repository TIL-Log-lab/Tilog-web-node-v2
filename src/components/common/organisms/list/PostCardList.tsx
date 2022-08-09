import React from "react";

import CardLoading from "@Components/common/molecules/card/CardLoading";
import PostCard from "@Components/common/molecules/card/post/PostCard";
import RenderTechIcons from "@Components/common/molecules/tech-icons/RenderTechIcons";
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
      {!categoryName ? (
        <h1>전체카테고리</h1>
      ) : (
        <h2>
          <div className="inline mr-5 text-5xl">
            <RenderTechIcons categoryName={categoryName} />
          </div>
          {categoryName}
        </h2>
      )}
      <div className="grid grid-row gap-y-3">
        {postList.data?.pages.map((postPage) =>
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
