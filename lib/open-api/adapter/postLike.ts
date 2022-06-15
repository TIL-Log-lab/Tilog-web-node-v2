import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "@Api/axiosInstance";
import { Option } from "../interface";

const postLikeApi = new TILog.PostLikeApi(undefined, undefined, axiosInstance);

export const setLike = (
  postId: TILog.SetLikedRequestDto["postId"],
  options?: Option
) => postLikeApi.postsLikeControllerSetLike({ postId }, options);

export const unSetLike = (
  postId: TILog.UnsetLikedRequestDto["postId"],
  options?: Option
) => postLikeApi.postsLikeControllerUnsetLike({ postId }, options);

export const hasLiked = (postId: string, options?: Option) =>
  postLikeApi.postsLikeControllerHasLiked(postId, options);
