import { useQuery } from "react-query";

import { TilogApiForPostLike } from "@Api/core";

export default function useGetLikeQuery(postId: string) {
  return useQuery(
    "like",
    () => {
      return TilogApiForPostLike.postsLikeControllerHasLiked(postId);
    },
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
}
