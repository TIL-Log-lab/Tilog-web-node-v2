import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import api from "@Library/api";

import ExceptionInterface from "@Library/api/exception/interface";
import LikedRequestDto from "@Library/api/post/like/interface/LikedRequestDto";

export default function useLikeMutation() {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<void, ExceptionInterface>,
    ExceptionInterface,
    string
  >((postId: LikedRequestDto) => api.postLikeService.toggleLike(postId), {
    onError: (err) => {
      toast.error(err.message.ko);
    },
    onSuccess(_data, variables) {
      queryClient.refetchQueries(["post-detail", variables]);
      queryClient.refetchQueries(["like", variables]);
    },
  });
}
