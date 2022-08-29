import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  CreatePostRequestBodyDto,
  GetPostDetailResponseDto,
  GetPostsResponseDto,
  ModifyPostRequestBodyDto,
  PostApi,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class PostRepository {
  protected postApi: PostApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.postApi = new PostApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }
  createPost(
    createPostRequestBodyDto: CreatePostRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postApi.postsControllerCreatePost(
      createPostRequestBodyDto,
      options
    );
  }
  getPostDetail(
    postId: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetPostDetailResponseDto, ExceptionInterface>> {
    return this.postApi.postsControllerGetPostDetail(postId, options);
  }
  getPosts(
    dateScope: "All" | "Daily" | "Weekly" | "Monthly",
    sortScope: "likes" | "viewCounts" | "createdAt",
    page: number,
    maxContent: number,
    userId?: number,
    categoryId?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetPostsResponseDto, ExceptionInterface>> {
    return this.postApi.postsControllerGetPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      categoryId,
      options
    );
  }

  modifyPost(
    modifyPostRequestBodyDto: ModifyPostRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postApi.postsControllerModifyPost(
      modifyPostRequestBodyDto,
      options
    );
  }
}
