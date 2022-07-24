import { TILOG_API } from "@Constants/environment";
import httpClient from "@Library/api/httpClient";
import PostRepository from "@Library/api/post/postRepository";
import PostService from "@Library/api/post/postService";

const postRepository = new PostRepository(httpClient.http, TILOG_API);
const postService = new PostService(postRepository, httpClient.http);

export default postService;
