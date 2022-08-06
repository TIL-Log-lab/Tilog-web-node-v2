import { ChangeEvent, useState } from "react";

import { useCreateCommentMutation } from "@Hooks/react-query/comment/useCommentMutation";

const useSubmitComment = (postId: string, replyTo: string | null) => {
  const [content, setContent] = useState("");
  const { mutate } = useCreateCommentMutation();
  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    mutate({ postId, content, replyTo });
  };
  return { handleSubmit, content, handleComment };
};
export default useSubmitComment;
