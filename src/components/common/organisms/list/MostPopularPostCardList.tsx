import React from "react";

import CardLoading from "@Components/common/molecules/card/CardLoading";
import MostPopularPostCard from "@Components/common/molecules/card/post/MostPopularPostCard";
import { MOST_POPULAR_POSTCARD } from "@Constants/post";
import useGetMostPopularPostListQuery from "@Hooks/react-query/post/useGetMostPopularPostListQuery";

import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface MostPopularPostCardListProps {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  categoryName?: string;
  isPaging?: boolean;
}

const MostPopularPostCardList = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  categoryName,
  isPaging,
}: MostPopularPostCardListProps) => {
  const postList = useGetMostPopularPostListQuery({
    dateScope,
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
  if (!isPaging) {
    return (
      <>
        <h3>{MOST_POPULAR_POSTCARD.ko}</h3>
        <div className="grid grid-flow-row grid-cols-1 xl:grid-flow-col xl:grid-cols-none md:grid-cols-2 ">
          {postList.data?.pages.map((postPage) =>
            postPage.data.list.map((post, idx) => (
              <MostPopularPostCard index={idx + 1} post={post} />
            ))
          )}
        </div>
      </>
    );
  }
  return (
    <div>
      <h4>{!categoryName ? "All" : categoryName}</h4>
      <div className="grid grid-row gap-y-3">
        {postList.data?.pages.map((postPage) =>
          postPage.data.list.map((post, idx) => (
            <MostPopularPostCard index={idx} post={post} />
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

export default MostPopularPostCardList;
