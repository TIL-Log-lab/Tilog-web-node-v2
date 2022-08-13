import { TILOG_API } from "@Library/constants/environment";
import httpClient from "@Library/api/httpClient";
import CommentRepository from "@Library/api/post/comment/CommentRepository";
import CommentService from "@Library/api/post/comment/CommentService";
import PostLikeRepository from "@Library/api/post/like/postLikeRepository";
import PostLikeService from "@Library/api/post/like/postLikeService";
import PostRepository from "@Library/api/post/postRepository";
import PostService from "@Library/api/post/postService";

const postRepository = new PostRepository(httpClient.http, TILOG_API);
const postLikeRepository = new PostLikeRepository(httpClient.http, TILOG_API);
const commentRepository = new CommentRepository(httpClient.http, TILOG_API);

const postService = new PostService(postRepository);
const postLikeService = new PostLikeService(postLikeRepository);

const commentService = new CommentService(commentRepository);

export { postService, postLikeService, commentService };
