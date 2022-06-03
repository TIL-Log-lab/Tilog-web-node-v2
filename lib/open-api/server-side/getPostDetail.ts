import { TilogApiForPost } from "@Api/core";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

type AccessToken = GetAccessTokenUsingRefreshTokenResponse["accessToken"];

export default function getPostDetail(
  postId: string,
  accessToken: AccessToken
) {
  return TilogApiForPost.postsControllerGetPostDetail(postId, {
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  });
}
