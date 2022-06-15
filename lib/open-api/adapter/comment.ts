import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "@Api/axiosInstance";
import { Option } from "../interface";

const commentApi = new TILog.CommentApi(undefined, undefined, axiosInstance);

export const createComment = (
  comment: TILog.CreateCommentsRequestBodyDto,
  options?: Option
) => commentApi.commentsControllerCreateComment(comment, options);

export const getComment = (
  postId: string,
  replyTo?: string,
  options?: Option
) => commentApi.commentsControllerGetComments(postId, replyTo, options);

export const deleteComment = (
  comment: TILog.DeleteCommentRequestDto,
  options?: Option
) => commentApi.commentsControllerDeleteComment(comment, options);

export const updateComment = (
  comment: TILog.UpdateCommentRequestDto,
  options?: Option
) => commentApi.commentsControllerUpdateComment(comment, options);
