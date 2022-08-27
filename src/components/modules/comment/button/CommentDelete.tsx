import { IoMdClose } from "react-icons/io";

import { useDeleteCommentMutation } from "@Hooks/react-query/comment/useCommentMutation";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

import GetPostDetailRequestDto from "@Library/api/post/interface/getPostDetailRequest";

interface CommentDeleteProps {
  commentId: GetCommentsItem["id"];
  postId: GetPostDetailRequestDto["postId"];
  replyTo: GetCommentsItem["replyTo"];
}
const CommentDelete = ({ commentId, postId, replyTo }: CommentDeleteProps) => {
  const { mutate } = useDeleteCommentMutation();
  const handleDeleteComment = () => {
    mutate({
      commentId,
      postId,
      replyTo,
    });
  };
  return (
    <button type="button" onClick={handleDeleteComment}>
      <IoMdClose className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" />
    </button>
  );
};
export default CommentDelete;
