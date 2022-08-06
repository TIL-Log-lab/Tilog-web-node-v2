import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetPostDetailRequestDto from "@Library/api/post/interface/getPostDetailRequest";

const useGetPostDetailQuery = (postId: GetPostDetailRequestDto["postId"]) => {
  return useQuery<
    AxiosResponse<GetPostDetailResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetPostDetailResponseDto>,
    string[]
  >(["post-detail", postId], () => api.postService.getPostDetail(postId), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export default useGetPostDetailQuery;
