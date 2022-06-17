import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import { languageSelector } from "@Redux/userInfo";
import { useCreateCommentMutation } from "@Query/comment/useCommentMutation";

import { CommentRefetch } from "@Organisms/comment/interface";
import CommentInput from "@Molecules/input/Comment";
import SubmitButton from "@Molecules/button/Submit";

interface CommentInputProps {
  refetch: () => CommentRefetch;
  postId: string;
  replyTo?: string;
}
const CommentSubmit = ({ postId, replyTo, refetch }: CommentInputProps) => {
  const [content, setContent] = useState("");
  const mutation = useCreateCommentMutation();
  const language = useSelector(languageSelector);

  const handleCreateComment = () => {
    mutation.mutate(
      {
        postId,
        content,
        replyTo,
      },
      {
        onSuccess: () => {
          setContent("");
          refetch();
        },
        onError: (e) => {
          toast.error(e.message[language]);
        },
      }
    );
  };
  return (
    <div className="flex w-full mt-10 bg-gray-100 rounded-lg h-28 dark:bg-gray-700">
      <CommentInput
        content={content}
        placeholder="댓글을 입력해주세요."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <SubmitButton content={content} onClick={handleCreateComment} />
    </div>
  );
};

export default CommentSubmit;
