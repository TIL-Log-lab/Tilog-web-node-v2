import { AxiosResponse } from "axios";
import { InfiniteQueryObserverResult } from "react-query";

import ExceptionInterface from "@Api/errors/interfaces";
import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface CardLoadingProps {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<
      AxiosResponse<GetPostsResponseDto>,
      ExceptionInterface
    >
  >;
}

export const CardLoading = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: CardLoadingProps) => {
  if (!hasNextPage) return <></>;
  if (isFetchingNextPage) return <>로딩중..</>;
  return <button onClick={() => fetchNextPage()}>더보기</button>;
};
