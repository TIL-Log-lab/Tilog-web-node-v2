import toast from "react-hot-toast";
import { useMutation } from "react-query";

import { TilogApiForPostLike } from "@Api/core";

import { SetLikedRequestDto } from "@til-log.lab/tilog-api";
import { ExceptionInterface } from "@Api/errors/interface/exception.interface";

export default function useLikesMutation() {
  const likeMutation = useMutation(
    (postId: string) => {
      const setLikedRequestDto: SetLikedRequestDto = {
        postId,
      };
      return TilogApiForPostLike.postsLikeControllerSetLike(setLikedRequestDto);
    },
    {
      onError: (error: ExceptionInterface) => {
        toast.error(error.message);
      },
    }
  );

  const unLikeMutation = useMutation(
    (postId: string) => {
      const setLikedRequestDto: SetLikedRequestDto = {
        postId,
      };
      return TilogApiForPostLike.postsLikeControllerUnsetLike(
        setLikedRequestDto
      );
    },
    {
      onError: (error: ExceptionInterface) => {
        toast.error(error.message);
      },
    }
  );

  return [likeMutation, unLikeMutation];
}
