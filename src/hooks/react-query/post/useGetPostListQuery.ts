import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";

import { getPosts } from "@Api/adapter";

import ExceptionInterface from "@Api/errors/interfaces";
import { GetPostsRequestDto } from "@Api/interface/post";
import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface GetPostListQueryInterface extends GetPostsRequestDto {
  queryKey: string;
}

const useGetPostListQuery = ({
  queryKey,
  dateScope,
  sortScope,
  maxContent,
  userId,
  page,
  categoryId,
}: GetPostListQueryInterface) => {
  return useInfiniteQuery<
    AxiosResponse<GetPostsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetPostsResponseDto>,
    string
  >(
    queryKey,
    async ({ pageParam = page }) => {
      return await getPosts(
        dateScope,
        sortScope,
        pageParam,
        maxContent,
        userId,
        categoryId
      );
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,

      getNextPageParam: (lastPages, pages) => {
        const nextPage = pages.length;
        const lastPagesListCount = lastPages.data.list.length;

        if (lastPagesListCount != 0 && lastPagesListCount % maxContent === 0) {
          return nextPage;
        }
      },
    }
  );
};

export default useGetPostListQuery;
