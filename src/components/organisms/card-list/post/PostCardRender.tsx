import { AxiosResponse } from "axios";
import { UseInfiniteQueryResult } from "react-query";

import PostCard from "@Components/molecules/card/PostCard";
import { CardLoading } from "@Components/molecules/cards/Loading";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";

interface PostCardRenderProps {
  postList: UseInfiniteQueryResult<
    AxiosResponse<GetPostsResponseDto, any>,
    ExceptionInterface
  >;
}

const PostCardRender = ({ postList }: PostCardRenderProps) => {
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
export default PostCardRender;
