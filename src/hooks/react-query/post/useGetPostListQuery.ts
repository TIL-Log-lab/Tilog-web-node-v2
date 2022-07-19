import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";

import useGetCategoryListQuery from "@Hooks/react-query/category/useGetCategoryListQuery";
import api from "@Library/api";
import ExceptionInterface from "@Library/api/exception/interface";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

import GetPostRequestDto from "@Library/api/post/interface/GetPostRequestDto";

interface GetPostListQueryInterface {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
}

const useGetPostListQuery = ({
  categoryName,
  dateScope,
  sortScope,
  maxContent,
  userId,
  page,
}: GetPostListQueryInterface) => {
  const { data } = useGetCategoryListQuery(categoryName);
  const categoryId = !data ? 0 : data.data.list[0].id;

  return useInfiniteQuery<
    AxiosResponse<GetPostsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetPostsResponseDto>,
    string
  >(
    `PostList-${categoryName}`,
    ({ pageParam = page }) => {
      return api.postService.getPosts(
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
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: 1000 * 60,
      enabled: !!categoryId,
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

export default useGetPostListQuery;
