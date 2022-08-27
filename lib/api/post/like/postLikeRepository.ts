import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  HasLikedResponseDto,
  PostLikeApi,
  SetLikedRequestDto,
  UnsetLikedRequestDto,
} from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class PostLikeRepository {
  protected postLikeApi: PostLikeApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.postLikeApi = new PostLikeApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }
  hasLiked(
    postId: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<HasLikedResponseDto, any>> {
    return this.postLikeApi.postsLikeControllerHasLiked(postId, options);
  }

  setLike(
    setLikedRequestDto: SetLikedRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.postLikeApi.postsLikeControllerSetLike(
      setLikedRequestDto,
      options
    );
  }

  unsetLike(
    unsetLikedRequestDto: UnsetLikedRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.postLikeApi.postsLikeControllerUnsetLike(
      unsetLikedRequestDto,
      options
    );
  }
}
