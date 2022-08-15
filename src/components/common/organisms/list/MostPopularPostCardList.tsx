import React from "react";

import MostPopularPostCard from "@Components/common/molecules/card/post/MostPopularPostCard";
import useGetMostPopularPostListQuery from "@Hooks/react-query/post/useGetMostPopularPostListQuery";
import useGetStringTypeToRouter from "@Hooks/router/useGetStringTypeToRouter";
import isArrayEmpty from "@Library/utility/isArrayEmpty";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface MostPopularPostCardListProps {
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  categoryName?: string;
}

const MostPopularPostCardList = ({
  sortScope,
  page,
  maxContent,
  categoryName,
}: MostPopularPostCardListProps) => {
  const dateScope = useGetStringTypeToRouter(
    "dateScope"
  ) as GetPostRequestDto["dateScope"];
  const postList = useGetMostPopularPostListQuery({
    dateScope: !dateScope ? "All" : dateScope,
    sortScope,
    page,
    maxContent,
    categoryName,
  });
  if (postList.isError) {
    return <div>에러발생!</div>;
  }
  if (postList.isLoading) {
    return <div>로딩중...</div>;
  }
  if (!postList.data) return null;
  if (isArrayEmpty(postList.data.data.list))
    return <h3>인기 게시글이 없습니다.</h3>;
  return (
    <div>
      <div className="grid grid-row md:grid-cols-2 xl:grid-cols-3 gap-y-3">
        {postList.data.data.list.map((post, idx) => (
          <MostPopularPostCard key={post.id} index={idx + 1} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularPostCardList;
