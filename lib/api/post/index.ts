import { tilogApi } from "@Library/api/httpclient";
import CommentRepository from "@Library/api/post/comment/CommentRepository";
import CommentService from "@Library/api/post/comment/CommentService";
import PostLikeRepository from "@Library/api/post/like/postLikeRepository";
import PostLikeService from "@Library/api/post/like/postLikeService";
import PostRepository from "@Library/api/post/postRepository";
import PostService from "@Library/api/post/postService";

const postRepository = new PostRepository({ axios: tilogApi.http });
const postLikeRepository = new PostLikeRepository({ axios: tilogApi.http });
const commentRepository = new CommentRepository({ axios: tilogApi.http });

const postService = new PostService(postRepository);
const postLikeService = new PostLikeService(postLikeRepository);

const commentService = new CommentService(commentRepository);

export { postService, postLikeService, commentService };
