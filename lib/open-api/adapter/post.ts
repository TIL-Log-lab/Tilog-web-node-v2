import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "@Api/axiosInstance";
import { Option } from "../interface";

const postApi = new TILog.PostApi(undefined, undefined, axiosInstance);

export const createPost = (
  post: TILog.CreatePostRequestBodyDto,
  options?: Option
) => postApi.postsControllerCreatePost(post, options);

export const updatePost = (
  post: TILog.ModifyPostRequestBodyDto,
  options?: Option
) => postApi.postsControllerModifyPost(post, options);

export const getPosts = (
  dateScope: "All" | "Daily" | "Weekly" | "Monthly",
  sortScope: "likes" | "viewCounts" | "createdAt",
  page: number,
  maxContent: number,
  userId?: number | undefined,
  categoryId?: number | undefined,
  options?: Option
) =>
  postApi.postsControllerGetPosts(
    dateScope,
    sortScope,
    page,
    maxContent,
    userId,
    categoryId,
    options
  );

export const getPostDetail = (postId: string, option?: Option) =>
  postApi.postsControllerGetPostDetail(postId, option);
