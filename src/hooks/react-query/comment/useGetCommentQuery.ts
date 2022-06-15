import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { getComment } from "@Api/adapter";

import ExceptionInterface from "@Api/errors/interfaces";
import { GetCommentsResponseDto } from "@til-log.lab/tilog-api";

export const useGetParentCommentQuery = (postId: string) => {
  return useQuery<
    AxiosResponse<GetCommentsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCommentsResponseDto>,
    string
  >("comment", () => getComment(postId));
};
export const useGetChildrenCommentCount = (
  postId: string,
  commentId: string
) => {
  return useQuery<
    AxiosResponse<GetCommentsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCommentsResponseDto>,
    string
  >("commentCount", () => getComment(postId, commentId));
};

export const useGetChildrenComment = (
  queryKey: string,
  isOpen: boolean,
  postId: string,
  replyTo: string
) => {
  return useQuery<
    AxiosResponse<GetCommentsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCommentsResponseDto>,
    string
  >(queryKey, () => getComment(postId, replyTo), {
    enabled: isOpen,
  });
};
