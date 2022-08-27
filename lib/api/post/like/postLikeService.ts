import { AxiosRequestConfig, AxiosResponse } from "axios";

import validateToken from "@Library/api/auth/validateTokenDecorator";
import PostLikeRepository from "@Library/api/post/like/postLikeRepository";

import {
  HasLikedResponseDto,
  SetLikedRequestDto,
  UnsetLikedRequestDto,
} from "@til-log.lab/tilog-api";

import ExceptionInterface from "@Library/api/exception/interface";
import LikedRequestDto from "@Library/api/post/like/interface/LikedRequestDto";
import PostHasLikeDto from "@Library/api/post/like/interface/postHasLikeDto";

export default class PostLikeService {
  constructor(private readonly postLikeRepository: PostLikeRepository) {}

  @validateToken()
  private setLike(
    postId: SetLikedRequestDto["postId"],
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    const setLikedRequestDto: SetLikedRequestDto = {
      postId,
    };
    return this.postLikeRepository.setLike(setLikedRequestDto, options);
  }

  @validateToken()
  private unsetLike(
    postId: UnsetLikedRequestDto["postId"],
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    const unsetLikedRequestDto: UnsetLikedRequestDto = {
      postId,
    };
    return this.postLikeRepository.unsetLike(unsetLikedRequestDto, options);
  }

  @validateToken()
  hasLiked(
    postId: PostHasLikeDto["postId"],
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<HasLikedResponseDto, ExceptionInterface>> {
    return this.postLikeRepository.hasLiked(postId, options);
  }

  async toggleLike(
    postId: LikedRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    const { data } = await this.hasLiked(postId, options);
    const isLiked = data.like;

    if (isLiked) return this.unsetLike(postId, options);
    return this.setLike(postId, options);
  }
}
