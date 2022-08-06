import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import { GetCommentsResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";

const useGetChildCommentQuery = (
  isOpen: boolean,
  postId: string,
  replyTo: string
) => {
  return useQuery<
    AxiosResponse<GetCommentsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCommentsResponseDto>
  >(
    ["comment", "child", replyTo],
    () => api.commentService.getComments(postId, replyTo),
    {
      enabled: isOpen,
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetChildCommentQuery;
