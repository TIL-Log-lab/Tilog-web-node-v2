import authService from "@Library/api/auth";
import categoryService from "@Library/api/category";
import {
  postService,
  postLikeService,
  commentService,
} from "@Library/api/post";
import usersService from "@Library/api/users";

export default {
  authService,
  usersService,
  categoryService,
  postService,
  postLikeService,
  commentService,
};
