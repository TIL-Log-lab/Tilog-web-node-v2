import { ChangeEvent, useState } from "react";

import { COMMENT_EMPTY } from "@Library/constants/comment";
import { useCreateCommentMutation } from "@Hooks/react-query/comment/useCommentMutation";

const useSubmitComment = (postId: string, replyTo: string | null) => {
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate } = useCreateCommentMutation();
  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    if (content.length === 0) return setErrorMessage(COMMENT_EMPTY.ko);
    return mutate(
      { postId, content, replyTo },
      {
        onSuccess: () => {
          setContent("");
          setErrorMessage("");
        },
      }
    );
  };
  return { handleSubmit, content, errorMessage, handleComment };
};
export default useSubmitComment;
