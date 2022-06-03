import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";

import { TilogApiForPostLike } from "@Api/core";
import { languageSelector } from "@Redux/userInfo";

import ExceptionInterface from "@Api/errors/interfaces";

export default function useLikesMutation() {
  const language = useSelector(languageSelector);
  const likeMutation = useMutation(
    (postId: string) => {
      return TilogApiForPostLike.postsLikeControllerSetLike({ postId: postId });
    },
    {
      onError: (error: ExceptionInterface) => {
        toast.error(error.message[language]);
      },
    }
  );

  const unLikeMutation = useMutation(
    (postId: string) => {
      return TilogApiForPostLike.postsLikeControllerUnsetLike({
        postId: postId,
      });
    },
    {
      onError: (error: ExceptionInterface) => {
        toast.error(error.message[language]);
      },
    }
  );

  return [likeMutation, unLikeMutation];
}
