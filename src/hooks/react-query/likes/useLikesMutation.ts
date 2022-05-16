import { useContext } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

import { tilogApi } from "@Api/core";
import { AccessTokenContext } from "@Context/access-token/AccessToken";

import { SetLikedRequestDto } from "@til-log.lab/tilog-api";
import { ExceptionInterface } from "@Api/errors/interface/exception.interface";

export default function useLikesMutation() {
  const { accessToken, setStateGetAccessToken } =
    useContext(AccessTokenContext);

  const likeMutation = useMutation(
    (postId: string) => {
      const setLikedRequestDto: SetLikedRequestDto = {
        postId,
      };
      return tilogApi.postsLikeControllerSetLike(setLikedRequestDto, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },
    {
      onError: (error: ExceptionInterface) => {
        if (error.statusCode === 401) setStateGetAccessToken();
        else toast.error(error.message);
      },
    }
  );

  const unLikeMutation = useMutation(
    (postId: string) => {
      const setLikedRequestDto: SetLikedRequestDto = {
        postId,
      };
      return tilogApi.postsLikeControllerUnsetLike(setLikedRequestDto, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },
    {
      onError: (error: ExceptionInterface) => {
        if (error.statusCode === 401) setStateGetAccessToken();
        else toast.error(error.message);
      },
    }
  );

  return [likeMutation, unLikeMutation];
}
