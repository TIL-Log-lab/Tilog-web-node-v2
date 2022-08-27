import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  CommentApi,
  CreateCommentsRequestBodyDto,
  DeleteCommentRequestDto,
  GetCommentsResponseDto,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Library/api/interface/RepositoryConfig";

export default class CommentRepository {
  protected commentApi: CommentApi;
  constructor(repositoryConfig: RepositoryConfig) {
    this.commentApi = new CommentApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }
  createComment(
    createCommentsRequestBodyDto: CreateCommentsRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.commentApi.commentsControllerCreateComment(
      createCommentsRequestBodyDto,
      options
    );
  }

  deleteComment(
    deleteCommentRequestDto: DeleteCommentRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.commentApi.commentsControllerDeleteComment(
      deleteCommentRequestDto,
      options
    );
  }

  getComments(
    postId: string,
    replyTo?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCommentsResponseDto, any>> {
    return this.commentApi.commentsControllerGetComments(
      postId,
      replyTo,
      options
    );
  }

  updateComment(
    updateCommentRequestDto: UpdateCommentRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, any>> {
    return this.commentApi.commentsControllerUpdateComment(
      updateCommentRequestDto,
      options
    );
  }
}
