import { TilogApiForPost } from "@Api/core";
import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

type AccessToken = GetAccessTokenUsingRefreshTokenResponse["accessToken"];

const getPostDetail = (postId: string, accessToken: AccessToken) => {
  return TilogApiForPost.postsControllerGetPostDetail(postId, {
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  });
};

export default getPostDetail;
