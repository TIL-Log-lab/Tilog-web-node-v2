import { AxiosRequestConfig, AxiosResponse } from "axios";

import validateToken from "@Library/api/auth/validateTokenDecorator";
import PostRepository from "@Library/api/post/postRepository";

import {
  CreatePostRequestBodyDto,
  GetPostDetailResponseDto,
  GetPostsResponseDto,
  ModifyPostRequestBodyDto,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import GetPostRequestDto from "@Library/api/post/interface/getPostRequestDto";

export default class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  @validateToken()
  createPost(
    createPostRequestBodyDto: CreatePostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postRepository.postsControllerCreatePost(
      createPostRequestBodyDto,
      options
    );
  }

  getPostDetail(
    postId: string,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetPostDetailResponseDto, ExceptionInterface>> {
    return this.postRepository.postsControllerGetPostDetail(postId, options);
  }

  getPosts(
    dateScope: GetPostRequestDto["dateScope"],
    sortScope: GetPostRequestDto["sortScope"],
    page: GetPostRequestDto["page"],
    maxContent: GetPostRequestDto["maxContent"],
    userId?: GetPostRequestDto["userId"],
    categoryId?: GetPostRequestDto["categoryId"],
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetPostsResponseDto, any>> {
    return this.postRepository.postsControllerGetPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      categoryId,
      options
    );
  }

  @validateToken()
  modifyPost(
    post: ModifyPostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, any>> {
    return this.postRepository.postsControllerModifyPost(post, options);
  }
}
