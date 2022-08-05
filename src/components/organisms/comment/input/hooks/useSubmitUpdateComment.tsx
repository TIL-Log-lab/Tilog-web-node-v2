import { ChangeEvent, useState } from "react";

import { useUpdateCommentMutation } from "@Hooks/react-query/comment/useCommentMutation";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

const useSubmitUpdateComment = (
  comment: GetCommentsItem,
  handleUpdate: () => void
) => {
  const [updateContent, setUpdateContent] = useState(comment.content);
  const { mutate } = useUpdateCommentMutation();
  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateContent(e.target.value);
  };
  const handleSubmit = () => {
    const { postId, replyTo, id } = comment;
    console.log(postId, updateContent, replyTo, id);
    mutate(
      { postId, content: updateContent, replyTo, commentId: id },
      {
        onSuccess: () => {
          handleUpdate();
        },
      }
    );
  };
  return { handleSubmit, updateContent, handleComment };
};
export default useSubmitUpdateComment;
