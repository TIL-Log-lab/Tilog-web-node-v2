import React from "react";

import useGetPostQuery from "@Query/post/useGetPostListQuery";
import { PostCardTypeA } from "@Molecules/cards/post/PostTypeA";
import { PostCardTypeB } from "@Molecules/cards/post/PostTypeB";

import { GetPostsRequestDto } from "@Api/interface/post";
import { CardLoading } from "@Molecules/cards/Loading";

interface OPostCardProps extends GetPostsRequestDto {
  queryKey: string;
  cardTitle: string;
  cardType: "TYPE_A" | "TYPE_B";
}

const PostCardList = (props: OPostCardProps) => {
  const post = useGetPostQuery(props);

  if (post.isError) {
    return <div>에러발생!</div>;
  }
  if (post.isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      {post.isSuccess && (
        <div>
          <h2>{props.cardTitle}</h2>
          <div className="grid grid-row gap-y-1 sm:w-96">
            {post.data.pages.map((page) =>
              page.data.list.map((post) => (
                <div className="flex" key={post.id}>
                  {props.cardType == "TYPE_A" && <PostCardTypeA post={post} />}
                  {props.cardType == "TYPE_B" && <PostCardTypeB />}
                </div>
              ))
            )}
          </div>
          <CardLoading
            hasNextPage={post.hasNextPage}
            isFetchingNextPage={post.isFetchingNextPage}
            fetchNextPage={post.fetchNextPage}
          />
        </div>
      )}
    </>
  );
};

export default PostCardList;
