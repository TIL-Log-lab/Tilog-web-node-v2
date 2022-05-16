import { useContext } from "react";
import { useQuery } from "react-query";

import { tilogApi } from "@Api/core";
import { AccessTokenContext } from "@Context/access-token/AccessToken";

import { ExceptionInterface } from "@Api/errors/interface/exception.interface";

export default function useGetLikeQuery(postId: string) {
  const { accessToken, setStateGetAccessToken } =
    useContext(AccessTokenContext);

  return useQuery(
    ["like", accessToken],
    () => {
      return tilogApi.postsLikeControllerHasLiked(postId, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      onError: (error: ExceptionInterface) => {
        if (error.statusCode === 401) setStateGetAccessToken();
      },
    }
  );
}
