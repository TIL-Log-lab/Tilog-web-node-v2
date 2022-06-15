import { useQuery } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";
import { hasLiked } from "@Api/adapter/postLike";
import { AxiosResponse } from "axios";
import { HasLikedResponseDto } from "@til-log.lab/tilog-api";
import ExceptionInterface from "@Api/errors/interfaces";

export default function useGetHasLikeQuery(postId: string) {
  return useQuery<
    AxiosResponse<HasLikedResponseDto>,
    ExceptionInterface,
    AxiosResponse<HasLikedResponseDto>,
    string
  >("like", async () => clientSideAuthentication(() => hasLiked(postId)), {
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
