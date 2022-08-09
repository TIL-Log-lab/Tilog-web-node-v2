import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";
import api from "@Library/api";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";

const useGetPostDetailQuery = (postId: string) => {
  const userInfo = useGetMeQuery();
  return useQuery<
    AxiosResponse<GetPostDetailResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetPostDetailResponseDto>,
    string[]
  >(["post-detail", postId], () => api.postService.getPostDetail(postId), {
    enabled: !userInfo.isIdle && !userInfo.isLoading,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export default useGetPostDetailQuery;
