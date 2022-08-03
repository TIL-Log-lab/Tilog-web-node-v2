import { TILOG_API } from "@Constants/environment";
import httpClient from "@Library/api/httpClient";
import PostLikeRepository from "@Library/api/post/like/postLikeRepository";
import PostLikeService from "@Library/api/post/like/postLikeService";
import PostRepository from "@Library/api/post/postRepository";
import PostService from "@Library/api/post/postService";

const postRepository = new PostRepository(httpClient.http, TILOG_API);
const postLikeRepository = new PostLikeRepository(httpClient.http, TILOG_API);

const postService = new PostService(postRepository);
const postLikeService = new PostLikeService(postLikeRepository);

export { postService, postLikeService };
