import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Library/api";

import { HasLikedResponseDto } from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import PostHasLikeDto from "@Library/api/post/like/interface/postHasLikeDto";

export default function useGetHasLikeQuery(postId: PostHasLikeDto["postId"]) {
  return useQuery<
    AxiosResponse<HasLikedResponseDto>,
    ExceptionInterface,
    AxiosResponse<HasLikedResponseDto>
  >(["like", postId], () => api.postLikeService.hasLiked(postId), {
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
