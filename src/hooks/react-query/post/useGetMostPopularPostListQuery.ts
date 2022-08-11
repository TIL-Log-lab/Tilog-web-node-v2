import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";

import useSearchCategory from "@Hooks/react-query/category/useSearchCategory";
import api from "@Library/api";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

interface GetMostPopularPostListQueryInterface {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
}

const useGetMostPopularPostListQuery = ({
  categoryName,
  dateScope,
  sortScope,
  maxContent,
  page,
}: GetMostPopularPostListQueryInterface) => {
  const searchCategory = useSearchCategory();
  const data = searchCategory(categoryName);
  const categoryId = data?.length === 1 ? data[0].id : 0;

  return useInfiniteQuery<
    AxiosResponse<GetPostsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetPostsResponseDto>
  >(
    ["mostPopularPostList", dateScope, sortScope, categoryName],
    ({ pageParam = page }) => {
      return api.postService.getPosts(
        dateScope,
        sortScope,
        pageParam,
        maxContent,
        categoryId
      );
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: 1000 * 60,
      getNextPageParam: (lastPages, pages) => {
        const nextPage = pages.length;
        const lastPagesListCount = lastPages.data.list.length;

        if (lastPagesListCount !== 0 && lastPagesListCount % maxContent === 0) {
          return nextPage;
        }
        return null;
      },
    }
  );
};

export default useGetMostPopularPostListQuery;
